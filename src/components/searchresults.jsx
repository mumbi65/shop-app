import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchResult = () => {

    const location = useLocation()
    const {product} = location.state
    
    return(
        <>
        <div className="card">
                <img src={product.images[0]} className="card-img-top custom-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h5>Price: {product.price} </h5>
                    
                    <a href="#" className="btn btn-primary">Add to cart</a>
                    <Link to="/productcontent" state={product} className="btn btn-primary" style={{margin: "5px"}}>View More</Link>
                </div>
            </div>
        </>
    )
}

export default SearchResult