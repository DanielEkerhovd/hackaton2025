import { useProjectStore } from '../datastorage/project.js';

export function Display() {
  const { activeProject } = useProjectStore();
  const { title, description, min, max } = activeProject;

  return (
    <div className="bg-green-50 min-h-[240px] h-fit w-full flex flex-col justify-between gap-5 p-5">
      {activeProject.title ? (
        <>
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="font-light text-sm">{description}</p>
          <div className="flex items-center gap-2">
            <img className="size-5" src="/icons/person.png" alt="Person icon" />
            <span className="text-sm font-light">
              {max === min ? (
                max === 9 ? (
                  <span>{max}+</span>
                ) : (
                  <span>{max}</span>
                )
              ) : (
                <span>
                  {min} - {max}
                </span>
              )}
            </span>
          </div>
        </>
      ) : (
        <p className="text-center">Trenger du inspirasjon? Søk på prosjekter</p>
      )}
    </div>
  );
}
