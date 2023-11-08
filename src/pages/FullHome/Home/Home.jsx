import Footer from "../../../shared/footer/Footer";
import TopFood from "../../TopFood/TopFood";
import Header from "../Header/Header";
import MeetTheTeam from "../meetTeam/MeetTheTeam";
import Overview from "../overview/Overview";
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <div>
         
            <Helmet>
                <title>Home</title>
            </Helmet>
          <Header></Header>
          <TopFood></TopFood>
          <MeetTheTeam></MeetTheTeam>
          <Overview></Overview>
          <Footer></Footer>
        </div>
    );
};

export default Home;