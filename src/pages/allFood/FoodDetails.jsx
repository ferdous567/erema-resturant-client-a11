import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);

    const food = useLoaderData();
    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrvsm3c5095u4OuaDFyT6cXSEHqXcyos5IA&usqp=CAU')] bg-cover text-center pb-10">
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold my-10">Items Name: {food.name}</h2>
            <div className="md:flex justify-evenly my-10 items-center">
                <div className=" box-border shadow-2xl ">
                    <img className="h-[250px] w-[350px] rounded-xl" src={food.photo} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">Food Type: {food.category}</h2>
                    <p className="text-xl font-bold">Price: $ {food.price}</p>
                    <p className="text-xl font-bold">Available Quantity: {food.quantity}</p>
                    <p className="text-lg font-semibold">{food.short_description}</p>
                    {
                        user?.email !== food?.email ?
                        <Link to={`/order/${food._id}`} >
                            <button className="btn btn-outline btn-secondary"> Order Now</button>
                        </Link> : <p className="text-red-500">Do not order this product because this product is added by you.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;