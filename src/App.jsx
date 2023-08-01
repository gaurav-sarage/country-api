import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import CountryDetail from './pages/country-detail/CountryDetail';

const App = () => {
  return <main className="main-container">
    <Routes>
      <Route exact path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/:code" element={<CountryDetail />} />
      </Route>
    </Routes>
  </main>;
};

export default App;
