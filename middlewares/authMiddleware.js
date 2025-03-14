require('dotenv').config();
const SECRET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : null;
    
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    try {
        jwt.verify(token, SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};