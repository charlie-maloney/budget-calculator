const Data = require('../models/dataModel')
const dataController = {};

dataController.saveData = (req, res, next) => {
  data = req.body
  const {userID}  = data
  delete data[userID]
  Data.update({userID: userID}, req.body, {upsert: true}, (err, result) => {
    if (err) {
      next({
        log: 'Error in saveData controller',
        msg: err
      })
    } else {
      return next()
    }
  })
}

dataController.getData = (req, res, next) => {
  const {userID} = req.body
  console.log('userID:', userID)
  Data.find({userID: userID}, (err, doc) => {
    if (err) {
      next({
        log: 'Error in getData controller',
        msg: err
      })
    } else {
      res.locals.data = doc[0]
      return next()
    }
  })
}

module.exports = dataController;