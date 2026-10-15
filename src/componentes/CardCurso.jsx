
function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
    return (
      <article className="card-curso">
        <div className="icone-curso">{"</>"}</div>
  
        <h3>{nome}</h3>
  
        <div className="informacoes">
          <p><strong>Duração:</strong> {duracao}</p>
          <p><strong>Modalidade:</strong> {modalidade}</p>
          <p><strong>Nível:</strong> {nivel}</p>
        </div>
  
        <div className={vagas > 0 ? "vagas disponivel" : "vagas completo"}>
          {vagas > 0
            ? `Vagas disponíveis: ${vagas}`
            : "Turma completa"}
        </div>
      </article>
    );
  }
  
  export default CardCurso;
  