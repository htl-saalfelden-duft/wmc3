import "./Card.css"

const Card = (props) => {
    const { title, img, showContent, isSelected } = props

    return (
        <div className={ isSelected ? "card active" : "card"}>
            <img src={img} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">{props.children}</div>
                <a href="#" onClick={(showContent)}>read more...</a>
            </div>
        </div>
    )
}

export default Card