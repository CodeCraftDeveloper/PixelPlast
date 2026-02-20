function Footer() {
  return (
    <footer className="w-full bg-[#fff] px-4 py-8 sm:px-10 sm:py-10 lg:px-20">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#e5e7eb] bg-white px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5">
        <div>
          <p className="text-base font-semibold text-[#111827]">PixelPlast</p>
          <p className="mt-1 text-sm text-[#6b7280]">
            Premium OEM & ODM and clean-energy manufacturing solutions.
          </p>
        </div>
        <p className="text-sm text-[#6b7280] sm:text-right">
          (c) {new Date().getFullYear()} PixelPlast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
