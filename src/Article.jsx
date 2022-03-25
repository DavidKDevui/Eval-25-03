export const Article = (props) => {
    return <article >
    <h2>{props.article.title}</h2>
    <p>{ props.article.body }</p>
    <button onClick={() => props.handleClick(props.article.id)}>supprimer</button>
  </article>
}