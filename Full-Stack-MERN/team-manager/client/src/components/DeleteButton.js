import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        if (window.confirm('Are you sure you want to delete ?')){
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }


}
    
    return (
        <button type="button" class="btn btn-danger" onClick={deletePlayer}>
            Delete
        </button>
    )
}