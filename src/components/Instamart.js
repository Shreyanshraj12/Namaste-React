import { useState } from "react";

const Section = ({title,description})=>{
    const [isVisible, setIsVisible] = useState(false)
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
           {isVisible ? (<button onClick={()=> setIsVisible(false)} className="cursor-pointer underline">Hide</button>) : (<button onClick={()=> setIsVisible(true)} className="cursor-pointer underline">Show</button>)}
           {isVisible && <p>{description}</p>}
        </div>
        
    )
}


const Instamart = ()=>{
    return <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section title={"About Instamart"} description={"Different cultures have their own unique cuisines, shaped by local ingredients and cooking techniques. For example, Indian cuisine is rich in spices and diverse flavors, while Italian food is known for its pasta, cheese, and olive oil. Chinese cuisine emphasizes balance with a mix of sweet, sour, salty, and spicy elements. Fast food, such as burgers and pizza, has gained global popularity due to convenience, but traditional dishes remain important in many societies."}/>
        <Section title={"Team Instamart"} description={"Different cultures have their own unique cuisines, shaped by local ingredients and cooking techniques. For example, Indian cuisine is rich in spices and diverse flavors, while Italian food is known for its pasta, cheese, and olive oil. Chinese cuisine emphasizes balance with a mix of sweet, sour, salty, and spicy elements. Fast food, such as burgers and pizza, has gained global popularity due to convenience, but traditional dishes remain important in many societies."}/>
        <Section title={"Careers Instamart"} description={"Beyond sustenance, food has deep emotional and social connections. Festivals, celebrations, and family gatherings often revolve around special meals, reinforcing bonds and traditions. Street food is an integral part of many cultures, offering affordable and flavorful dishes."}/>
    </div>
}

export default Instamart;