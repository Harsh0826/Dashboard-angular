var mongoose = require("mongoose");
const url = "mongodb://localhost:27017/anguAuth";
mongoose.Promise = global.Promise;
const connect = mongoose.connect(url, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('DB Connnected Successfully.');
    }
});
module.exports = connect;