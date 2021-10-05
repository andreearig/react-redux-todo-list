const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    const token = req.cookies.acces_token;
    jwt.verify(token, "randomString", async (err) => {
        if (err) {
            res.redirect("/login");
        }
        else next();
    })
}
module.exports = authenticate;