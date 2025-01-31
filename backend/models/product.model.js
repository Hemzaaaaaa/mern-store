import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // CreatedAt, UpdatedAt
});

const Product = mongoose.model('Product', productSchema);
// mongoose will handel the name for you it will be renamed to "products"

export default Product;