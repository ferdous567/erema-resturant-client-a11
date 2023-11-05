import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"

import Slider from "react-slick";
import { Component } from "react";

export default class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true
        };

        

        


        return (
            <div className="mb-10">
                
                <Slider {...settings}>
                    <div className="relative">
                    
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L4zv6eY-YOOYgrvZYNsYEWvt7owCmJb_lQ&usqp=CAU" alt="" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        <motion.div
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}>
                        <div className="absolute top-8 rounded-lg left-8 p-5 bg-pink-500 font-bold text-xl h-[100px] w-[100px]">
                        <h2> Open Now !</h2>
                    </div>
                    </motion.div>
                        </div>

                    </div>
                    <div className="relative">
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIJv__mSLBiNhkeFYslJ9bVvRxBFpzGUsoxEu3TXTfjx7STMU2aQX4HYnQHMnXsXy_SA&usqp=CAU" alt="" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="relative">
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6gcVt7AS3RIpoqjdgfzwuAsyDV5LM5O9tA&usqp=CAU" alt="" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="relative">
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXsTNuQaLE9vY9voSkR1WY4QKZpO_o-eHeWKZ8MVjKDRloXMu6VOS9iC-c2KhQUEkwlU&usqp=CAU" alt="" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="relative">
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaLoy6rY5nnoKD7d4VciEiFt4t-UCVvgUpg&usqp=CAU" alt="" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="relative">
                        <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_Q6V2TW58EUpyIAE2VXnglNzvzhkcWG9zA&usqp=CAU" alt="" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 p-5 bg-gradient-to-r from-black/70 via-black/50 to-black/70">
                        <div className="md:mt-10 text-center w-full space-y-6
                        ">
                            <h2 className="text-2xl font-mono text-white">Welcome to</h2>
                            <h1 className="text-5xl  font-extrabold text-white">EREMA RESTURANT</h1>
                            <p className="text-xl font-mono text-white md:w-1/2 mx-auto">For kinds of all delicious foods, events, bookings and ordered
                                we are always with you to a hospitality.
                            </p>
                            <div>
                            <button className="btn btn-outline btn-error font-bold">All Menu</button>
                            </div>
                        </div>
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}



// const Banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Banner;