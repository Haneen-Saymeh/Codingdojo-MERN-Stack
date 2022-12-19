import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
    
const ProductList = (props) => {

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => console.log(res)
                // removeFromDom(personId)
            )
            .catch(err => console.error(err));
    }
    return (
        <div  style={{marginLeft:"39%", marginTop:"3%"}}>
            <h3>All products</h3>
            {props.products.map( (product, i) =>
            <div>
              <Link to={"/products/" + product._id} key={i}>
              {product.title}
          </Link>
          <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
          </div>
          
            )}
            
        </div>
    )
}
    
export default ProductList;

