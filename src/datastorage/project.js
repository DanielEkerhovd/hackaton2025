import { create } from 'zustand';
import getProjects from '../api/getProjects';

export const useProjectStore = create((set) => ({
  activeProject: {},
  pastProjects: [],
  allProjects: [],

  setActiveProject: (project) => set({ activeProject: project }),
  addPastProjects: (project) =>
    set((state) => ({ pastProjects: [...state.pastProjects, project] })),
  resetPastProjects: () => set({ pastProjects: [] }),

  fetchProjects: async () => {
    const projects = await getProjects('/projects.json');
    set({ allProjects: projects });
  },
}));
