export function FooterAboutUs() {
  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-5">
        <h3 className="mb-7 text-xl font-bold text-gray-900">About Us</h3>
        <ul className="space-y-3">
            <li>
                <a 
                  href="#about-us" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#about-us');
                  }}
                >
                  About Us
                </a>
            </li>
            <li>
                <a 
                  href="#donate" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#donate');
                  }}
                >
                  Contact
                </a>
            </li>
            <li>
                <a 
                  href="#donate" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#donate');
                  }}
                >
                  Address
                </a>
            </li>
        </ul>
    </div>
  )
}