import "./index.css"
import Header from "@/components/Header.jsx";
import Description from "@/components/Description.jsx";
import Footer from "@/components/Footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <div className="bg-[#F5FBFC]">
                <Description/>
                <Footer/>
            </div>
        </>
    )
}

export default App
