const Header = () => {
  return (
    // Main Header Container: Fixed at the top, full width, 64px height.
    <header className="sticky top-0 z-50 w-full h-16 bg-white shadow-md">
      {/* Inner Container: Centers content and applies responsive padding. */}
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* 1. Logo/Branding (Left Section) */}
        <div className="flex items-center space-x-2">
          {/* Logo Circle and Icon */}
          <div className="w-8 h-8 bg-[#5168C8] rounded-full flex items-center justify-center ">
            {/* Icon Placeholder */}
            <div className="w-[22px] h-[22px] text-white flex items-center justify-center">
              {/*  */}
            </div>
          </div>
          {/* Logo Text */}
          <p className="font-inter text-xl leading-5 font-bold text-[#5168C8] ">
            SkillSwap
          </p>
        </div>

        {/* 2. Navigation Menu (Center Section) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center font-inter text-sm leading-[22px] font-normal">
            {/* Home (Active) */}
            <li
              className="px-3 cursor-pointer whitespace-nowrap 
              relative font-bold text-[#636AE8] hover:text-[#636AE8] active:text-[#636AE8]"
            >
              Home
            </li>

            {/* Other Menu Items */}
            {["Features", "Testimonials", "Skills", "About"].map(
              (item, index) => (
                <li
                  key={index}
                  className="px-3 cursor-pointer whitespace-nowrap 
                font-normal text-[#171A1F] hover:text-[#565E6C]"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* 3. Buttons (Right Section) */}
        <div className="flex items-center space-x-3 ">
          {/* Login Button (Outline) */}
          <button
            className="w-auto h-10 px-4 flex items-center justify-center 
            font-inter text-sm leading-[22px] font-medium 
            text-[#5168C8] bg-white rounded-2xl 
            border border-neutral-300 
            hover:text-[#5168C8] hover:bg-white 
            active:text-[#5168C8] active:bg-white 
            disabled:opacity-40"
          >
            Login
          </button>

          {/* Sign Up Button (Gradient) */}
          <button
            className="w-auto h-10 px-4 flex items-center justify-center 
            font-inter text-sm leading-[22px] font-normal 
            text-white rounded-2xl border-0 border-solid border-black 
            bg-[linear-gradient(90deg,#5168C8_0%,#F3F4F6_100%)] 
            hover:text-white hover:bg-[#636AE800] 
            active:text-white active:bg-[#636AE800] 
            disabled:opacity-40"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
