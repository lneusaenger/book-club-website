import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OfficerCard from "../components/OfficerCard";

export default function People() {
    const officers = require("../data/officers.json");
    return (
      <>
      <Navbar />
      <h1 className = "officers-heading">
        O F F I C E R S
      </h1>
      <div className = "officers">
        {officers.map((officer)=>(
            <OfficerCard
                key={officer.First + officer.Last}
                title={officer.Title}
                img = {officer.Img}
                name={officer.First + " " + officer.Last}
                first = {officer.First}
                study={officer.Study}
                genres = {officer.Genres}
                goodreads={officer.Goodreads}
                favs = {officer.FavPath}
                />
            ))}
        </div>
        <Footer />
      </>
    );
}