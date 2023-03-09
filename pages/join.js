import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Join() {
    return (
      <>
        <Navbar />
        <div className = "about">
            <h1 className = "header">J O I N &nbsp; U S</h1>
            <div className = "content delete-me">
                <div className = "who side-by-side">
                    <span className = "question"><h1>What is this?</h1></span>
                    <span className = "answer"><p>This will eventually house the links, information, etc. concerning how to join. This page could also be deleted lol.</p></span>
                </div>
            </div>
          </div>
          <Footer/>
      </>
    );
  }