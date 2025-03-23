import { useEffect } from 'react';
import { Display } from '../components/Display.jsx';
import { Search } from '../components/Search.jsx';

import { useProjectStore } from '../datastorage/project.js';
import { useState } from 'react';

export function Home() {
  const { fetchProjects } = useProjectStore();

  const [imBored, setImBored] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center md:justify-between md:items-center">
      <Display />
      <div className="flex-col justify-between md:h-[400px] flex">
        {imBored ? (
          <>
            <iframe
              className="w-full"
              height="200"
              src="https://www.youtube.com/embed/L_fcrOyoWZ8?autoplay=1&mute=0&controls=0"
            ></iframe>
          </>
        ) : (
          <button
            className="p-1 bg-shadow rounded-sm text-[10px] w-fit hidden md:block"
            onClick={() => setImBored(!imBored)}
          >
            Need some focus?
          </button>
        )}

        <Search />
      </div>
    </section>
  );
}
