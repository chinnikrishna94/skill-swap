const LandingPage = () => {
  return (
    <>
      {/* 1. Header (Not fully provided, but placeholder is maintained) */}
      <div className="w-full h-16 bg-white shadow-md">
        {/* Nav Content would go here */}
      </div>

      {/* 2. Hero Section - Replaces the first large absolute div */}
      {/* Full width container, responsive vertical padding (py-32 for large screen, py-16 for medium) */}
      <div className="w-full bg-[#F4F5FB] py-32 md:py-24">
        {/* Content Container - Centered and max-width set, with responsive horizontal padding */}
        <div className="max-w-[1440px] mx-auto px-[11%] lg:px-[15%] flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column (Text/Buttons) - Takes full width on small screens, half on large */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {/* Title */}
            <h1 className="font-inter text-4xl sm:text-5xl leading-tight font-extrabold text-[#19191F] mb-4">
              Learn. Teach. Grow.
            </h1>
            {/* Paragraph */}
            <p className="font-inter text-lg leading-7 font-normal text-[#565D6D] w-full md:w-[504px] mb-8">
              Connect with expert mentors and eager learners. Elevate your
              skills or share your knowledge with a vibrant community.
            </p>

            {/* Buttons - Flex container for side-by-side buttons, wraps on small screens */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="w-full sm:w-auto h-12 px-6 flex items-center justify-center 
                font-inter text-lg leading-7 font-normal text-white rounded-3xl shadow-md 
                bg-[linear-gradient(90deg,#5168C8_0%,#F3F4F6_100%)] 
                hover:bg-[#636AE8] active:bg-[#636AE8]"
              >
                Sign Up as Mentor
              </button>
              <button
                className="w-full sm:w-auto h-12 px-6 flex items-center justify-center 
                font-inter text-lg leading-7 font-normal text-white rounded-3xl shadow-md 
                bg-[linear-gradient(90deg,#BD6456_0%,#F3F4F6_100%)] 
                hover:bg-[#636AE8] active:bg-[#636AE8]"
              >
                Sign Up as Learner
              </button>
            </div>
          </div>

          {/* Right Column (Image) - Hidden on small screens, shows on medium/large */}
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/634/358/non_2x/women-involved-in-web-development-illustration-concept-on-white-background-free-vector.jpg"
              alt="Women involved in web development"
              className="w-full h-auto  object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3. Community Section - Replaces the second large absolute div */}
      <div className="w-full bg-neutral-100 py-24">
        {/* Content Container - Centered and max-width set, with responsive horizontal padding */}
        <div className="max-w-7xl mx-auto px-[5%] lg:px-[10%]">
          {/* Title - Centered */}
          <h2 className="text-center font-inter text-3xl sm:text-4xl leading-10 font-extrabold text-neutral-900 mb-16">
            What Our Community Says
          </h2>

          {/* Testimonial Grid - 3 columns, 2 rows (will wrap to 1 or 2 columns on small screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The individual Card Component will be mapped here. I've included one example card: */}

            {/* Testimonial Card 1 */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full p-8 bg-white  border border-neutral-300 shadow-md flex flex-col justify-between space-y-4"
              >
                {/* Rating Stars - Placeholder for a component */}
                <div className="flex space-x-1 text-yellow-500">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    {/* Star SVG */}
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    {/* Star SVG */}
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    {/* Star SVG */}
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    {/* Star SVG */}
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    {/* Star SVG */}
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed">
                  SkillSwap transformed my career! I found an amazing mentor who
                  guided me through complex data science challenges. The
                  platform is intuitive and incredibly supportive.
                </p>

                {/* Avatar and Name/Detail */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-[#FDF6DA] overflow-hidden rounded-full flex-shrink-0">
                    {/* Placeholder for Avatar Image/Badge */}
                  </div>
                  {/* Name/Detail Text */}
                  <div>
                    <p className="font-inter text-base leading-6 font-semibold text-neutral-900">
                      Jane Doe
                    </p>
                    <p className="font-inter text-sm leading-5 font-normal text-[#565D6D]">
                      Data Scientist, Learner
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Call to Action Section (Footer CTA) - Replaces the third large absolute div */}
      <div className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-[5%] lg:px-[10%] text-center">
          {/* Title */}
          <h2 className="font-inter text-3xl sm:text-4xl leading-10 font-extrabold text-neutral-900 mb-8">
            Featured Skills
          </h2>

          {/* Pill/Label (Kept its original structure, but positioned within the flow) */}
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg
              className="w-4 h-4 text-white mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
          <div
            className="w-auto h-[42px] px-8 py-2 inline-flex items-center justify-center mt-10 
            bg-[#BD6456] rounded-full border border-transparent shadow-md"
          >
            {/* Note: Icons need to be properly placed and sized within the pill's flex container, not absolute */}
            <svg className="w-4 h-4 text-white mr-2 " viewBox="0 0 24 24">
              {/* Icon SVG */}
            </svg>
            <p className="font-inter text-base leading-6 font-medium text-white flex-shrink-0">
              New Skill Alert
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
