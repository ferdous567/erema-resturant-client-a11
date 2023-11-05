import { useLoaderData } from "react-router-dom";
import SingleNav from "../../shared/navbar/SingleNav";
import Food from "./Food";

const AllFood = () => {

    const allFoods = useLoaderData();

    return (
        <div>
            <SingleNav></SingleNav>
            <h2 className="text-3xl font-bold">All food: {allFoods.length}</h2>
            <div className="text-center my-10">
            <input type="text" placeholder="Search Food Items Here.." className="input input-bordered input-secondary w-full max-w-lg " />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto">
                {
                    allFoods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default AllFood;