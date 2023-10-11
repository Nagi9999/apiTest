"use client";
import Link from "next/link";
const Footer = () => {
  const menuItems = [
    { title: "about us", path: "/" },
    { title: "Inventory", path: "/" },
    { title: "Special Offers", path: "/" },
    { title: "contact us", path: "/" },
  ];
  const menuItems1 = [
    { title: "dubai,UAE", path: "/" },
    { title: "beirut,LEBANON", path: "/" },
    { title: "paris,FRANCE", path: "/" },
    { title: "cairo,EGYPT", path: "/" },
    { title: "riyadh,KSA", path: "/" },
  ];

  return (
    <div className="custombackground ">
      <div className="2xl:container mx-auto ">
        <div className="  flex flex-col justify-center  text-white my-16 sm:pl-32 pl-12  ">
          <h1 className="text-xl">sitemap</h1>
          <ul
            className={`flex  flex-col font-semibold  text-sm  my-4  sm:space-y-0 space-y-2 mt-6`}
          >
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
              <span className="text-orange-200">Vista</span>
            </a>
          </div>          </Link>
          <a href="www.instagram.com" class="no-underline text-white">
            <img
              src="/favicon/instagram.png"
              alt="Instagram"
              class="sm:w-6 h-6"
            />
          </a>
          <a href="www.linkedin.com" class="no-underline text-white">
            <img
              src="/favicon/linkedin.png"
              alt="LinkedIn"
              class="w-6 h-6 "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
