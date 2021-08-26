const Card = ({author, date, image, title}) => {

  return(
    <div className="card">
      <img src={image} alt={title} />
      <p>{date}</p>
      <h1>{title}</h1>
      <p>Presented by {author} </p>
    </div>
  )
}

export default Card