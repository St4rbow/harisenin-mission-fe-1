import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo.jsx";
import { IMAGE_BASE } from "../data/courses.js";

function Navbar({ showMenu = false }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-surface">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />

        {showMenu && (
          <>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#kategori" className="text-muted hover:text-ink">
                Kategori
              </a>
              <img src={`${IMAGE_BASE}/user-avatar/80/80`} alt="Foto profil" className="h-11 w-11 rounded-lg object-cover" />
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Buka menu"
              aria-expanded={open}
              className="text-xl text-muted md:hidden"
            >
              <FaBars />
            </button>

            {open && (
              <div className="absolute top-full right-0 left-0 z-10 border-b border-line bg-surface px-5 py-3 md:hidden">
                <a href="#kategori" onClick={() => setOpen(false)} className="block py-2 text-muted">
                  Kategori
                </a>
              </div>
            )}
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
