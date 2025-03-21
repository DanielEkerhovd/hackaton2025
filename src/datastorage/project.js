import { create } from 'zustand';
import { getProjects } from '../api/getProjects';

const projects = await getProjects('/projects.json');

export const useProjectStore = create((set) => ({
  activeProject: {},
  pastProjects: [],
  allProjects: projects,

  setActiveProject: (project) => set({ activeProject: project }),
  addPastProjects: (project) =>
    set((state) => ({ pastProjects: [...state.pastProjects, project] })),
  resetPastProjects: () => set({ pastProjects: [] }),
}));
