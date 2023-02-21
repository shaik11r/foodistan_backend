const jwt = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
  let token = req.headers["access_token"];
  if (!token) {
    return res.status(403).send({
      message: "no token provided",
    });
  }
  try {
    const response = await jwt.verify(token, "nadeen", (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "token invalid ",
        });
      }
      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: `some error occured ${err}`,
    });
  }
};
