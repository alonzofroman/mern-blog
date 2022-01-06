const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernblog', {
    useNewUrlParser: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;