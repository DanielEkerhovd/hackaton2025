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
          project.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategories =
          filters.categories.length === 0 ||
          filters.categories.some((category) => project.skills[category]);

        const matchesTeamSize =
          project.min <= teamSize && project.max >= teamSize;

        return matchesSearchTerm && matchesCategories && matchesTeamSize;
      });
    };

    let filteredProjects = getFilteredProjects();

    // If all projects are used, reset and rerun the search with the same filters
    if (filteredProjects.length === 0) {
      resetPastProjects();
      filteredProjects = getFilteredProjects();
    }

    console.log(filteredProjects.length);

    // Pick a random project
    const randomChoice = Math.floor(Math.random() * filteredProjects.length);
    if (filteredProjects[randomChoice] !== undefined) {
      setActiveProject(filteredProjects[randomChoice]);
      addPastProjects(filteredProjects[randomChoice]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Searchbar */}
      <input
        type="text"
        placeholder="Søk"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-xs p-2 border border-gray-300 rounded-md"
      />
      {/* Filter */}
      <div className="flex flex-col gap-2">
        <div className="flex space-x-4 mt-2">
          <label>
            <input
              type="checkbox"
              name="frontend"
              checked={categories.frontend}
              onChange={handleCategoryChange}
              className="mr-1"
            />
            Frontend
          </label>
          <label>
            <input
              type="checkbox"
              name="backend"
              checked={categories.backend}
              onChange={handleCategoryChange}
              className="mr-1"
            />
            Backend
          </label>
          <label>
            <input
              type="checkbox"
              name="game"
              checked={categories.game}
              onChange={handleCategoryChange}
              className="mr-1"
            />
            Games
          </label>
        </div>
        <div className="flex justify-center items-center gap-2">
          <label htmlFor="teamSize" className="block mb-1">
            Team Size:
          </label>
          <input
            type="number"
            id="teamSize"
            name="teamSize"
            min="1"
            max="9"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-20 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      {/* Search button */}
      <button
        onClick={handleSearch}
        className="w-full bg-red-500 py-2 rounded-sm"
      >
        Søk
      </button>
    </div>
  );
}
