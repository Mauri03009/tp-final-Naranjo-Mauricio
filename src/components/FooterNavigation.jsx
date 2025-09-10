export function FooterNavigation() {
  return (
    <div className="mx-5">
        <h3 className="mb-7 text-xl font-bold text-gray-900">Navigation</h3>
        <ul className="space-y-3">
            <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300">
                  Home
                </a>
            </li>
            <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300">
                  Campaign
                </a>
            </li>
            <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 hover:font-bold duration-300">
                  Team
                </a>
            </li>
        </ul>
    </div>
  )
}