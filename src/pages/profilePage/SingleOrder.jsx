
import Swal from "sweetalert2";


const SingleOrder = ({ singleFood, singleFoodItem, setSingleFoodItem }) => {

    const { _id, name, date, price, quantity } = singleFood;

    


    const hanldeDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/order/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Items has been deleted.",
                                icon: "success"
                            });

                            const remaining = singleFoodItem.filter(food => food._id !== _id);
                            setSingleFoodItem(remaining)
                        }
                    })
            }
        });
    }

    return (
        <tr className="hover:bg-[#f3f4f0]">

            <td>{name}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => hanldeDelete(_id)} className="btn btn-outline btn-sm">Delete</button></td>
        </tr>
    );
};

export default SingleOrder;