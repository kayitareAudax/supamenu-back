const jwt = require("jsonwebtoken");
const { findUser, getUser } = require("../services/user.service")
class JwtService {
  static async verifyToken(req, res, next) {
    let token;
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.json({ success: false, message: "you are not authorized to access this route" })
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next()
  }
  static verifyRole = (roles) => {
    return (req, res, next) => {
      getUser(req.user.id)
        .then((user) => {
          if (roles.find((role) => role == user.role) == undefined)
            return res.json({ success: false, message: "You are not allowed here" });
          next();
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
          res.status(500).send('Internal Server Error');
        });
    };
  };


}
module.exports = JwtService;