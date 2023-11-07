import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Order = () => {

    

    const {user} = useContext(AuthContext);

    const handlePurchaseFood = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = form.buyerName.value;
        const desc = form.desc.value;
        const email = form.email.value;

        const orderFoodDetails = {name, date, category, price, quantity, buyerName, desc, email};

        console.log(orderFoodDetails);

        // send data to database
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(orderFoodDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully logged in!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

        form.reset();

    }

    return (
        <form onSubmit={handlePurchaseFood} className="bg-[#f4f3f0] p-6 h-screen m-5">
            <h3 className="text-2xl font-bold text-center underline py-4">Purchase Page</h3>
            <div className="w-full">
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={name}
                            name="name" placeholder="Name" className="input input-bordered" />
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
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={user?.email}
                            name="email" placeholder="User Email" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buyer Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={user?.displayName}
                            name="buyerName" placeholder="Buyer Name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-around px-24 gap-2">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Buying Date</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="date" placeholder="Buying Date" className="input input-bordered w-full" />
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

                    <input type="submit" value='Click to purchase' className="btn btn-ghost btn-outline" />

                </div>
            </div>
        </form>
    );
};

export default Order;