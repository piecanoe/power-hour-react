import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './views/Layout';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
