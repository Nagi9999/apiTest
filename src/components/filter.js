import { useState, useEffect } from "react";

const Filter = () => {
  const [active, setActive] = useState("all");
  const [filterImages, setFilterImages] = useState([]);

  useEffect(() => {
    setFilterImages(Data);
  }, []);

  const handleClick = (show) => {
    let btnType = show.target.value;
    setActive(btnType);
    const newfilterImages = Data.filter((item) => item.category === btnType);
    btnType === "all"
      ? setFilterImages(Data)
      : setFilterImages(newfilterImages);
  };

  const Data = [
    {
      id: 1,
      image: "/images/corolla.jpg",
      title: "Toyota Corolla SUV - Efficient and Reliable",
      category: "suv",
    },
    {
      id: 2,
      image: "/images/kona.jpg",
      title: "Hyundai Kona SUV - Compact and Stylish",
      category: "suv",
    },
    {
      id: 3,
      image: "/images/amg.jpg",
      title: "Mercedes-AMG Coupe - Performance and Elegance",
      category: "coupe",
    },
    {
      id: 4,
      image: "/images/astonMartin.jpg",
      title: "Aston Martin Coupe - Luxury and Power",
      category: "coupe",
    },
    {
      id: 5,
      image: "/images/mercedesA.jpg",
      title: "Mercedes-Benz A-Class Hatchback - Sophisticated and Compact",
      category: "hatchback",
    },
    {
      id: 6,
      image: "/images/golf.jpg",
      title: "Volkswagen Golf Hatchback - Versatile and Practical",
      category: "hatchback",
    },
    {
      id: 7,
      image: "/images/corvette.jpg",
      title: "Chevrolet Corvette Sport - Iconic American Muscle",
      category: "sport",
    },
    {
      id: 8,
      image: "/images/lamborghini.jpg",
      title: "Lamborghini Sport - Exotic and Thrilling",
      category: "sport",
    },
    {
      id: 9,
      image: "/images/rollsRoyce.jpg",
      title: "Rolls-Royce Luxury - Timeless Elegance",
      category: "luxury",
    },
    {
      id: 10,
      image: "/images/bentley.jpg",
      title: "Bentley Luxury - Opulence Redefined",
      category: "luxury",
    },
  ];

  const btn = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Suv", value: "suv" },
    { id: 3, name: "Coupe", value: "coupe" },
    { id: 4, name: "Hatchback", value: "hatchback" },
    { id: 5, name: "Sport", value: "sport" },
    { id: 7, name: "Luxury", value: "luxury" },
  ];
  return (
    <section className="my-16">
      <div className="max-w-[1170px] px-[15px] mx-auto py-5 text-white">
        <h1 className="text-center font-bold text-5xl sm:mt-16 mt-10 sm:mb-32 mb-16">
          <span className="text-blue-500">Special </span>
          <span className="text-orange-500">Offers</span>{" "}
        </h1>
        <div className="sm:mb-10 mb-6">
          <label
            htmlFor="carCategoryDropdown"
            className="text-blue-500 font-bold sm:text-xl m-5"
          >
            Select a category:
          </label>
          <select
            id="carCategoryDropdown"
            onChange={handleClick}
            className="ml-5 px-4 py-2 font-bold border-solid border-2 border-blue-500 text-blue-500 bg-blue-200"
          >
            {btn.map((item, id) => {
              const { name, value } = item;
              return (
                <option
                  className="font-semibold   border-blue-500"
                  value={value}
                  key={id}
                >
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2">
          {filterImages &&
            filterImages.map((item, id) => {
              const { image, title } = item;
              return (
                <div className="mx-5 my-10 " key={id}>
                  <img
                    className="w-full h-full object-cover object-center  "
                    src={image}
                    alt="demo"
                  />
                  <h1 className=" text-xs text-white my-4">{title}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Filter;
