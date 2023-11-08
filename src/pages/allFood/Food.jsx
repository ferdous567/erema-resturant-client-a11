import { Link } from "react-router-dom";

const Food = ({ food }) => {
    const { _id, photo, name, category, price, quantity } = food;
    return (
        <div>
            <Link to={`/allfood/${_id}`}>
                <div className=" rounded-xl  relative overflow-hidden">

                    <img className="h-[200px] w-full hover:transition-transform" src={photo} alt="" />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
                         hover:from-black/70 hover:via-black/60 hover:to-black/70 duration-500">
                        
                        <div className="absolute inset-0 translate-y-[40%] hover:translate-y-0 transition-all duration-300">
                            
                            <h2 className="text-2xl font-extrabold text-white text-center mt-[82px] ">{name}</h2>
                            <p className="text-white text-center text-xl">Food Type: {category}</p>
                            <p className="text-white text-center text-xl">$ {price}</p>
                            <p className="text-white text-center text-xl">Quantity: {quantity}</p>
                        
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Food;