import React, { useContext } from 'react';
import login_banner from '../../assets/login_svg.svg'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const { setUser, loginWithEmailAndPassword, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        setUser(user);
        navigate('/')
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <div className="hidden md:block mr-20 p-6 ">
          <img src={login_banner} alt='' width='350px' />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <h1 className="text-4xl font-bold text-center">Login now!</h1>
              <br />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type='submit' value='Login' className="btn btn-warning" />
            </div>
            <span className='text-sm'>New to Motor Medics? Go to <Link to='/register' className='text-rose-500'>Register</Link></span>
          </form>
          <div className="flex justify-around w-1/4 mx-auto py-4">
            <button onClick={handleGoogleLogIn} className="btn btn-outline btn-success rounded-full mr-5"><FaGoogle></FaGoogle></button>
            <button className="btn btn-outline btn-primary rounded-full "><FaFacebook></FaFacebook></button>
          </div>
          <span className='text-center text-sm mb-4 px-4'>You can also login with social media accounts</span>
        </div>
      </div>
    </div>
  );
};

export default Login;