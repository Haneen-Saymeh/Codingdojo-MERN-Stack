import React, {useState} from 'react'

const UserForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [fnameerror, setfnameError] = useState("");
    const [lnamerror, setlnameError] = useState("");
    const [emailerror, setemailError] = useState("");
    const [passworderror, setpasswordError] = useState("");
    const [confirmerror, setconfirmError] = useState("");
     


    const formfun= (e) =>{
        e.preventDefault();
        const user = {fname, lname,email,password,confirm};
        console.log("welcome", user);
    }

    const handleFname= (e) => {
        setFname(e.target.value);
        if(e.target.value.length < 2){
            setfnameError("First Name must be at least 2 characters.")
        }
        else{
            setfnameError("");
        }
    }


    const handleLname=(e) => {
        setLname(e.target.value);
        if(e.target.value.length < 2){
            setlnameError("Last Name must be at least 2 characters.")
        }
        else{
            setlnameError("");
        }
    }

    const handlePassword=(e)=> {
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setpasswordError("Passoword must be at least 8 characters.")
        }
        else{
            setpasswordError("");
        }
    }


    const handelEmail=(e)=> {
        setEmail(e.target.value);
        if(e.target.value.length<6){
            setemailError("Email must be at least 5 characters.")
        }
        else{
            setemailError("");
        }
    }


    const handleConfirm=(e)=> {
        setConfirm(e.target.value);
        if(e.target.value!== password){
            setconfirmError("Passwords must match.")
        }
        else{
            setconfirmError("");
        }
    }






  return (
    <div style={{width:'800px', height:'600px', marginLeft:'35%', marginTop:'3%'}} >
        <form   onSubmit={formfun} style={{display:'flex', flexDirection: 'column', justifyContent : 'space-between', alignItems: 'center', height:'300px'}}  >
            <div>
            <label>First Name:</label>
            <input type="text" onChange={handleFname} />
            {
                    fnameerror?
                    <p style={{color:'red'}}>{ fnameerror }</p> :
                    ""
                }
            </div>

            <div>
            <label>Last Name:</label>
            <input type="text" onChange={handleLname}  />
            {
                lnamerror?
                <p  style={{color:'red'}}>{lnamerror}</p>:
                " "
               }
            </div>

            <div>
            <label>Email:</label>
            <input type="text" onChange={handelEmail} />
            {
                emailerror?
                <p style={{color:'red'}}  >{emailerror}</p>:
                " "
            }
            </div>

            <div>
            <label>Password:</label>
            <input type="text" onChange={handlePassword} />
            {
              passworderror?
              <p style={{color:'red'}}  >{passworderror}</p>:
              " "   
            }
            </div>

            <div>
            <label>Confirm Password:</label>
            <input type="text"  onChange={handleConfirm} />
            {

                confirmerror?
                <p  style={{color:'red'}} >{confirmerror}</p>:
                " "
            }
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
