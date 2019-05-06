import predictions from '../../db/Data.json'
class PredictionController {

  mainResponse(req, res) {
    console.log(req.params.text)
    if (predictions.data[req.params.text])
      res.send('true')
    else 
      res.send('false')
  }
}

const predictionController = new PredictionController();
export default predictionController;
