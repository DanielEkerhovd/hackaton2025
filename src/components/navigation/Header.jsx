import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-11/12 max-w-screen-xl mx-auto bg-red-100 h-[60px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className="flex items-center justify-center size-8 bg-blue-400 rounded-full"
        >
          <div>H</div>
        </NavLink>
        <h1>LOGO</h1>
      </div>
      <NavLink
        to="/info"
        className="flex items-center justify-center size-8 bg-blue-400 rounded-full"
      >
        <div>I</div>
      </NavLink>
    </header>
  );
}
