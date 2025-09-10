import { FooterNewsletter } from "./FooterNewsletter"
import { FooterNavigation } from "./FooterNavigation"
import { FooterAboutUs } from "./FooterAboutUs"
import { FooterHelp } from "./FooterHelp"
import { FooterBottom } from "./FooterBottom"

function Footer() {
  return (
    <footer className="bg-[#f9f4e8] px-6 py-12">
      <div className="max-w-[85%] mx-auto">
        {/* Main footer content */}
        <div className="flex gap-20">
          <FooterNewsletter />
          <div className="flex gap-10">
            <FooterNavigation />
            <FooterAboutUs />
            <FooterHelp />  
          </div>
          
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer