import Marquee from "react-fast-marquee";


const MeetTheTeam = () => {
    return (
        <div className="bg-gradient-to-r from-pink-300 via-sky-200 to-green-200 p-5 ">
            <h2 className="text-5xl font-extrabold text-center mb-10">Meet Our Team Members</h2>
            <Marquee>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQcxY4Ef5ImysfPxNE1c8sKVcXg7xWKmdaA&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Steven Jhon</h2>
                    <p className="font-mono text-xl font-bold">Founder And CEO</p>
                </div>
                </div>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aCB_m5Cx2KG-T9lKnKmAUFzbuiWbfxLkhg&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Steven Arora</h2>
                    <p className="font-mono text-xl font-bold">Managing Director</p>
                </div>
                </div>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzwMH1agLCmXHKlvC9gx8FMBe5-DlKpsirg&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Justice Palsara</h2>
                    <p className="font-mono text-xl font-bold">Vice President</p>
                </div>
                </div>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBG5oRl9s4KfKlnbNVC3BB9tTUgFLozYYBg&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Jhon Paul</h2>
                    <p className="font-mono text-xl font-bold">Chief Exicutive</p>
                </div>
                </div>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUh9G6SL7bKP2V0OWiqdwbcyJ39gt4vmqbynJ5iviTHZfYmnvANKuG1l9cQ2ArsIn99Zw&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Thikenson Arora</h2>
                    <p className="font-mono text-xl font-bold">Senior Chief </p>
                </div>
                </div>
                <div className="w-[200px] text-center mr-20">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsMFSy0YMopi_gyhskUFsSa85bBgX33G0Qw&usqp=CAU" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold hover:text-3xl text-blue-400">Thomas Bell</h2>
                    <p className="font-mono text-xl font-bold">Senior Chief </p>
                </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MeetTheTeam;