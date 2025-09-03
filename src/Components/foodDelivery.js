import { useState } from "react"
import foodCities from "../Utils/foodDeliver"

export default function FoodDelivery() {
    const [open,setOpen] = useState(false);
    let citiesList = [];
    let len = 0;
    if(!open) {
        for(const val of foodCities.categories) {
            len++;
            if(len < 20) {
                citiesList.push(val);
            }
            else break;
        }
    }
    else {
        citiesList = foodCities.categories;
    }
    return (
        <div className="mt-[80px] ml-10 max-w-[1000px]">
            <h2 className="font-bold text-[24px] mb-3">Cities with food delivery</h2>
            <div className="flex flex-wrap gap-4 ">
                {
                    citiesList.map((value) => {
                        return <a key={value.link} className="p-4 w-[220px] text-center border-[1.5px] border-[#02060c26] rounded-[12px] cursor-pointer text-[14px] text-[#02060CBF] font-[500]">{value.text}</a>
                    })
                }
                {(open)?
                (
                    <button onClick={()=>{setOpen(false)}} className="p-4 w-[220px] flex justify-center items-center text-center border-[1.5px] border-[#02060c26] rounded-[12px] cursor-pointer text-[14px] text-orange-600 font-semibold">Show Less
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                    </button>
                ):
                (
                    <button onClick={()=>{console.log("called");setOpen(true)}} className="p-4 w-[220px] flex justify-center items-center text-center border-[1.5px] border-[#02060c26] rounded-[12px] cursor-pointer text-[14px] text-orange-600 font-semibold">Show More
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                )}
            </div>
        </div>
    )
}