import Recommendation from "../components/map/recom";
import '../styles/home.css'

const Home = () => {
    return (
        <div className='homeMain'>
            <h2>
                home page.....
            </h2>
            <div>
                <img className="logoImg" src="/logo.png" alt="Logo"/>
            </div>
            <Recommendation />
        </div>
    );
}
export default Home;