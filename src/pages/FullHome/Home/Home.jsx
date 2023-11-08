import Footer from "../../../shared/footer/Footer";
import TopFood from "../../TopFood/TopFood";
import Header from "../Header/Header";
import MeetTheTeam from "../meetTeam/MeetTheTeam";
import Overview from "../overview/Overview";

const Home = () => {
    return (
        <div>
          <Header></Header>
          <TopFood></TopFood>
          <MeetTheTeam></MeetTheTeam>
          <Overview></Overview>
          <Footer></Footer>
        </div>
    );
};

export default Home;