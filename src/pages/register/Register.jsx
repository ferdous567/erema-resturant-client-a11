import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";
          
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const hanldeRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const newUser = {email, password, name, photo}

        console.log(newUser);

        fetch('https://resturant-mgmt-server.vercel.app/user',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           
        })

        setError('');
        setSuccess('');

        if (password.length < 6) {
            setError('Password should be at least 6 charachter of longer')
        }

        else if (!/[A-Z]/.test(password)) {

            console.log('password should be at least 1 uppercase and 1 digit .')
            setError('password should be at least 1 uppercase and 1  digit .')
            return;
        }
        else if (!/[0-9]/.test(password)) {

            console.log('password should be at least  1 digit and one special charachter.')
            setError('password should be at least  1 digit .')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire(
                        'Good job!',
                        'Registration complete go to login!',
                        'success'
                    )
                )

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => setSuccess('Profile Updated'))
                    .catch(error => setError(error.message))

                form.reset('');
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    return (
        <div className="relative ">
           
            <Helmet>
                <title>Register</title>
            </Helmet>
            <img className="h-full  w-full opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU" alt="" />

            <div className="absolute top-16 left-20 w-3/4 md:w-1/3  border box-border
        bg-gradient-to-r from-black/40 via-black/10 to-black/40 rounded-xl shadow">

                <form onSubmit={hanldeRegister} className="card-body">
                    <h3 className="text-5xl font-bold text-white pl-6 ">Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
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
                        error && <p className="text-yellow-600">{error}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <input className="btn bg-gradient-to-r from-pink-500 to-orange-400 hover:from-green-400 hover:to-blue-500
                 text-white font-bold " type="submit" value="Register" />

                    </div>
                </form>
                <div className="text-center  mb-2">
                    <h2 className="text-xl text-white ">Have an account? Please
                        <Link className="text-yellow-400 hover:underline font-bold" to='/login'> Login</Link></h2>

                </div>
            </div>
        </div>
    );
};

export default Register;