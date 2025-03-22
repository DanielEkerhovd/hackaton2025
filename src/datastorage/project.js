import { create } from 'zustand';
import GetProjects from '../api/GetProjects';

export const useProjectStore = create((set) => ({
  activeProject: {},
  pastProjects: [],
  allProjects: [],

  setActiveProject: (project) => set({ activeProject: project }),
  addPastProjects: (project) =>
    set((state) => ({ pastProjects: [...state.pastProjects, project] })),
  resetPastProjects: () => set({ pastProjects: [] }),

  fetchProjects: async () => {
    const fetch = await GetProjects('/json/projects.json');
    const projects = fetch.prosjekt;
    set({ allProjects: projects });
  },
}));
