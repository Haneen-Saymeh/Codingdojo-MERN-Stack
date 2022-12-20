import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

    
const Update = (props) => {
    
    const [product, setProduct] = useState();
const [loaded, setLoaded] = useState(false);
    
useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
}, [])
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + props.id, product)
            .then(res => console.log(res), navigate("/products"));
    }
    
    return (
        <div>
           {loaded && (
    <ProductForm
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialPrice={product.price}
        initialDesc={product.desc}
    />
)}
        </div>
    )
}
    
export default Update;

