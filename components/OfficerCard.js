import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoodreads } from "@fortawesome/free-brands-svg-icons"

function OfficerCard(props) {
    return (
        <div className="officer-card">
            <div className = "officer-title-name">
                <div className="officer-title"><b>{props.title}</b></div>
                <div className="officer-name">
                    {props.name}  <a className = "officer-goodreads" href={props.goodreads} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoodreads} />
                    </a>
                </div>
            </div>
            <div className="card-content">
            <img className = "officer-img" src={props.img} alt={props.name} />
                <div className="officer-studymajor"><b>Studying:</b> {props.study}</div>
            </div>
        </div>
        //need to add shelf
    );
}

export default OfficerCard;
