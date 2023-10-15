"use client"
import WallPaper from "@/components/wallpaper";
import axios from "@/utils/axios";

const Inventory = ({data}) => {


    return ( 
        <main className="2xl:container mx-auto">
        <WallPaper imageSrc={data.data[0].image} textPosition="left" imagePosition="right">
          <h1 className="sm:text-4xl text-lg sm:font-semibold">{data.data[0].title}</h1>
          <p className="font-semibold sm:text-lg text-[8px]">{data.data[0].text}</p>
        </WallPaper>
        <WallPaper imageSrc={data.data[1].image} textPosition="right" imagePosition="left">
        <h1 className="sm:text-4xl text-lg sm:font-semibold">{data.data[1].title}</h1>
          <p className="font-semibold sm:text-lg text-[8px]">{data.data[1].text}</p>
        </WallPaper>
      </main>
     );
}
 
export default Inventory;


export async function getServerSideProps({ locale }) {
    try {
      const response = await axios.get("/projects", {
        headers: {
          "Accept-Language": locale,
        },
      });
      const data = response.data;
  
      return { props: { data } };
    } catch (error) {
      console.error(error);
      return { props: { data: [] } }; // Provide an empty array as a fallback
    }
  }
  