import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";

const AddProduct = () => {
    const [product, setProduct] = useState("")
    const [cost, setCost] = useState("")
    const [qty, setQty] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const newProduct = { product, cost: Number(cost), qty: Number(qty) }

        try {
        const res = await fetch("http://localhost:3000/vendas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        })

        if (!res.ok) throw new Error("Erro ao adicionar produto")

        alert("Produto adicionado com sucesso!")

        // limpar inputs
        setProduct("")
        setCost("")
        setQty("")
        navigate("/");
        } catch (err) {
        console.error(err)
        alert("Erro ao cadastrar produto")
        }
    }

  return (
    <div className="text-bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column gap-3 p-3">
          <InputComponent type="text" placeholder="Product Name" value={product} onChange={e => setProduct(e.target.value)}/>
          <InputComponent type="number" placeholder="Cost" value={cost} onChange={e => setCost(e.target.value)}/>
          <InputComponent type="number" placeholder="Quantity" value={qty} onChange={e => setQty(e.target.value)}/>
          <ButtonComponent icon="folder-plus" btnStyle="success" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProduct;