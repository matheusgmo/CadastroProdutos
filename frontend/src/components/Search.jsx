const Search = ({ setSearchTerm }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control text-bg-dark"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-light" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  )
}

export default Search
