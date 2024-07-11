import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = () => {

  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const navigate = useNavigate()

  useEffect (() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products)
    })
    .catch((error) => {
      console.error("Error fetching products:", error)
    })
  }, [])

  const handleSearchChange = (e) => {
    const query = e.target.value 
    setSearchQuery(query)
    if(query){
      const filtered = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
      setFilteredProducts(filtered)
    }else{
      setFilteredProducts([])
    }
  }

  const handleProductSelect = (product) => {
    setSearchQuery(product.title)
    setFilteredProducts([])
    navigate('/searchresults', {state: {product}})
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const product = products.find(product => product.title === searchQuery)
    if(product) {
      navigate('/searchresults', {state: {product}})
    }else{
      alert('Product not found')
    }
  }

    return(
        <>
      <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: '#e3f2fd', padding: '15px'}}>
              <div className="container">
                  <a className="navbar-brand mr-4" href="#" style={{fontSize: '1.5em', color: "black"}}>Duka.com</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                  </button>
                  <div className="collapse navbar-collapse" id="navbarToggle" style={{color: 'black'}}>
                    <div className="navbar-nav ms-auto" style={{textAlign: 'right'}}>
                      <div className="nav-item">
                        <Link to="/" className="mr-4 nav-link" href="#" style={{color: "black"}}>Home</Link>
                      </div>
                      <div className="nav-item">
                        <a className="mr-4 nav-link" href="#" style={{color: "black"}}>Register</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="d-flex" role="search" onSubmit={handleSearchSubmit} >
                      <input
                          type="text"
                          onChange={handleSearchChange}
                          placeholder="Search for a country..."
                          className="form-control me-2"
                          aria-label="Search"
                          value={searchQuery}
                      />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                     </form>
                     {filteredProducts.length > 0 && (
                    <ul className="dropdown-menu show" style={{ position: "absolute", zIndex: 1000, width: "300px" }}>
                    {
                        filteredProducts.map((product, index) => (
                    
                                <li key={index} className="dropdown-item" onClick={() => handleProductSelect(product)}>
                                    {product.title}
                                </li>
                        ))
                    }
                </ul>
                )}
                  </div>
               </div>
            </nav>
            <br/>
            <br/>
        </header>
        </>
    )
}

export default NavBar