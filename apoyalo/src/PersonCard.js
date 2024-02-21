import "./App.css";

function PersonCard(props) {
  return (
    <div className="PersonCard">
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair color: {props.hairColor}</p>
    </div>
  );
}

export default PersonCard;
