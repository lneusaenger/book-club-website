function FavCard(props){
    return(
    <div className = "fav-card-container">
            <img className = "fav-card-img" src = {props.cover}/>
            <span className = "fav-card-content">
                <h1 className = "fav-card-title">{props.title}</h1>
                <p className = "fav-card-review">My review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum sagittis vitae et leo duis. Morbi tristique senectus et netus et. Purus viverra accumsan in nisl nisi scelerisque. Morbi blandit cursus risus at ultrices. Lectus urna duis convallis convallis tellus id interdum velit laoreet.</p>
            </span>
    </div>
    );
};

export default FavCard;
