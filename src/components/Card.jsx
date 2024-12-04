import '../css/Card.css'

function Card(props) {
  return (          
    <div className='card'> 
        <img src={props.src} height={160} alt="Image" />
        <h2 fw={500}>{props.title}</h2>        
        <small>{props.description}</small>        
    </div>
  );
}

export default Card;