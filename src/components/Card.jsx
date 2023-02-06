export default function Card({ recipeName, price, description }) {
  return (
    <section>
      <img src="#" alt="Recipe-photo" />
      <article>
        <h2 className="title">{recipeName}</h2>
        <p className="price">${price}</p>
        <article>{(description = {})}</article>
      </article>
    </section>
  )
}
