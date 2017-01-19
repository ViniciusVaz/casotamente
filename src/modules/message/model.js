const mongoose = require("@common/model")

var schema = mongoose.Schema(
    {
        from: { type: String, unique: false, required: true },
        to: { type: String, unique: false, required: true },
        message: { type: String, unique: false, required: true}
    }
)

module.exports = mongoose.model('Message', schema, 'message')