import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
    
const ProductList = (props) => {
    return (
        <div  style={{marginLeft:"39%", marginTop:"3%"}}>
            <h>All products</h>
            {props.products.map( (product, i) =>
            <div>
              <Link to={"/products/" + product._id} key={i}>
              {product.title}
          </Link>
          </div>
          
            )}
            
        </div>
    )
}
    
export default ProductList;

