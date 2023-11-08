import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Food from "../allFood/Food";

const TopFood = () => {

    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        const loadFood = async () => {
            const res = await fetch(`http://localhost:5000/top-selling`);
            const result = await res.json();
            setAllFoods(result)
            console.log(result);
        };
        loadFood()
    })
    return (
        <div>
            <h3 className="text-5xl font-bold text-center underline my-14">Our Top Foods</h3>
            <div className="w-2/3 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                
                    {
                        allFoods?.slice(0, 6).map(item => <Food key={item._id} food={item}></Food> )
                    }

               
               <Link className="text-center my-6" to = '/allfood'>
               <button className="btn btn-secondary btn-outline">Show All Items</button>     
               </Link>
               
               
            </div>
        </div>
    );
};

export default TopFood;