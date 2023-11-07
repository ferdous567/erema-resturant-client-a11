

const SingleOrder = ({ singleFood }) => {

    const {_id, name, date, price, quantity } = singleFood;
  
    const hanldeDelete = (_id) =>{
        console.log(_id)
    }

    return (
        <tr>
        
        <td>{name}</td>
        <td>{date}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button onClick={() => hanldeDelete(_id)} className="btn btn-outline btn-sm">Delete</button></td>
    </tr>
    );
};

export default SingleOrder;