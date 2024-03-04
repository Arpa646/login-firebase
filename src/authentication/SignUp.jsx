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
console.log('this is user',user.displayName)
  return (
    <div>

{/* Open the modal using document.getElementById('ID').showModal() method */}




<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
   
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>









<div  className="relative">
  <div className="absolute top-0 right-0 overflow-hidden">
    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img
      
      onClick={()=>document.getElementById('my_modal_1').showModal()}
       src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
</div>


      <div >




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
            <button onClick={handleGoogleSignIn}>SignUp with Google</button>
          </form>

          <div className="new_account">
            Already have an account? <Link to="/signIn">Sign In</Link>
          </div>
        </main>
  </div>
       
      </div>
    </div>
  );
};

export default SignUp;
