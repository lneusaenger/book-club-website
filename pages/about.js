import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
      <>
        <Navbar />
        <div className = "about">
            <h1 className = "header">A B O U T &nbsp; U S</h1>
            <div className = "content delete-me">
                <div className = "who side-by-side">
                    <span className = "question"><h1>Who are we?</h1></span>
                    <span className = "answer"><p>We are a club at Duke University dedicated to creating an inclusive, fun, and casual community for book-lovers. Whether your favorite book is Crime and Punishment, or Fifty Shades of Grey, you and your tastes are always welcome.</p></span>
                </div>
            </div>
          </div>
          <Footer/>
      </>
    );
  }