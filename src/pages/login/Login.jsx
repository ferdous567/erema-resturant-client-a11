
const Login = () => {
    return (
        <div className="relative">
            <img className="h-[600px] w-full opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU" alt="" />
            
            <div className="absolute top-20 left-20 w-3/4 md:w-1/2 mx-auto border
            bg-gradient-to-r from-black/40 via-black/10 to-black/40 rounded-xl shadow-2xl">
            
            <form className="card-body">
            <h3 className="text-5xl font-bold text-white pl-6 ">Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white">Forgottten password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-orange-400 text-white font-bold">Login</button>
                </div>
            </form>
            <div className=""> 
                <h2 className="text-xl text-white font-normal">----Or Login With----</h2>
            </div>
            </div>
        </div>
    );
};

export default Login;