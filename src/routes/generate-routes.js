import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Tareas from '../layouts/tareas';
import greydive_mockup from '../assets/mocks/greydive.json';

const GenerateRoutes = () => {
  const clients = greydive_mockup.map((obj, i) => {
    return (
      <Router>
        <Routes>
          <Route
            path={`/${obj.cliente}/testeador-${i + 1}`}
            element={<Tareas data={obj} />}
          ></Route>
        </Routes>
      </Router>
    );
  });

  return <div>{clients}</div>;
};

export default GenerateRoutes;
