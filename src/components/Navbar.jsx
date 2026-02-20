const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#fff] px-3 pt-3 sm:px-4">
      <nav className="flex items-center justify-between rounded-[1.25rem] bg-[#fff] px-3 py-3 sm:px-5">
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] sm:text-[1.05rem]"
        >
          <span className="text-[#31d3a2]">*</span>
          Pixelplast
        </a>

        <ul className="hidden items-center gap-7 text-sm text-[#6b7280] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="transition-colors hover:text-[#111827]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <menu className="m-0 flex list-none items-center gap-2 p-0">
          <a
            href="#contact"
            className="rounded-full bg-[#31d3a2] px-3 py-1.5 text-xs font-medium text-white sm:px-3.5"
          >
            Get in touch
          </a>
        </menu>
      </nav>
    </header>
  );
}

export default Navbar;
