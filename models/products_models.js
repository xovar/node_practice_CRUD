import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "you must give a name of a product"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        img: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Product', productSchema);