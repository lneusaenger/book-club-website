import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Calendar() {
    return (
      <>
        <Navbar />
        <div className = "ABOUT">
            <h1 className = "header">C A L E N D A R</h1>
            <div className = "content delete-me">
                <div className = "who side-by-side">
                    <span className = "question"><h1>What is this?</h1></span>
                    <span className = "answer"><p>This will eventually house our calendar.</p></span>
                </div>
            </div>
          </div>
          <Footer/>
      </>
    );
  }