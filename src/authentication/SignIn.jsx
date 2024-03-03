import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignIn = () => {
  const [name, setname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {  signIn } = useContext(AuthContext);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="alignment">
          <main>
            <header>
              <h4>LogIn</h4>
            </header>
            <form onSubmit={handlesubmit}>
              <div className="form_wrapper">
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
                <i className="material-icons">email</i>
              </div>
              <div className="form_wrapper">
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <i className="material-icons">lock</i>
              </div>

              <div className="remember_box">
                <div className="remember">
                  <input type="checkbox" />
                  Remember me
                </div>
                <a href="#">Forgot Password ?</a>
              </div>
              <button>Sign Up</button>
              <div className="new_account">
                have account ? <Link to="/">Sign Up</Link>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
