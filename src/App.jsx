import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Forum from './components/Forum';
import Header from './components/Header';
import Home from './components/Home';
import Reference from './components/Reference';
import ArticlesList from './components/ArticlesList';
import Tutorials from './components/Tutorials';
// import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    // <Reference/>
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tutorial" element={<Tutorials />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/article" element={<ArticlesList />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;