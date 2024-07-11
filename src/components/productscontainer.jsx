import React, {useState, useEffect} from "react";
import ProductCard from "./productcard";

const ProductContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp)
                setProducts(resp.products)
            })
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    return(
        <>
        <div className="container">
            <div className="row justify-content-around">
                {
                    products.map((product, index) => {
                        return(
                            <div className="col-md-4 mb-4" key={index}>
                                <ProductCard product = {product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default ProductContainer