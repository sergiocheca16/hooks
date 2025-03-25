const Card = ({ name, image, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className='card'>
                <h3>{name}</h3>
                <img src={image} alt={name} width='180px'/>
            </div>
        </>
    )
}

export default Card;