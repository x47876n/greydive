import "../assets/styles/greydive.css";

import Preguntas from "./preguntas";
import i18n from "../assets/i18n/es.json";

import { useLocation } from 'react-router-dom';

const Tarea = (client) => {
  // Obtengo el nombre del testeador desde la URL
  const location = useLocation();
  const pathName = location.pathname.split('/');
  const lastPath = pathName[pathName.length - 1];
  const sanitizeLastPath = lastPath.charAt(0).toUpperCase() + lastPath.slice(1).replace('-', ' ');

  return (
    <div className="body">
      <p className="title">{client.data.cliente}</p>
      <p className="title">{i18n.TAREAS.TIPO_TEST}</p>
      <p className="title">{sanitizeLastPath}</p>

      <video width="1100" height="825" controls="controls">
        <source src={client.data.linkVideo} type="video/mp4"/>
        {i18n.ERROR.SIN_SOPORTE}
      </video>

      <p className="title">{i18n.TAREAS.TRANSCRIPCION}</p>
      <div className="embed">
        {client.data.transcripcion}
      </div>

      <p className="title">{i18n.TAREAS.TITULO}</p>
      <p className="title box">{i18n.TAREAS.ESCENARIO} {client.data.escenario}</p>
      <Preguntas data={client.data.preguntas} />
    </div>
  );
};

export default Tarea;