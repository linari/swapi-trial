import './Fonts.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* The main App file includes header and footer elements */
/* and The two main pages to show the elements too */
function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
