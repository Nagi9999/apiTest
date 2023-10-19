import { useRouter } from "next/router";
import axios from "@/utils/axios";

export default function Details({ data }) {
  const router = useRouter();
  console.log(router.query)

  const selectedItem = data.data.find(item => item.id === parseInt(router.query.id, 10));


  console.log(selectedItem);

  return (
    <section className="sm:px-20 px-5 sm:pt-5 pt-10 sm:pb-10 pb-14 mx-auto 2xl:container text-white overflow-hidden">
      {selectedItem && (
        <div className="bg-blue-300 rounded-lg  shadow-lg p-4 md:p-6">
        <img src={selectedItem.image} alt="Selected Item Image" className="w-full rounded-lg mb-2 md:mb-4" />
        <div className="text-center my-5 space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{selectedItem.title}</h2>
        <p className="text-gray-600 font-semibold text-base sm:text-lg mb-2">{selectedItem.text}</p>
        <p className="text-gray-600 font-semibold text-base sm:text-lg mb-2">CLIENT: {selectedItem.client}</p>
        <p className="text-gray-600 font-semibold  text-base sm:text-lg mb-2">DIRECTOR: {selectedItem.directors}</p>
        <p className="text-gray-600 font-semibold  text-base sm:text-lg mb-2">DP: {selectedItem.cinematographer}</p>
        <p className="text-gray-600  font-semibold text-base sm:text-lg">AGENCY: {selectedItem.agency}</p>
        </div>
        
      </div>
      
      )}
    </section>
  );
}

export async function getServerSideProps({ locale }) {
  try {
    const res = await axios.get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    });

    const data = res.data;

    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: [] } }; // Handle errors gracefully
  }
}
