import predictions from '../../db/Data.json'
import dictionary from '../../db/Dictionary.json'

let findClosest = (cursor, elements, orderedArray) => {
  if (elements.length === 0) {
    return orderedArray;
  }
  const closestNum = elements.reduce((prev, curr) => {
    return (Math.abs(curr.position - cursor) < Math.abs(prev.position - cursor) ? curr : prev);
  });
  const filtered = elements.filter((el) => { return el !== closestNum; });
  orderedArray.push(closestNum);
  return findClosest(cursor, filtered, orderedArray);
};

class PredictionController {

  mainPage(req, res) {
    res.send('hello')
  }

  mainResponse(req, res) {
    const text = req.params.text
    const cursorPosition = req.params.cursorPosition
    const lineNum = req.params.lineNum
    let hints = predictions.data[text]
    if (hints) {
      const orderedArray = [];
      hints = findClosest(cursorPosition * lineNum, hints, orderedArray)
      res.send(hints)
    } else {
      res.send('false')
    }
  }

  dictionary(req, res) {
    const word = req.params.word
    let dictionaryList = dictionary.words
    let results=[];
    for (let el in dictionaryList) {
      if (el.substr(0, word.length).toUpperCase() === word.toUpperCase()) {
        results.push(el);
      }
    }
    res.send(results)
  }
}

const predictionController = new PredictionController();
export default predictionController;
