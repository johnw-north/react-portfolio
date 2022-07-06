

function Card(props) {
    return (
      <div className="card">
        <h1 className="card__title">{props.title}</h1>
        <img src={props.image} alt="Project" />
        <p>{props.description}</p>
        <div className="card__links">
          <a href={props.github}>
            <i className="fa-solid fa-code"></i>
          </a>
          <a href={props.website}>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;