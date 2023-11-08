// import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SingleOrder from "./SingleOrder";
import { useContext, useEffect, useState } from "react";

const AllOrderedItem = () => {

    // const allOrderedFood = useLoaderData();

    const { user } = useContext(AuthContext);

    const [allOrderedFood, setallOrderedFood] = useState([]);

    useEffect(() =>{
        fetch(`https://resturant-mgmt-server.vercel.app/order?email=${user?.email}`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => setallOrderedFood(data))
    },[user])

    // const [singleFoodItem, setSingleFoodItem] = useState(allOrderedFood);

    return (
        <div>
            <h2 className="text-2xl font-bold my-2 underline">My All Ordered Items: {allOrderedFood.length}</h2>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Food Name</th>
                            <th>Ordered Date</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {/* <html></html> */}
                        </tr>
                    </thead>
                    <tbody>

                       
                            {
                                allOrderedFood.map(singleFood => <SingleOrder singleFood={singleFood}
                                    key={singleFood._id}
                                    singleFoodItem={allOrderedFood}
                                    setSingleFoodItem={setallOrderedFood}></SingleOrder>)
                            }
                            
                        

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllOrderedItem;