import mongoose from "mongoose";

const orderBookSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
      },
      price: {
        type: Number,
        required: true
      },
      side: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        required: true,
        trim: true
      },
      symbol: {
        type: String,
        required: true,
        trim: true
      },
      timestamp: {
        type: String,
        required: true
      }
})

const OrderBook = mongoose.model("OrderBook", orderBookSchema);

export default OrderBook;