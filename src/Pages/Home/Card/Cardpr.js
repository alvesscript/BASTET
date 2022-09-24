import "./Cardpr.css";
import Card2 from "./Card2";
import Card0 from "./Card0";
import Card1 from "./Card1";
import turma from "../../../img/turma.png";



export function Cardpr() {


  const recipeItem = {
    image: turma,
    title: "FRONT-END",
    description:
      " é o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML,CSS e JavaScript, para que os usuários possam visualizar e interagir com aquele site.",
  };

  const recipeItem0 = {
    image: turma,
    title: "BACK-END",
    description:
      "E o que está por trás das aplicações desenvolvidas na programação. Ou seja, tudo que dá estrutura e apoio às ações do usuário da máquina é chamado de back-end",
  };

  const recipeItem1 = {
    image: turma,
    title: "FULL STACK",
    description:
      " profissional ligado à área de TI capaz de trabalhar nas mais diversas atividades que dizem respeito ao desenvolvimento e programação web, muito valorizado no mercado graças ao seu conhecimento em diferentes linguagens, códigos e tecnologias.",
  };


  return (

    <div className="App">

      <div className="text_turma">
        <h1> Últimas Turmas </h1>
      </div>

      <header className="App-header">
        <Card2
          title={recipeItem.title}
          description={recipeItem.description}
        />
        <Card0
          title={recipeItem0.title}
          description={recipeItem0.description}
        />
        <Card1
          title={recipeItem1.title}
          description={recipeItem1.description}
        />
      </header>
    </div>
  );
}

export default Cardpr;
