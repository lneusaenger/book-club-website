import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoodreads } from "@fortawesome/free-brands-svg-icons"
import { Card, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import FavCard from "./FavCard";

function OfficerCard(props) {
    const [favBooks, setFavBooks] = useState([]);
    useEffect(() => {
      const getFavs = async() =>{
        try {
          const response = await fetch(props.favs);
          const data = await response.json();
          const books = data.editions.slice(0, 5);
          setFavBooks(books);
        } catch (error) {
          console.error(error);
        }
      };
      getFavs();
    }, [props.favs]);
  
    const tabList = [
      {
        key: "fav1",
        tab: "Favorite #1",
      },
      {
        key: "fav2",
        tab: "Favorite #2",
      },
      {
        key: "fav3",
        tab: "Favorite #3",
      },
      {
        key: "fav4",
        tab: "Favorite #4",
      },
      {
        key: "fav5",
        tab: "Favorite #5",
      },
    ];
  
    const contentList = {
        fav1: favBooks[0] ? (
          <FavCard
            title={favBooks[0].title}
            cover={Array.isArray(favBooks[0].isbn_13) ? 
                `https://covers.openlibrary.org/b/isbn/${favBooks[0].isbn_13[0]}-L.jpg` : 
                `https://covers.openlibrary.org/b/isbn/${favBooks[0].isbn_13}-L.jpg`}
            author={favBooks[0].author}
          />
        ) : null,
        fav2: favBooks[1] ? (
          <FavCard
            title={favBooks[1].title}
            cover={Array.isArray(favBooks[1].isbn_13) ? 
                `https://covers.openlibrary.org/b/isbn/${favBooks[1].isbn_13[0]}-L.jpg` : 
                `https://covers.openlibrary.org/b/isbn/${favBooks[1].isbn_13}-L.jpg`}
            author={favBooks[1].author}
          />
        ) : null,
        fav3: favBooks[2] ? (
          <FavCard
            title={favBooks[2].title}
            cover={Array.isArray(favBooks[2].isbn_13) ? 
                `https://covers.openlibrary.org/b/isbn/${favBooks[2].isbn_13[0]}-L.jpg` : 
                `https://covers.openlibrary.org/b/isbn/${favBooks[2].isbn_13}-L.jpg`}
            author={favBooks[2].author}
          />
        ) : null,
        fav4: favBooks[3] ? (
          <FavCard
            title={favBooks[3].title}
            cover={Array.isArray(favBooks[3].isbn_13) ? 
                `https://covers.openlibrary.org/b/isbn/${favBooks[3].isbn_13[0]}-L.jpg` : 
                `https://covers.openlibrary.org/b/isbn/${favBooks[3].isbn_13}-L.jpg`}
            author={favBooks[3].author}
          />
        ) : null,
        fav5: favBooks[4] ? (
          <FavCard
            title={favBooks[4].title}
            cover={Array.isArray(favBooks[4].isbn_13) ? 
                `https://covers.openlibrary.org/b/isbn/${favBooks[4].isbn_13[0]}-L.jpg` : 
                `https://covers.openlibrary.org/b/isbn/${favBooks[4].isbn_13}-L.jpg`}
            author={favBooks[4].author}
          />
        ) : null,
      };

  const [activeTabKey, setActiveTabKey] = useState('app');
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };
  return (
    <span>
      <Card
        className = "officer-card"
        title={
            <>
            <h1>{props.name}</h1>
            <h2>{props.title}</h2>
            <div className = "card-details">
            <a>Studying: {props.study}</a>
            <p>Favorite Genres: {props.genres}</p>
            </div>
            </>
    }
        extra={<img className = "officer-image" src = {props.img}/>}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
      >
        {contentList[activeTabKey]}
      </Card>
    </span>
  );
};

export default OfficerCard;
