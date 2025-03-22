export function Information() {
  return (
    <div className="flex flex-col justify-center gap-5 w-full mx-auto max-w-[600px] h-full">
      <div>
        <h1 className="font-bold text-3xl">idéSPRUT</h1>
        <span className="font-extralight text-sm">
          En app for sprutende ideer
        </span>
      </div>
      <p className="font-light text-sm">
        Appen gir deg morsomme og kreative prosjektideer for hackathon. Enten du
        er nybegynner eller erfaren, finner du inspirerende utfordringer som
        setter fart på kodingen og gir deg muligheten til å teste ut nye
        ferdigheter. Perfekt for å komme i gang med hackathon eller for å finne
        spennende prosjekter til teamet ditt!
      </p>
      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://github.com/DanielEkerhovd/hackaton2025"
        >
          <img className="size-10" src="/icons/github.png" alt="Github icon" />
        </a>
        <a
          target="_blank"
          href="https://www.figma.com/design/NH9uFzFKmePKSgdLhCHH6v/Untitled?node-id=0-1&t=hqbn5kC2uemJU84R-1"
        >
          <img className="size-10" src="/icons/figma.png" alt="Figma icon" />
        </a>
      </div>
    </div>
  );
}
