

function Card(props) {
    return (
      <div className="card">
        <h1 className="card__title">{props.title}</h1>
        <img src={props.image} alt="Project" />
        <p>{props.description}</p>
      </div>
    );
  }
  
  export default Card;