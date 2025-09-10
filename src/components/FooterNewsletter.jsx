
export function FooterNewsletter() {
  return (
    <div className="md:col-span-1">
      <h3 className="mb-6 text-xl font-bold text-gray-900">Newsletter</h3>
      <p className="mb-8 text-sm text-gray-600 leading-relaxed">Subscribe to our newsletter to get more informations</p>
      <div className="flex gap-2 bg-white p-1 w-110">
        <input
          type="email"
          placeholder="Email"
          className="font-bold flex-1 bg-white border-gray-200 px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:duration-600"
        />
        <button className="bg-emerald-700 hover:bg-emerald-800 hover:text-blue-100 duration-300 text-white px-5 py-4 text-sm font-medium transition-colors cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  )
}