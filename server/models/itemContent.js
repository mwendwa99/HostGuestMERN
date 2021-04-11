import mongoose from 'mongoose';

// item schema
const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    imageurl:
    {
        data: Buffer,
        contentType: String
    }

});

//item model based on the schema
const ItemContent = mongoose.model('ItemContent', itemSchema);

export default ItemContent;