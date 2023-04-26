import React, { useContext } from 'react';
import register_banner from '../../assets/welcome.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user =result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="hidden md:block mr-20 p-6">
                    <img src={register_banner} alt='' width='550px'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={registerHandler} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold text-center">Register now!</h1>
                            <br />
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
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
                            <input type='submit' value='Register' className="btn btn-warning" />
                        </div>
                        <span className='text-sm'>Already have an account? Go to <Link to='/login' className='text-rose-500'>Login</Link></span>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;