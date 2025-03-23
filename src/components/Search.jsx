import { useState } from 'react';
import { useProjectStore } from '../datastorage/project.js';

export function Search() {
  const {
    allProjects,
    pastProjects,
    setActiveProject,
    addPastProjects,
    resetPastProjects,
  } = useProjectStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState({
    frontend: true,
    backend: true,
    game: true,
  });
  const [teamSize, setTeamSize] = useState(1);

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategories((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSearch = () => {
    const filters = {
      searchTerm,
      categories: Object.keys(categories).filter((key) => categories[key]),
      teamSize,
    };

    const getFilteredProjects = () => {
      return allProjects.filter((project) => {
        // Exclude past projects
        const isPastProject = pastProjects.some(
          (pastProject) => pastProject.title === project.title,
        );

        if (isPastProject) return false;

        const matchesSearchTerm =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (project.tags &&
            project.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase()),
            ));

        const matchesCategories =
          filters.categories.length === 0 ||
          filters.categories.some((category) => project.skills[category]);

        const matchesTeamSize =
          project.min <= teamSize && project.max >= teamSize;

        return matchesSearchTerm && matchesCategories && matchesTeamSize;
      });
    };

    let filteredProjects = getFilteredProjects();

    if (filteredProjects.length === 0) {
      resetPastProjects();
      filteredProjects = getFilteredProjects();
    }

    const randomChoice = Math.floor(Math.random() * filteredProjects.length);
    if (filteredProjects[randomChoice] !== undefined) {
      setActiveProject(filteredProjects[randomChoice]);
      addPastProjects(filteredProjects[randomChoice]);
    }
  };

  return (
    <form
      className="flex flex-col justify-between md:justify-end gap-4 md:w-[500px]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      {/* Filter */}
      <div className="flex flex-row-reverse items-center justify-between gap-2">
        <div className="grid justify-end gap-2">
          <div className="flex justify-end gap-2">
            <label htmlFor="frontend">Frontend</label>
            <input
              type="checkbox"
              name="frontend"
              checked={categories.frontend}
              onChange={handleCategoryChange}
              className="size-6"
            />
          </div>
          <div className="flex justify-end gap-2">
            <label htmlFor="backend">Backend</label>
            <input
              type="checkbox"
              name="backend"
              checked={categories.backend}
              onChange={handleCategoryChange}
              className="size-6"
            />
          </div>
          <div className="flex justify-end gap-2">
            <label htmlFor="game">Games</label>
            <input
              type="checkbox"
              name="game"
              checked={categories.game}
              onChange={handleCategoryChange}
              className="size-6"
            />
          </div>
        </div>

        {/* Search input */}
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="teamSize" className="block mb-1">
            Team Size
          </label>
          <input
            type="number"
            id="teamSize"
            name="teamSize"
            min="1"
            max="9"
            placeholder="1 - 9"
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="bg-highlight text-white p-2 rounded-sm text-center h-10 w-18"
          />
        </div>
      </div>

      {/* Searchbar */}
      <input
        type="text"
        placeholder="Søk"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 bg-shadow text-white"
      />
      {/* Search button */}
      <button type="submit" className="w-full bg-highlight py-2 rounded-sm">
        Søk
      </button>
    </form>
  );
}
