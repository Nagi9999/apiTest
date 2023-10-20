
import Banner from "@/components/banner";
import Card from "@/components/card";
import axios from "@/utils/axios";

export default function Home({data, data1 }) {
  console.log({data})
  return (
    
<main className="  flex flex-col justify-center  ">  
    <Banner data={data} />
    <Card data={data}  />
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

 let data1;
    await axios
        .get("/settings", {
            headers: {
                "Accept-Language": locale,
            },
        })
        .then((res) => {
            data1 = res.data;
        })
        .catch(console.error);
    return { props: { data ,data1} };
}