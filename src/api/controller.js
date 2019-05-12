import predictions from '../../db/Data.json'

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
  
}

const predictionController = new PredictionController();
export default predictionController;
