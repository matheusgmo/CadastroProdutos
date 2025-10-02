import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";

const EditProduct = () => { 
    const { id } = useParams() // pega o :id da URL
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        product: "",
        cost: 0,
        qty: 0
    })

    useEffect(() => {
        fetch(`http://localhost:3000/vendas/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct((prev) => ({ ...prev, [name]: value }))
    }

    const handleUpdate = async () => {
        try {
        const res = await fetch(`http://localhost:3000/vendas/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
        if (res.ok) {
            alert("Produto atualizado com sucesso!")
            navigate("/") // volta para home
        }
        } catch (error) {
        console.error(error)
        }
    }

    const handleDelete = async () => {
        try {
        const res = await fetch(`http://localhost:3000/vendas/${id}`, {
            method: "DELETE"
        })
        if (res.ok) {
            alert("Produto deletado com sucesso!")
            navigate("/")
        }
        } catch (error) {
        console.error(error)
        }
    }

    return (
    <div className="text-bg-dark vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column gap-3 p-3">
        <InputComponent
          type="text"
          placeholder="Product Name"
          name="product"
          value={product.product}
          onChange={handleChange}
        />
        <InputComponent
          type="number"
          placeholder="Cost"
          name="cost"
          value={product.cost}
          onChange={handleChange}
        />
        <InputComponent
          type="number"
          placeholder="Quantity"
          name="qty"
          value={product.qty}
          onChange={handleChange}
        />
        <ButtonComponent icon="pencil" btnStyle="success" onClick={handleUpdate} />
        <ButtonComponent icon="trash" btnStyle="danger" onClick={handleDelete} />
      </div>
    </div>
    );
};

export default EditProduct;