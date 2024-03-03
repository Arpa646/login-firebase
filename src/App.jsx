
import './App.css'
import { useState } from 'react';

function App() {

const  [name, setname] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null)
const handlesubmit=(e)=>{
  e.preventDefault();

console.log(name,email)
}

  return (
<div className='alignment'>
<main>
   <header>
    <h4>Login</h4>
  </header>
  <form onSubmit={handlesubmit}>
    <div className="form_wrapper">
      <input id="input" type="text" onChange={(e)=>setname(e.target.value)} required/>
      <label >Username</label>
      <i className="material-icons">person</i>
    </div>
    <div className="form_wrapper">
      <input id="password" type="password" onChange={(e)=>setEmail(e.target.value)} required/>
      <label >Password</label>
      <i className="material-icons">lock</i>
    </div>
    <div className="remember_box">
      <div className="remember">
        <input type="checkbox"/>
        Remember me
      </div>
      <a href="#">Forgot Password ?</a>
    </div>
    <button>Login</button>
    <div className="new_account">
      Dont have account ? <a href="#">Sign up</a>
    </div>
  </form>
  </main>
</div>
  )
}

export default App
