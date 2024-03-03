
import './App.css'

function App() {


  return (
<div className='alignment'>
<main>
   <header>
    <h4>Login</h4>
  </header>
  <form className=''>
    <div className="form_wrapper">
      <input id="input" type="text" required/>
      <label >Username</label>
      <i className="material-icons">person</i>
    </div>
    <div className="form_wrapper">
      <input id="password" type="password" required/>
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
