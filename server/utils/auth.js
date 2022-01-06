const jwt = require ('jsonwebtoken');

const secret = 'secret';
const expiration = '2h';

module.exports = {
    authMiddleware: function (req, res, next) {
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return res.status(400).json({ message: 'You have no token. Please log in or try again.' });
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('invalid token');
            return res.status(400).json({ message: 'Invalid token, please try again.' });
        }

        next();
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};