import {useDispatch, useSelector } from "react-redux"
import { Link } from "react-router";
import {addItems, IncrementItems, DecrementItems} from "../Stored/CartSlicer"

export default function Checkout(){
     
    const {count,items} = useSelector(state => state.cartslice);
    const dispatch = useDispatch();

    if(count===0) {
        return (
            <div className="flex flex-col gap-1.5 h-[100vh] justify-center items-center px-4 text-center">
                <h1 className="font-bold text-[20px]">Your cart is empty</h1>
                <p className="text-[14px] font-[200]">You can go to home page to view more restaurants</p>
                <Link to="/restaurant">
                    <button className="text-white bg-orange-600 px-4 py-2 mt-6 cursor-pointer rounded-lg">
                        SEE RESTAURANTS NEAR YOU
                    </button>
                </Link>
            </div>
        )
    }
    
    const distance = 6;
    let itemsTotalPrice = 0;
    let deliveryFee = distance*16.15;
    let tax = Number((items.length*4.3).toFixed(2));

    return(
        <div className="bg-gray-100 min-h-[100vh] w-full flex flex-col items-center pt-20 px-4">
            {/* Navigation */}
            <nav className="mb-10 w-full max-w-[600px] text-sm">
                <Link to="/" className="mr-[5px]">Home /</Link>
                <Link to="/restaurant" className="mr-[5px]">Restaurants</Link>
            </nav>

            {/* Cart box */}
            <div className="cart bg-white w-full max-w-[600px] px-4 sm:px-8 py-8 mb-10 rounded-2xl shadow">
                
                {items.map((item)=>{

                    const itemPrice = "price" in item ? (item?.price/100)*item.quantity : (item?.variantsV2?.pricingModels?.[0]?.price/100)*item.quantity;
                    itemsTotalPrice += itemPrice;

                    return (
                        <div key={item.id}>
                            {/* Restaurant + item image */}
                            <Link to={`/city/delhi/${item.restId}`}>
                                <div className="flex py-5 cursor-pointer items-center">
                                    <img 
                                        className="h-16 w-16 sm:h-20 sm:w-20 mr-4 rounded-md object-cover" 
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.imageId}
                                    />
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg sm:text-xl">{item.name}</h1>
                                        <p className="text-sm sm:text-base font-[200]">{item.areaName}</p>
                                    </div>
                                </div>
                            </Link>

                            {/* Cart item quantity */}
                            <div className="cartItems flex justify-between items-center px-3 py-4 my-2 rounded-[15px] bg-gray-50">
                                <div className="text-sm sm:text-base font-medium mr-5">{item.name}</div>
                                <div className="flex items-center">
                                    <div className="flex w-24 h-9 sm:h-10 items-center justify-between text-[#1BA672] font-semibold bg-white rounded-[10px] border border-gray-300">
                                        <button className="px-3 sm:px-4 cursor-pointer" onClick={() => {dispatch(DecrementItems(item))}}>-</button>
                                        <span className="text-sm sm:text-[17px]">{item.quantity}</span>
                                        <button className="px-3 sm:px-4 cursor-pointer" onClick={() => {dispatch(IncrementItems(item))}}>+</button>
                                    </div>
                                    <div className="ml-3 text-sm sm:text-base">&#8377;{itemPrice}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* Bill details */}
                <h1 className="font-semibold my-4 text-base sm:text-lg">Bill Details</h1>
                <div className="flex justify-between font-[200] text-gray-700 text-sm sm:text-base my-1">
                    <div>Item Total</div>
                    <div>&#8377;{itemsTotalPrice}</div>
                </div>
                <div className="flex justify-between font-[200] text-gray-700 text-sm sm:text-base my-1">
                    <div>Delivery Fee | {distance}km</div>
                    <div>&#8377;{deliveryFee.toFixed(2)}</div>
                </div>
                <div className="flex justify-between font-[200] text-gray-700 text-sm sm:text-base my-1">
                    <div>GST & Other Charges</div>
                    <div>&#8377;{tax}</div>
                </div>
                <div className="border-b-2 my-4"></div>
                <div className="flex justify-between font-semibold text-base sm:text-lg">
                    TO PAY
                    <span>&#8377;{(itemsTotalPrice+deliveryFee+tax).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
