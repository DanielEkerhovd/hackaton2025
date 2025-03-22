import { useProjectStore } from '../datastorage/project.js';

export function Display() {
  const { activeProject } = useProjectStore();
  const { title, description, min, max } = activeProject;

  return (
    <div className="bg-shadow rounded-sm min-h-[240px] md:min-h-[400px] h-fit w-full flex flex-col justify-around gap-5 p-5 max-w-[600px] lg:max-w-">
      {activeProject.title ? (
        <>
          <h1 className="font-semibold text-lg md:text-4xl">{title}</h1>
          <p className="font-light text-sm md:text-lg">{description}</p>
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
        <div className="h-full flex items-center justify-center ">
          <div className="h-full flex flex-col justify-center gap-4 md:text-lg">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-3xl">Velkommen til</h1>
              <span className="font-bold text-4xl">idéSPRUT</span>
            </div>
            <p className="font-light">
              Trenger du noen sprutende ideer for hackaton? Da er du på rett
              plass!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
