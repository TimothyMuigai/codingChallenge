import Lists from "./lists"
import apple from './assets/apple.jpg';
import melon from './assets/watermelon.jpg';
import pineapple from './assets/pineapple.jpg';
import orange from './assets/orange.jpg';
import kiwi from './assets/kiwi.jpg';

function App() {
  const fruits = [
      {id:1, name: "apple", image: apple},
      {id:2, name: "pineapple",image: pineapple},
      {id:3, name: "orange", image: orange},
      {id:4, name: "watermelon", image:melon},
      {id:5, name: "kiwi", image: kiwi}
  ];
  return (<Lists items ={fruits}/> )
}

export default App
