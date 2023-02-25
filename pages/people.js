import Navbar from "../components/Navbar";
import OfficerCard from "../components/OfficerCard";
import Head from "next/head";

export default function People() {
    const officers = require("../data/officers.json");
    return (
      <>
      <Head>
        <title>Officers</title>
      </Head>
      <Navbar />
      <div className = "officers">
        {officers.map((officer)=>(
            <OfficerCard
                key={officer.First + officer.Last}
                title={officer.Title}
                img = {officer.Img}
                name={officer.First + " " + officer.Last}
                study={officer.Study}
                goodreads={officer.Goodreads}
                favs = {officer.FavPath}
                />
            ))}
        </div>
      </>
    );
}