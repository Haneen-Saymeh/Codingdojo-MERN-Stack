import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from '../components/DeleteButton';
    
const ProductList = (props) => {

    
    return (
        <div  style={{marginLeft:"39%", marginTop:"3%"}}>
            <h3>All products</h3>
            {props.products.map( (product, i) =>
            <div>
              <Link to={"/products/" + product._id} key={i}>
              {product.title}
          </Link>
          <DeleteButton productId={product._id} successCallback={()=>props.removeFromDom(product._id)}/>
          </div>
          
            )}
            
        </div>
    )
}
    
export default ProductList;

