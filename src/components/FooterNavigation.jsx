export function FooterNavigation() {
  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-5">
        <h3 className="mb-7 text-xl font-bold text-gray-900">Navigation</h3>
        <ul className="space-y-3">
            <li>
                <a 
                  href="#home" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#home');
                  }}
                >
                  Home
                </a>
            </li>
            <li>
                <a 
                  href="#comunidad" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#comunidad');
                  }}
                >
                  Campaign
                </a>
            </li>
            <li>
                <a 
                  href="#team" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#team');
                  }}
                >
                  Team
                </a>
            </li>
        </ul>
    </div>
  )
}