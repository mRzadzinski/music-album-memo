import '../styles/Card.scss'

const Card = (props) => {
    const { img, title, artist } = props;
    return (
        <div className="Card">
            <img className='album-cover' src={img} alt="" />
            <div className="album-title">{title}</div>
            <div className="artist">{artist}</div>
        </div>
    );
}

export default Card;