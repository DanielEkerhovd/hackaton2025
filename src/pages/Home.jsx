import { Display } from '../components/Display.jsx';

import { GetProjects } from '../api/GetProjects.js';
import { useEffect } from 'react';

export function Home() {
  const location = '/projects.json';
  const { projects } = GetProjects(location);

  useEffect(() => {
    if (projects) {
      console.log('Projects:', projects);
    }
  }, [projects]);

  return (
    <>
      <Display />
    </>
  );
}
