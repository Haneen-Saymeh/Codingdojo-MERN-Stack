import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

    
const Detail = (props) => {
    const [product, setProduct] = useState({})
   
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);


   
    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/products/" + product._id + "/edit"}    >  Edit
</Link>

<DeleteButton productId={product._id} successCallback={() => navigate("/products")} />
  


        </div>
    )
}
    
export default Detail;

