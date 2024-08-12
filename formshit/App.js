import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Forms from './Forms';
// import DepartmentForm from './DepartmentForm';
import Forms from './Components/Forms';
import DepartmentForm from './Components/DepartmentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forms/>} />
        <Route path="/departments" element={<DepartmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;

