import SectionWrapper from "../../common/layout/SectionWrapper";
import { Link } from "react-router-dom";
import Logo from "../../common/layout/Logo";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Product",
    links: ["Features", "Pricing", "AI Interviews", "Testimonials"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Terms of Service", "Privacy Policy", "Guides"],
  },
  {
    title: "Social",
    links: ["LinkedIn", "Twitter", "GitHub", "YouTube"],
  },
];

export default function Footer() {
  return (
    <SectionWrapper  className="bg-primary text-white pb-6 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-10">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <Logo height={60} width={60} />
            <h1 className="text-gray-900 font-bold text-2xl ml-3">
              InterviewIQ
            </h1>
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="hover:underline hover:text-gray-200 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="border-t border-white/30 pt-6 mt-10 text-center text-sm">
          Interview AI © {new Date().getFullYear()} | All rights reserved.
        </div>
      </div>
    </SectionWrapper>
  );
}
