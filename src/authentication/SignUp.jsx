import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../AuthProvider/AuthProvider";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the createUserWithEmailAndPassword function
      await createUser(email, password);

      // The following code will be executed if the user is successfully created
      console.log("User created successfully!");
    } catch (error) {
      // Handle any errors that occur during the user creation process
      console.error("Error creating user:", error.message);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);

  return (
    <div>
      <div className="alignment">
        <main>
          <header>
            <h4>Registration</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form_wrapper">
              <input
                id="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Username</label>
              <i className="material-icons">person</i>
            </div>
            <div className="form_wrapper">
              <input
                id="email"
                type="email"
                value={email}
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
                value={password}
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
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={handleGoogleSignIn}>SignUp with Google</button>

          <div className="new_account">
            Already have an account? <Link to="/signIn">Sign In</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
