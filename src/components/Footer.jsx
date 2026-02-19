function Footer() {
  return (
    <footer className="w-full bg-[#fff] px-6 py-10 sm:px-10 lg:px-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#e5e7eb] bg-white px-6 py-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-base font-semibold text-[#111827]">PixelPlast</p>
          <p className="mt-1 text-sm text-[#6b7280]">
            Premium OEM & ODM and clean-energy manufacturing solutions.
          </p>
        </div>
        <p className="text-sm text-[#6b7280]">
          © {new Date().getFullYear()} PixelPlast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
