import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoodreads } from "@fortawesome/free-brands-svg-icons"
import { Card, Col, Row } from 'antd';
import { useState } from 'react';

function OfficerCard (props){
    const { Meta } = Card;
const tabList = [
  {
    key: 'fav1',
    tab: 'Favorite #1',
  },
  {
    key: 'fav2',
    tab: 'Favorite #2',
  },
  {
    key: 'fav3',
    tab: 'Favorite #3',
  },
  {
    key: 'fav4',
    tab: 'Favorite #4',
  },
  {
    key: 'fav5',
    tab: 'Favorite #5',
  },
];
const contentList = {
  fav1: <p>first favorite book</p>,
  fav2: <p>second favorite book</p>,
  fav3: <p>third favorite book</p>,
  fav4: <p>fourth favorite book</p>,
  fav5: <p>fifth favorite book</p>,
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
