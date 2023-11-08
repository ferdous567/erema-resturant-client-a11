import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";
           
const Login = () => {

    const location = useLocation();
    console.log('location in the login page',location);


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { googleSignIn, signInWithEmail } = useContext(AuthContext);

    const navigate = useNavigate();

    const hanldeLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        setError('');
        setSuccess('');

        signInWithEmail(email, password)
        .then(result => {
            console.log(result.user)
            form.reset('')
            setSuccess(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in!',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
        })

    }

    const hanldeGoogleSignIn = () =>{
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <div className="relative ">
           
            <Helmet>
                <title>Login</title>
            </Helmet>
            <img className="h-full  w-full opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU" alt="" />

            <div className="absolute top-16 left-20 w-3/4 md:w-1/3  border box-border
            bg-gradient-to-r from-black/40 via-black/10 to-black/40 rounded-xl shadow">

                <form onSubmit={hanldeLogin} className="card-body">
                    <h3 className="text-5xl font-bold text-white pl-6 ">Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgottten password?</a>
                        </label>
                    </div>
                    {
                        error && <p className="text-yellow-400">{error}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <input className="btn bg-gradient-to-r from-pink-500 to-orange-400 hover:from-green-400 hover:to-blue-500 text-white font-bold " type="submit" value="Login" />
                        
                    </div>
                    <h2 className="text-xl text-white">Are you new there? Please
                        <Link className="text-yellow-500 hover:underline" to='/register'> Register</Link></h2>
                </form>
                <div className="text-center space-y-3 mb-2">
                    <h2 className="text-xl text-white font-bold">----Or Login With----</h2>
                    <button onClick={hanldeGoogleSignIn}
                    className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-violet-400 hover:to-cyan-300 text-white font-bold w-1/2">GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;