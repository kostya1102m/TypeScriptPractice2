import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import LogosGallery from "./components/LogosGallery";
function Main() {
    return (
        <div>
            <Navbar active="1" />
            <Gallery />
            <LogosGallery/>
            <Content />
            <Footer />
        </div>
    );
}
export default Main