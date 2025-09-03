import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import FoodDelivery from "./foodDelivery"
import GroceryDelivery from "./groceryDelivery"
import Footer from "./footer"


const appBanner = new URL("../assets/appBanner.png", import.meta.url).href;

export default function Home(){


    return (
        <>
         <Header></Header>
         <FoodOption></FoodOption>
         <GroceryOption></GroceryOption>
         <DineOption></DineOption>
   <img src={appBanner} className="w-[100vw] object-cover mt-20"></img>
            <div className="flex justify-center"><FoodDelivery /></div>
            <div className="flex justify-center"><GroceryDelivery /></div>
            <Footer/>

         
        </>
    )
}