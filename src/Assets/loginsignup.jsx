import React,{useState} from 'react'
const LoginSignup = () => {
    const[data,setData]=useState("")
    if(data==='login'){
        return(
        <div id='bod'>
            
            <center id='aj'>
            <h1>{data}</h1>
            <form>
             <input type='email' placeholder='Email'/><br/> <br/>
             <input type='password' placeholder='Password'/><br/> <br/>
             <button type='submit' onClick={()=>{setData('signup')}} id='sign'>Signup</button> &nbsp;<button type='submit' onClick={()=>{setData('login')}}>Login</button>
          
            </form>
            </center>
        </div>
        );
    }
  return (
    <div>
      <center>
        <h1>{data}</h1>
        <form>
          <input type='text' placeholder='Name'/> <br/> <br/>
          <input type='email' placeholder='Email'/><br/> <br/>
          <input type='password' placeholder='Password'/><br/> <br/>
          <button type='submit' onClick={()=>{setData('signup')}} >Signup</button> <button type='submit' onClick={()=>{setData('login')}} id='log'>Login</button>
          
        </form>
      </center>
    </div>
  );
}

export default LoginSignup
