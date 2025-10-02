import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';   
import cors from 'cors';
import VendaMensal from './VendaMensal.js'; 

dotenv.config();
process.env.MONGO_URI;

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());
app.use(cors({
  origin: "http://localhost:5173"
}));

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log("Error to connect to MongoDB: ", error);
    }
}

conectDB();

// Create
app.post('/vendas', async (req, res) => {
    try {
        const novaVenda = await VendaMensal.create(req.body);
        res.json(novaVenda);
    } catch (error) {
        res.json({ error: error});   
    }
});

// Read
app.get('/vendas', async (req, res) => {
    try {
        const vendasMensais = await VendaMensal.find();    
        res.json(vendasMensais);
    } catch (error) {
        res.json({ error: error});
    }
});

// Read by ID
app.get('/vendas/:id', async (req, res) => {
  try {
    const venda = await VendaMensal.findById(req.params.id)
    res.json(venda)
  } catch (error) {
    res.json({ error: error })
  }
})

// Update
app.put('/vendas/:id', async (req, res) => {
    try {
        const vendaAtualizada = await VendaMensal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(vendaAtualizada);
    } catch (error) {
        res.json({ error: error});
    }
});

// Delete
app.delete('/vendas/:id', async (req, res) => {
    try {
        const vendaDeletada = await VendaMensal.findByIdAndDelete(req.params.id);
        res.json(vendaDeletada);
    } catch (error) {
        res.json({ error: error});
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));