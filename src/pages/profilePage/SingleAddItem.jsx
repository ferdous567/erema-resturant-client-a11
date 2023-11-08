import { Link } from "react-router-dom";

const SingleAddItem = ({ singleItem }) => {

    const {_id, name, photo, price, quantity, desc } = singleItem;

    return (
        <div className="transition-all 1s ease-in-out mb-10">
            <div className="card h-[200px] w-[220px] mb-14
            bg-base-100 shadow-xl image-full  hover:scale-105">
                <figure><img className="h-full w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: $ {price} , Available is: {quantity}</p>
                    <p>{desc}</p>
                    <div className="card-actions">
                        <Link to={`/dashboard/updateItem/${_id}`}>
                        <button className="btn btn-secondary btn-sm">Update Product</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAddItem;