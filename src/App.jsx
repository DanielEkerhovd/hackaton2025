import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import { Header } from './components/navigation/Header';

function App() {
  return (
    <>
      <Header />
      <section className="w-11/12 max-w-screen-2xl mx-auto bg-blue-100 h-[calc(100vh-60px)] flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
