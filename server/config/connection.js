const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernblog', {
    useNewUrlParser: true,
});

module.exports = mongoose.connection;