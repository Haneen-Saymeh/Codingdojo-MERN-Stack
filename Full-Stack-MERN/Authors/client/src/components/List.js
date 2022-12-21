import React from 'react';
import {Link} from '@reach/router';
import DeleteButton from '../components/DeleteButton';


const List = (props) => {
  return (
    <div>
        <Link to={"/new" } >Add new author</Link>
      <table>
  <tr>
    <th>name</th>
    <th>Actions</th>
    
  </tr>
{
    props.authors.sort((a, b) =>  a.name < b.name ? -1 : 1)
    .map((author,i)=> 
  <tr key={i}>
    <td>{author.name}</td>
    <td>          
<DeleteButton authorId={author._id} successCallback={()=>props.removeFromDom(author._id)}/> || 
<Link to={"/edit/" + author._id} key={i}>
             Edit
          </Link>
</td>
   
  </tr>
)}
 
</table>
    </div>
  )
}

export default List
