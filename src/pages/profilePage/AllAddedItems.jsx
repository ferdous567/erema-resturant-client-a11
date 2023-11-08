import { useLoaderData } from "react-router-dom";
import SingleAddItem from "./SingleAddItem";

const AllAddedItems = () => {

    const addedItems = useLoaderData();

    return (
        <div>
           <h2 className="text-xl font-bold my-3 underline"> Added items: {addedItems.length}</h2> 
           <div className="grid grid-cols-3 gap-3 mb-10">
           {
            addedItems.map(singleItem => <SingleAddItem key={singleItem._id}
            singleItem={singleItem}></SingleAddItem>)
           }
           </div>
        </div>
    );
};

export default AllAddedItems;