import React, {useState} from 'react'

const UserForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

const formfun= (e) =>{
    e.preventDefault();
    const user = {fname, lname,email,password,confirm};
    console.log("welcome", user);
}

   
    
 
 
 
    return (
    <div style={{width:'800px', height:'600px', marginLeft:'35%', marginTop:'3%'}} >
        <form   onSubmit={formfun} style={{display:'flex', flexDirection: 'column', justifyContent : 'space-between', alignItems: 'center', height:'300px'}}  >
            <div>
            <label>First Name:</label>
            <input type="text" onChange={(e)=> setFname(e.target.value)} />
            </div>

            <div>
            <label>Last Name:</label>
            <input type="text" onChange={(e)=> setLname(e.target.value)}  />
            </div>

            <div>
            <label>Email:</label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div>
            <label>Password:</label>
            <input type="text" onChange={(e)=> setPassword(e.target.value)} />
            </div>

            <div>
            <label>Confirm Password:</label>
            <input type="text"  onChange={(e)=> setConfirm(e.target.value)} />
            </div>

            <button>Submit form</button>
        </form>
        <hr>
        </hr>

        <p>First Name: {fname}</p>
        <p>Last Name: {lname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>

      
    </div>
  )
}

export default UserForm