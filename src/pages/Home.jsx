import { Display } from '../components/Display.jsx';
import { Search } from '../components/Search.jsx';

import { useProjectStore } from '../datastorage/project.js';

// import { useEffect } from 'react';

export function Home() {
  const { activeProject } = useProjectStore();
  console.log(activeProject);

  return (
    <section className="flex flex-col gap-2 w-full">
      <Display />
      <Search />
    </section>
  );
}
