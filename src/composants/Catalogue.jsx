import { useContext } from "react"
import {useState , useEffect} from "react"
import { Like } from "./Like";
import { ListArticles } from "./ListArticles";

export const Catalogue = () => {


  //console.log(articles);
  /* function handleClick(id){
    const tableauFiltre = articles.filter(article => { return article.id != id} )
    setTableau({...articles , articles : tableauFiltre});
  } */


    const [articles, setArticles] = useState([
      {id: 1, title:"Café",  body: "Pour bien vous réveiller le matin", price: 3, nb: 0},
      {id: 2, title:"Thé",  body: "Histoire d'imiter votre grand mère", price: 2, nb: 0},
      {id: 3, title:"Sucre",  body: "Pas besoin de vous expliquer ce qu'est du sucre quand même", price: 1, nb: 0},
      {id: 4, title:"Tesla Model 3",  body: "Oui, ça n'a rien avoir avec le reste", price: 49999, nb: 0}])
  


    return (
      <div className="App">
          <br></br>
       <ListArticles articles={articles}  setArticles={setArticles} />
      </div>
    );
  }


