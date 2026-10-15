
import Cabecalho from "./componentes/Cabecalho";
import CardCurso from "./componentes/CardCurso";
import Destaque from "./componentes/Destaque";
import Rodape from "./componentes/Rodape";
import "./App.css";

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 8
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "240 horas",
    modalidade: "Presencial",
    nivel: "Qualificação",
    vagas: 0
  },
  {
    nome: "Programação Web",
    duracao: "300 horas",
    modalidade: "Online",
    nivel: "Aperfeiçoamento",
    vagas: 15
  },
  {
    nome: "Banco de Dados",
    duracao: "200 horas",
    modalidade: "Online",
    nivel: "Aperfeiçoamento",
    vagas: 5
  },
  {
    nome: "Desenvolvimento Mobile",
    duracao: "300 horas",
    modalidade: "Presencial",
    nivel: "Aperfeiçoamento",
    vagas: 10
  }
];

function App() {
  return (
    <div className="pagina">
      <Cabecalho />

      <main className="conteudo">
        <section className="introducao">
          <span className="etiqueta">FORMAÇÃO EM TECNOLOGIA</span>
          <h2>Encontre seu próximo curso</h2>
          <p>
            Explore as opções de formação e desenvolva habilidades
            para criar seu futuro na tecnologia.
          </p>
        </section>

        <section className="secao-cursos">
          <div className="titulo-secao">
            <div>
              <h2>Nossos cursos</h2>
              <p>Conheça as formações disponíveis.</p>
            </div>
            <span className="contador">{cursos.length} cursos</span>
          </div>

          <div className="grade-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao-destaques">
          <div className="titulo-secao">
            <div>
              <h2>Por que aprender tecnologia?</h2>
              <p>Descubra as vantagens de investir no conhecimento.</p>
            </div>
          </div>

          <div className="grade-destaques">
            <Destaque
              titulo="Aprenda fazendo"
              texto="Desenvolva projetos práticos durante sua formação."
            />

            <Destaque
              titulo="Desenvolva habilidades"
              texto="Aprenda ferramentas e conceitos importantes da tecnologia."
            />

            <Destaque
              titulo="Construa seu futuro"
              texto="Prepare-se para novas oportunidades na área de tecnologia."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
