
const Pizza = (props) => {
  return (
    <li className="pizza">
      <img src={props.pizza.photoName} alt="Pizza Margherita" />
      <div>
      <h3>{props.pizza.name}</h3>
      <p>{props.pizza.ingredients}</p>
      <span>{props.pizza.price}</span>
      </div>
      {
        console.log(props.pizza)
      }
    </li>
  )
}

export default Pizza
