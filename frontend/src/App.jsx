import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "./components/Search"
import TableRow from "./components/TableRow"
import ButtonComponent from "./components/ButtonComponent"

function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/vendas")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  const filteredProducts = products.filter((p) =>
    p.product.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="text-bg-dark vh-100">
      <div className="d-flex gap-3 p-3 flex-column flex-md-row">
      <Search setSearchTerm={setSearchTerm}/>
      <Link to="/add">
        <ButtonComponent icon="folder-plus" btnStyle="success" />
      </Link>
      </div>

      <table className="table-dark table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col" className="w-25">ID</th>
            <th scope="col">Product</th>
            <th scope="col">Cost</th>
            <th scope="col">Qty</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p, index) => (
            <>
            <TableRow
              key={p._id}
              id={p._id}
              product={p.product}
              cost={p.cost}
              qty={p.qty}
            />
            </>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
