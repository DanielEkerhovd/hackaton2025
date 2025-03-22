import { create } from 'zustand';
import { getProjects } from '../api/getProjects.js';

export const useProjectStore = create((set) => {
  const initializeProjects = async () => {
    const projects = await getProjects('/projects.json');
    set({ allProjects: projects });
  };

  initializeProjects();

  return {
    activeProject: {},
    pastProjects: [],
    allProjects: [],

    setActiveProject: (project) => set({ activeProject: project }),
    addPastProjects: (project) =>
      set((state) => ({ pastProjects: [...state.pastProjects, project] })),
    resetPastProjects: () => set({ pastProjects: [] }),
  };
});
