export function ListArticles ({articles, setArticles}){



function valueChange (idNo){


  const objIndex = articles.findIndex((articles => articles.id == idNo));
  articles[objIndex].nb =  articles[objIndex].nb + 1;

  console.log(articles[objIndex])


  setArticles(articles);

  document.getElementById('pri_art').innerHTML = articles[objIndex].nb * articles[objIndex].price + "€";
  document.getElementById('nb_art').innerHTML = articles[objIndex].nb;

}


  return <section>
      {articles.map((article, index)=> {
          return <article className="col-sm-10" key={index}>
                
                  <h4>{article.title}</h4>
                  <p>{article.body}</p>
                  <div id="pri_art" className="btn btn-warning">{article.price * article.nb }€</div>
                  <button className="btn btn-dark" onClick={() => valueChange(article.id)} >Ajouter au panier</button>
                  <div id="nb_art"  className="btn btn-success"> x {article.nb}</div>
                  <br></br><br></br>
              </article>
      })}
  </section>
}

