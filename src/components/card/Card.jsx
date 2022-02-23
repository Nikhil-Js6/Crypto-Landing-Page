
const Card = ({title, desc}) => {
  return (
    <div className='card'>
        <span className="cardTitle">{title}</span>
        <span className="cardDesc">{desc}</span>
    </div>
  )
}

export default Card
