import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-11/12 max-w-screen-xl mx-auto h-[80px] flex items-center justify-between">
      <div className="flex items-center gap-2 relative group">
        <NavLink
          to="/"
          className="flex items-center gap-1 bg-highlight rounded-l-full rounded-r-sm px-1 z-10"
        >
          <img
            className="rounded-md size-12"
            src="/icons/logo.png"
            alt="Logo"
          />
        </NavLink>
        <img
          className="rotate-[70deg] size-8 absolute transition-all duration-200 right-2 group-hover:-right-9"
          src="/icons/splash.png"
          alt="Slash"
        />
      </div>
      <NavLink
        to="/informasjon"
        className="flex items-center justify-center bg-highlight rounded-r-full h-[48px] px-2"
      >
        <img className="size-6" src="/icons/info.png" alt="Info icon" />
      </NavLink>
    </header>
  );
}
