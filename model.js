const mongoose = require('mongoose');

const Contact = mongoose.Schema(
    {
        name:String,
        email:String,
        gender:String,
        create_date: {
            type: Date, 
            default: Date.now
        }
    }
);

const Connect = module.exports = mongoose.model("connectionlists", Contact);

module.exports.get = function (callback, limit) {
    Connect.find(callback).limit(limit);
}