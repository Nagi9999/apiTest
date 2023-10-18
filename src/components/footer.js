"use client"
import Link from "next/link";


const Footer = (props) => {
  const menuItems = [
    { title: "about us", path: "/aboutus" },
    { title: "Inventory", path: "/inventory" },
    { title: "Special Offers", path: "/specialOffers" },
    { title: "contact us", path: "/contactus" },
  ];

  return (
    <div className="bg-blue-900">
      <div className="2xl:container mx-auto">
        <div className="flex flex-col items-center text-center text-white my-16">
          <h1 className="sm:text-3xl text-2xl font-bold">sitemap</h1>
          <ul className={`flex flex-col font-semibold text-sm my-4 sm:space-y-2 space-y-2 mt-6`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex sm:justify-center justify-around items-center sm:space-x-16 text-white my-16">
          <Link href="/">
            <div className="text-3xl font-bold">
              <a href="/" className=" ">
                <span className="text-blue-500">Auto</span>
                <span className="text-orange-500">Vista</span>
              </a>
            </div>
          </Link>
          <a href={props.socialLinks.en.Instagram} className="no-underline text-white">
            <img src="/favicon/instagram.png" alt="Instagram" className="sm:w-6 h-6" />
          </a>
          <a href={ props.socialLinks.en.Linkedin} className="no-underline text-white">
            <img src="/favicon/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
