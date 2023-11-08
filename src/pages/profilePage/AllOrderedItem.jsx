import {  useLoaderData } from "react-router-dom";
import SingleOrder from "./SingleOrder";
import { useState } from "react";

const AllOrderedItem = () => {

    const allOrderedFood = useLoaderData();

    const [singleFoodItem, setSingleFoodItem] = useState(allOrderedFood);

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
                            <html></html>
                        </tr>
                    </thead>
                    <tbody>

                       
                            {
                                singleFoodItem.map(singleFood => <SingleOrder singleFood={singleFood}
                                    key={singleFood._id}
                                    singleFoodItem={singleFoodItem}
                                    setSingleFoodItem={setSingleFoodItem}></SingleOrder>)
                            }
                        

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllOrderedItem;