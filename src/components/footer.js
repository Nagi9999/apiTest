"use client";
import Link from "next/link";
const Footer = () => {
  const menuItems = [
    { title: "about us", path: "/" },
    { title: "our work", path: "/" },
    { title: "our clients", path: "/" },
    { title: "our team", path: "/" },
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
        <div className="2xl:container mx-auto">
        <div className=" grid sm:grid-cols-4 grid-cols-2    text-white my-16  ">
        <div className="col-span-1 sm:pl-32 px-5">
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
        <div className="col-span-1">
          <h1 className="text-xl">Offices</h1>
          <ul
            className={`flex  flex-col font-semibold  text-sm  my-4   sm:space-y-0 space-y-2 mt-6`}
          >
            {menuItems1.map((item, index) => (
              <li key={index}>
                <a href={item.path}>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 sm:ml-0 ml-5 ">
          <h1 className="text-xl">inquiries</h1>
          <a href="briefme@mindspace-me.com">
            <p className="font-semibold mt-10">briefme@mindspace-me.com</p>
          </a>
          
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:my-16 my-5 sm:px-32 px-5 text-white">
      <div class=" sm:space-x-4 space-x-5 flex items-center ">
            <Link href="/">
              <h1 className="text-3xl font-bold">mindspace |</h1>
            </Link>
            <a href="www.instagram.com" class="no-underline text-white">
              <img
                src="/favicon/instagram.png"
                alt="Instagram"
                class="sm:w-6 w-4 sm:h-6 h-4"
              />
            </a>
            <a href="www.linkedin.com" class="no-underline text-white">
              <img
                src="/favicon/linkedin.png"
                alt="LinkedIn"
                class="sm:w-6 w-4 sm:h-6 h-4"
              />
            </a>
          </div>
          <div className="flex sm:space-x-3 space-x-4 sm:my-0 my-8">
            <a href="/">privacy policy</a>
            <p>|</p>
            <a href="/">terms & conditions</a>
          </div>
      </div>
       </div>
      
    </div>
  );
};

export default Footer;
