// import { useState, useEffect } from "react";
// import { useParams } from "react-router"





// export default function SearchFood(){
    
//     const {id} = useParams();
    
//     const [food,setFood] = useState("")
//     const [RestData, setRestData] = useState([]);


//     useEffect(()=>{
        
//             async function fetchData() {
               
//                const proxyServer = "https://cors-anywhere.herokuapp.com/"
//                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//                const response = await fetch(proxyServer+swiggyAPI);
//                const data = await response.json();
//                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//                const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//                console.log(filterData);
//                setRestData(filterData);
//             }


           
//             fetchData();
//         },[])




//     return(
//         <div className="w-[80%] mx-auto mt-20">
//             <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
//         </div>
//     )
// }

import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
  const { id } = useParams();

  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        // Swiggy data structure
        const tempData =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        // Filter only cards which have itemCards (actual food items)
        const foodItems = tempData
          .map((card) => card?.card?.card?.itemCards)
          .filter(Boolean) // remove undefined
          .flat() // flatten arrays
          .map((item) => item.card.info); // actual food item info

        setRestData(foodItems);
        setFilteredData(foodItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    }

    fetchData();
  }, [id]);

  // Search logic
  useEffect(() => {
    if (food.trim() === "") {
      setFilteredData(RestData);
    } else {
      const searchResult = RestData.filter((item) =>
        item.name.toLowerCase().includes(food.toLowerCase())
      );
      setFilteredData(searchResult);
    }
  }, [food, RestData]);

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
      {/* Search box */}
      <input
        className="w-full pl-5 py-3 text-lg sm:text-2xl bg-gray-200 rounded-2xl border focus:outline-none"
        placeholder="Search food here..."
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* Search Results */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.length > 0 ? (
          filteredData.map((item,index) => (
            <div
              key={`${item.id}-${index}`} 
              className="p-4 bg-white shadow rounded-xl flex items-center justify-between"
            >
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price ? item.price / 100 : (item.defaultPrice || 0) / 100}
                </p>
              </div>
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No food items found
          </p>
        )}
      </div>
    </div>
  );
}
