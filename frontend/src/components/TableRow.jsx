import { useNavigate } from "react-router-dom";

const TableRow = ({ id, product, cost, qty }) => {
  const navigate = useNavigate();

  const goToEditProduct = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <tr>
      <td scope="row">{product}</td>
      <td>{cost}</td>
      <td>{qty}</td>
      <td>
        <i className="bi bi-pencil" style={{ cursor: "pointer" }} onClick={goToEditProduct}></i>
      </td>
    </tr>
  )
}

export default TableRow