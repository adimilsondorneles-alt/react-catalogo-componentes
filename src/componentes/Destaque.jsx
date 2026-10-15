
function Destaque({ titulo, texto }) {
    return (
      <article className="card-destaque">
        <div className="destaque-icone">✦</div>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </article>
    );
  }
  
  export default Destaque;
  