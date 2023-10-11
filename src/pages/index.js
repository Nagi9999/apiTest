
import Banner from "@/components/banner";
import Card from "@/components/card";
import Footer from "@/components/footer";
import axios from "@/utils/axios";

export default function Home({data }) {
  console.log({data})
  return (
    
<main className="  flex flex-col justify-center  ">  
    <Banner/>
    <Card data={data}  />
    <Footer/>
</main>  
)
}

export async function getServerSideProps({ locale }) {
  let data;
  await axios
    .get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch(console.error);
  return { props: { data } };
}