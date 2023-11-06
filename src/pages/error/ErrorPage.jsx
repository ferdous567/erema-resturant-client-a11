import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-1/2 mx-auto my-14">
            <img className="h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-dP0LWhiGRPeToab1APvCxMh9gnwoj7c9Q&usqp=CAU" alt="" />
        <Link to = '/' className=" my-10">
        <button className="btn  btn-secondary mt-10 w-1/3 ">Go Home</button>
        </Link>
        </div>
    );
};

export default ErrorPage;