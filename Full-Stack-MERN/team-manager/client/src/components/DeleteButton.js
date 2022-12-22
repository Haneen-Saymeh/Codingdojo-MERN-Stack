import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        if(alert('Sure want to delete?')){
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }


}
    
    return (
        <button onClick={deletePlayer}>
            Delete
        </button>
    )
}