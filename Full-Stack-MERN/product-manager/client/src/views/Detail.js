import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';

    
const Detail = (props) => {
    const [product, setProduct] = useState({})
   
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => console.log(res), navigate('/products'))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/products/" + product._id + "/edit"}    >  Edit
</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}} style={{marginLeft:"5px"}}>
                        Delete
                    </button>
  


        </div>
    )
}
    
export default Detail;

