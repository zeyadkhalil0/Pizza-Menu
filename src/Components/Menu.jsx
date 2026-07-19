  import Pizza from "./Pizza"
  import {pizzaData} from "../data.js"
const NoPizza = "There're No Pizza"
  const Menu = () => {
    return (
      <div className="menu ">
        <h2>Our Menu</h2>
        <ul className="menu pizzas">
          {pizzaData.length > 0 ?
          pizzaData.map((p)=>{
            return <Pizza pizza = {p}/>
          })
        : NoPizza }
        {
          console.log(pizzaData == {})
        }
      </ul>
        </div>
    )
  }

  export default Menu
