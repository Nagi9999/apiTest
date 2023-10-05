
import Ads from "./ads"
export default function Collection({data}){
  
    return(
        <section className="sm:px-24 mx-auto 2xl:container">
            <div className="image-container flex  justify-between flex-row  flex-wrap  pt-10">
                        {data.data.map((ad) => (
                            <Ads key={ad.id} title={ad.title} desc={ad.text} path={ad.image} />
                        ))}
                    </div>
        </section>
    )
}