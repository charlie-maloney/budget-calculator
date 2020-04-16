const User = require('../models/userModel')
const userController = {};
const bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10;

userController.createUser = (req, res, next) => {
  const {email, password} = req.body
  User.create({email: email, password: password}, (err, doc) => {
    if (err) {
      return next({
        log: 'Error in userController.createUser',
        message: err
      })
    } else {
      res.locals.userID = doc._id
      return next()
    }
  })
}

userController.verifyUser = (req, res, next) => {
  const {email, password} = req.body
  User.find({email: email}, (err, doc) => {
    if (err) {
      return next({
        log: 'Error in userController.createUser',
        message: err
      })
    } else if (doc.length === 1){
      bcrypt.compare(password.toString(), doc[0].password, (err, result) => {
        if (err) {
          return next({
            log: 'Error in bycrpt',
            message: err
          })
        } else if (result) {
          console.log(doc)
          res.locals.userID = doc[0]._id
          console.log(res.locals.userID)
          return next()
        } else {
          res.status(401).json({message: 'incorrect username or password'})
        }
      })
    } else {
      res.status(401).json({message: 'incorrect username or password'})
    }
  })
}


module.exports = userController;