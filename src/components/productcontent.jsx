import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const ProductDetails = () =>{
    const location = useLocation()
    const details = location.state
    console.log(details)

    return(
        <>
        <NavBar/>
        <div className="container d-flex justify-content-center my-5">
        <div className="card" style={{ maxWidth: '600px' }}>
                <img src={details.images[0]} className="card-img-top custom-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{details.title}</h5>
                    <h5>Price: {details.price} </h5>
                    <p className="card-text">{details.description}</p>
                    <Link to="/" className="btn btn-success" style={{margin: "5px"}}>Back To Home</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetails