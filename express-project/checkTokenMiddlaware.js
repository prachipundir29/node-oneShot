
let checkToken = (req, res, next) => {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Token is missing",
    });
  }
  if (req.query.token != process.env.MyToken) {
    return res.send({
      status: 0,
      msg: "Token is invalid",
    });
  }
  next();
};

module.exports = {checkToken}