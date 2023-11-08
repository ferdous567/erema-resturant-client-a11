import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";
const UpdatePage = () => {

    const updateFood = useLoaderData();

    const {_id, name, photo, price, quantity, category, desc, origin} = updateFood;

    const {user} = useContext(AuthContext);

    const handleUpdateFood = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const desc = form.desc.value;
        const email = form.email.value;

        const updateFoodItems = {name, photo, category, price, quantity, origin, desc, email};

        console.log(updateFoodItems)

        fetch(`https://resturant-mgmt-server.vercel.app/additem/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateFoodItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }

    
    return (
        <div>
            
            <Helmet>
                <title>Update</title>
            </Helmet>
            <h3 className="text-2xl font-bold text-center underline py-4">Update Food Item is: {name}</h3>
            <form onSubmit={handleUpdateFood} className="w-full">
            <div className="flex justify-around">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" defaultValue={name}
                        placeholder="Name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="category" defaultValue={category}
                        placeholder="Category" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="number" name="quantity" defaultValue={quantity}
                        placeholder="Quantity" className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" defaultValue={price}
                        placeholder="Price" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add By</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="email" name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Origin</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="origin" defaultValue={origin}
                        placeholder="Country" className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div className="flex justify-around px-5 gap-2">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" defaultValue={photo}
                        placeholder="PhotoURL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="desc" defaultValue={desc}
                        placeholder="Short Desc.." className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className="my-8  text-center">
                   
                        <input type="submit" value='Update' className="btn btn-ghost btn-outline" />
                 
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;