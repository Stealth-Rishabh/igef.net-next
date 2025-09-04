"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  // Download,
} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import { Download } from "lucide-react";

export default function Footer() {

  const [badge, setBadge] = useState(false);
  const footerSections = [
    {
      label: "Quick Links",
      items: [
        { name: "Fee Payment", path: "https://pay.webfront.in/#/merchantinfo/indo-global-education-foundation/7651", isLink: true },
        { name: "Admissions", path: "/admissions" },
        { name: "Courses", path: "/courses" },
        { name: "Events & Spotights", path: "/spotlights" },
        {
          name: "Online Learning Resources",
          path: "/online-learning-resources",
        },
        { name: "Placements", path: "/placements/campus-recruitments" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Download Brochure", path: "/brochures/IGC Main Brochure.pdf", isDownload: true, isBadge: badge },
      ],
      
    },
    {
      label: "About Us",
      items: [
        { name: "Accreditation", path: "/about/accreditation" },
        { name: "Location", path: "/about/location" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        { name: "Leadership Team", path: "/about/leadership" },
        { name: "Eminent Faculty", path: "/about/eminent-faculty" },
      ],
    },
    {
      label: "Student Services",
      items: [
        { name: "Admission Procedure", path: "/admissions" },
        { name: "Fee Structure", path: "/admissions" },
        // { name: "Scholarship", path: "/" },
        {
          name: "Grievance Redressal",
          path: "/assets/pdfs/Grievance Committee_IGEF.pdf",
          isDownload: true,
        },
        { name: "Online Grievance Mechanism", path: "/online-grievance" },
        // { name: "Student Feedback System", path: "/feedback" },
        { name: "Alumni Login", path: "/alumni-login" },
      ],
    },
    {
      label: "More Info",
      items: [
        { name: "Online Admissions", path: "https://admissions.igef.net" },
        {
          name: "Mandatory Disclosure",
          path: "/assets/pdfs/Mandatory-Discl-IGCE.pdf",
          isDownload: true,
          // icon: Download
        },
        { name: "International Admissions", path: "/" },
        { name: "Jobs @Indo Global", path: "/careers" },
        { name: "View Virtual Tour", path: "/" },
        { name: "Contact Directory", path: "/contact-us" },
        { name: "Terms and Conditions", path: "/terms-and-conditions" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        
      ],
    },
  ];

  const socialIcons = [
    // { name: "Linkedin", icon: Linkedin },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/indoglobalcolleges/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/IndoGlobalOfficial",
    },
    // { name: "Twitter", icon: Twitter },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCvSPn6SHqEnB_knlejlzV7A",
    },
  ];

  const handleItemClick = (item) => {
    if (item.isDownload) {
      // Open in new tab instead of downloading
      window.open(item.path, "_blank");
    }
    if (item.isLink) {
      window.open(item.path, "_blank");
    }
  };

  return (
    <footer className="pt-10 text-lg text-white bg-gray-900">
      <div className="px-4 py-5 mx-auto max-w-screen-xl md:px-8">
        {/* First section with social icons and address */}
        <div className="grid grid-cols-2 gap-6 mb-8 sm:grid-cols-3 md:grid-cols-6 sm:gap-8">
          <div>
            <h2 className="mb-4 font-bold text-red-600 sm:text-3xl">
              Explore. Discover. Connect.
            </h2>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialIcons.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  className="p-2 text-white bg-red-600 rounded-full transition-colors hover:bg-red-700"
                  aria-label={platform.name}
                >
                  <platform.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="mb-4 font-bold text-red-600 sm:text-2xl">
              Campus Address{" "}
            </h3>
            <p className="text-sm">INDO GLOBAL EDUCATION CITY</p>
            <a href="https://maps.app.goo.gl/NL7WpXRs7wDYNTEu5" target="_blank" className="text-sm">
              ABHIPUR-New Chandigarh-140109, District Mohali (Punjab)
            </a>
            <a href="tel:0160-5036000" className="flex items-center text-sm">
              <Phone size={18} className="mr-2" /> 0160-5036000
            </a>
            <a
              href="https://www.igef.net"
              target="_blank"
              className="flex items-center text-sm"
            >
              <Globe size={18} className="mr-2" /> www.igef.net
            </a>
            <a href="mailto:contact@igef.net" className="flex items-center text-sm">
              <Mail size={18} className="mr-2" /> contact@igef.net
            </a>
          </div>

          {/* Footer sections with links */}
          {footerSections.map((section) => (
            <div key={section.label}>
              <h3 className="mb-4 font-bold text-red-600 sm:text-2xl">
                {section.label}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name} className="text-sm">
                    {item.name === "Blogs" ? (
                      <a href="/blog" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-600">
                        {item.name}
                      </a>
                    ) : item.isDownload || item.isLink ? (
                      <button
                        onClick={() => handleItemClick(item)}
                        className="flex relative justify-start items-center transition-colors hover:text-red-600 group"
                      >
                        {item.name}
                        {item.isDownload && (
                          <Download size={16} className="ml-2 group-hover:animate-bounce" />
                        )}
                        {item.isLink && (
                          <ExternalLink size={16} className="ml-2 group-hover:animate-bounce" />
                        )}

                          {item.isDownload && (
                          <Badge className="absolute hidden sm:block -top-4 -right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-red-600 text-[10px]">
                            PDF
                          </Badge>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className="transition-colors hover:text-red-600"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="px-2 py-6 text-center border-t border-gray-800 bg-primary-color">
        <p className="mb-2 text-sm text-white sm:text-xl">
          © Copyright - Indo Global Education Foundation All Rights Reserved
        </p>
        <div className="text-xs text-white sm:text-base">
          <p>
            Phone: <a href="tel:+91-7307211222">+91-7307211222</a> | Website:{" "}
            <a
              href="https://www.igef.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.igef.net
            </a>{" "}
            | Email: <a href="mailto:contact@igef.net">contact@igef.net</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
