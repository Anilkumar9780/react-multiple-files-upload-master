import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    file: {
        type: Array
    }
}, {
    collection: 'images'
})

let user = mongoose.model('images', userSchema);

export default user;