import NavBar from '@/components/nav'
import Banner from '@/components/banner'
import Collection from '@/components/collection'
import Footer from '@/components/footer'
import axios from "@/utils/axios";


export default function Home({ data }) {
  console.log({data})
  return (
    
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Collection data={data}></Collection>
      <Footer></Footer>
    </div>
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
