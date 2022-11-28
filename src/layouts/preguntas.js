import "../assets/styles/greydive.css";
import i18n from "../assets/i18n/es.json";

const Preguntas = (object) => {
  const preguntasList = object.data.map((item, index) => (
    <div className="box border-tarea tareas">
    {i18n.PREGUNTAS.TAREA} {index + 1}: <br/>
      {item.texto} <br/><br/>
      {i18n.PREGUNTAS.RESPUESTA} {item.respuesta} <br/>
      <p className="duracion-font">{i18n.PREGUNTAS.DURACION} {item.tiempo}</p>
    </div>
  ));

  return (preguntasList);
};

export default Preguntas;