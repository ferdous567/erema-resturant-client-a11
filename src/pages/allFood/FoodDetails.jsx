import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";

const FoodDetails = () => {
    const food = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is food datails: {food.name}</h2>
        </div>
    );
};

export default FoodDetails;