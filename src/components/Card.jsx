import '../css/Card.css'

function Card(props) {
  return (          
    <div className='card'> 
        <img src={props.src} height={160} alt="Image" />
        <h2 fw={500} className='lexend-font'>{props.title}</h2>        
        <small className='mulish-font'>{props.description}</small>        
    </div>
  );
}

export default Card;