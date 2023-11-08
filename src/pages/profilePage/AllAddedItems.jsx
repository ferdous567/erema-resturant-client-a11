
import SingleAddItem from "./SingleAddItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AllAddedItems = () => {

    const { user } = useContext(AuthContext);

    const [addedItems, setAddedItems] = useState([]);

    useEffect(() =>{
        fetch(`https://resturant-mgmt-server.vercel.app/additem?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setAddedItems(data))
    },[user])

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