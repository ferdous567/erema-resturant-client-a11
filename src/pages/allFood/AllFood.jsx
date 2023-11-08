// import { useLoaderData } from "react-router-dom";
import SingleNav from "../../shared/navbar/SingleNav";
import Food from "./Food";
import { useEffect, useState } from "react";

const AllFood = () => {
    const [search, setSearch] = useState('');
    const [singlePage, setSinglePage] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    // const allFoods = useLoaderData();
    const [allFoods, setAllFoods] = useState({});
    const foodsArray = Object.values(allFoods);
    const filterFoods = foodsArray.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))

    const itemPerPage = 9;
            const numberOfPages = Math.ceil(singlePage /itemPerPage);
            
            const pages = [];
            for(let i = 0; i < numberOfPages ; i++ ){
                pages.push(i)
            }
            console.log(pages)
    

    useEffect(() =>{
        fetch(`https://resturant-mgmt-server.vercel.app/allfood?page=${currentPage}&size=${itemPerPage}`)

        .then(res => res.json())
        .then(data => setAllFoods(data))

    },[currentPage, itemPerPage])
    

    useEffect(() =>{
        fetch('https://resturant-mgmt-server.vercel.app/allFoodCount')
        .then(res => res.json())
        .then(data => {
            const {count} = data;
            console.log(count);
            setSinglePage(count);

            
        })
        
    },[])

    

    return (
        <div className=" w-full">
            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-0eR243ynqpWGHX0uPSbn7VJyOwll7kzrA&usqp=CAU')]
             bg-no-repeat bg-cover opacity-80">
            <SingleNav></SingleNav>
            <h2 className="text-3xl font-bold">All food: {allFoods.length}</h2>
            <div className="text-center my-10">
            <input type="text" onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search Food Items Here.." className="input input-bordered input-secondary w-full max-w-lg " />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12 mx-auto pb-10">
                
                {
                    filterFoods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
            <div className="text-center py-10">
                
                {
                    pages.map((page, idx) => <button key={idx} 
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'btn btn-outline btn-active mr-5' : 'btn btn-outline btn-ghost mr-5'} >{page}</button>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllFood;