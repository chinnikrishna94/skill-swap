const Footer = () => {
  return (
    // Main Footer Container: Full width, fixed height, white background.
    <footer className="w-full h-[52px] bg-white border-t border-gray-200">
      {/* Inner Container: Centers content and applies padding. Flex to justify content. */}
      {/* Replaces original absolute positioning with flexible layout. */}
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Left/Center Section: Text Links/Content (Flex container) */}
        <div className="flex items-center space-x-6 text-sm flex-wrap">
          {/* Text 1: Copyright/Disclaimer */}
          <p className="font-inter leading-5 font-medium text-[#565D6D] whitespace-nowrap">
            &copy; {new Date().getFullYear()} SkillSwap. All Rights Reserved.
          </p>

          {/* Text 2: Policy */}
          <p className="font-inter leading-5 font-medium text-[#565D6D] whitespace-nowrap">
            Privacy Policy
          </p>

          {/* Text 3: Terms */}
          <p className="font-inter leading-5 font-medium text-[#565D6D] whitespace-nowrap">
            Terms of Service
          </p>
        </div>

        {/* Right Section: Social Icons (Flex container) */}
        <div className="flex items-center space-x-4">
          {/* Facebook Icon */}
          <svg
            className="w-5 h-5 fill-[#565D6D] cursor-pointer hover:opacity-75"
            viewBox="0 0 24 24"
          >
            {/* Placeholder for Facebook SVG */}
          </svg>

          {/* Twitter Icon */}
          <svg
            className="w-5 h-5 fill-[#565D6D] cursor-pointer hover:opacity-75"
            viewBox="0 0 24 24"
          >
            {/* Placeholder for Twitter SVG */}
          </svg>

          {/* LinkedIn Icon */}
          <svg
            className="w-5 h-5 fill-[#565D6D] cursor-pointer hover:opacity-75"
            viewBox="0 0 24 24"
          >
            {/* Placeholder for LinkedIn SVG */}
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
