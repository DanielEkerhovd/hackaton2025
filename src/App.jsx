import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/navigation/Header';
import { Information } from './pages/Information';

// import { useProjectStore } from './datastorage/project.js';
// import { useEffect } from 'react';

function App() {
  // const { allProjects } = useProjectStore();

  // useEffect(() => {
  //   console.log(allProjects);
  // }, [allProjects]);

  return (
    <>
      <Header />
      <section className="w-11/12 max-w-screen-2xl mx-auto h-[calc(100vh-80px)] flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasjon" element={<Information />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
