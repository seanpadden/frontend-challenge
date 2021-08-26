import Card from './Card'

const CardContainer = ({cards}) => {
  
  const renderCards = () => cards.map((card, index) => <Card key={index} {...card} />)
  
  return(
    <div className="card-container">
      {renderCards()}
    </div>
  )
}

export default CardContainer