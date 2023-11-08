import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddItem = () => {

    const {user} = useContext(AuthContext);

    const handleAddFood = e =>{
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

        const addNewFood = {name, orders:0, photo, category, price, quantity, origin, desc, email};

        console.log(addNewFood);

        fetch('https://resturant-mgmt-server.vercel.app/additem',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addNewFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item is Successfully added !',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

    }

    return (
        <div>
            <h3 className="text-2xl font-bold text-center underline py-4">Add New Food Item</h3>
            <form onSubmit={handleAddFood} className="w-full">
            <div className="flex justify-around">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
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
                        
                        <input type="text" name="origin" placeholder="Country" className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div className="flex justify-around px-5 gap-2">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="desc" placeholder="Short Desc.." className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className="my-8  text-center">
                   
                        <input type="submit" value='Add Food' className="btn btn-ghost btn-outline" />
                 
                </div>
            </form>
        </div>
    );
};

export default AddItem;