import mongoose from "mongoose";

const VendaMensalSchema = new mongoose.Schema({
    product: String,
    cost: Number,
    qty: Number,
});

export default mongoose.model("VendaMensal", VendaMensalSchema);