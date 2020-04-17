const cookieController = {};

cookieController.setUserID = (req, res, next) => {
  res.cookie('userID', res.locals.userID, {httpOnly: true, maxAge: 60000})
  return next()
}

module.exports = cookieController;