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
        <div className="h-full flex flex-col justify-center gap-2">
          <p className="font-light">
            Vet du ikke hva du skal lage for hackatonet?
          </p>
          <p className="font-light">Legg inn kriterier, vi gjør resten</p>
        </div>
      )}
    </div>
  );
}
