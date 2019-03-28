var jwt = require('jsonwebtoken');

module.exports = {
    ensureAuthenticated: function (req, res, next) {
        // if (req.isAuthenticated()) {
        //     return next();
        // }
        // res.redirect('/users/login');
        var token;
        if ('authorization' in req.headers) {
            token = req.headers['authorization'].split(" ")[1]
        }
        if (!token)
            return res.status(403).send({ auth: false, message: 'No Token provided' })
        else
            jwt.verify(token, 'shhhhh', (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, mssage: 'Token Authentication Failed' })
                else {
                    req._id = decoded._id
                    req.role = decoded.role;
                    next()
                }
            })
    }
}