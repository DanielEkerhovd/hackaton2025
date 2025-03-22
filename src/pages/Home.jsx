import { useEffect } from 'react';
import { Display } from '../components/Display.jsx';
import { Search } from '../components/Search.jsx';

import { useProjectStore } from '../datastorage/project.js';

export function Home() {
  const { fetchProjects } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col gap-2 w-full">
      <Display />
      <Search />
    </section>
  );
}
