export default function Footer() {
    return (
        <div className=" bg-[#F0F0F5] pb-10">
        <div className="footerPart flex text-[#02060C99] font-[350] mt-12 py-12 pl-[216px] pr-[288px] gap-[5%]">
            <div className="mr-[10%] mb-4">
                <img className="mb-1" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"></img>
                <div>&copy; 2025 Swiggy Limited</div>
            </div>
            <ul className="max-w-[122px] flex flex-col gap-2">
                <div className="text-black font-[400] text-[18px]">Company</div>
                <div className="cursor-pointer">About Us</div>
                <div className="cursor-pointer">Swiggy Corparate</div>
                <div className="cursor-pointer">Careers</div>
                <div className="cursor-pointer">Team</div>
                <div className="cursor-pointer">Swiggy One</div>
                <div className="cursor-pointer">Swiggy Instamart</div>
                <div className="cursor-pointer">Swiggy Dineout</div>
                <div className="cursor-pointer">Swiggy Genie</div>
                <div className="cursor-pointer">Minis</div>
                <div className="cursor-pointer">Pyng</div>
            </ul>
            <div className="flex flex-col justify-between">
                <ul className="max-w-[122px] flex flex-col gap-2">
                    <div className="text-black font-[400] text-[18px]">Contact Us</div>
                    <div className="cursor-pointer">Help & Support</div>
                    <div className="cursor-pointer">Partner With Us</div>
                    <div className="cursor-pointer">Ride With Us</div>
                </ul>
                <ul className="max-w-[122px] flex flex-col gap-2">
                    <div className="text-black font-[400] text-[18px]">Legal</div>
                    <div className="cursor-pointer">Terms & Conditions</div>
                    <div className="cursor-pointer">Cookie Policy</div>
                    <div className="cursor-pointer">Privacy Policy</div>
                </ul>
            </div>
            <ul className="max-w-[122px] flex flex-col gap-2">
                <div className="text-black font-[400] text-[18px]">Available in:</div>
                <div className="cursor-pointer">Bangalore</div>
                <div className="cursor-pointer">Gurgaon</div>
                <div className="cursor-pointer">Hyderabad</div>
                <div className="cursor-pointer">Delhi</div>
                <div className="cursor-pointer">Mumbai</div>
                <div className="cursor-pointer">Pune</div>
            </ul>
            <ul className="max-w-[122px] flex flex-col gap-2">
                <div className="text-black font-[400] text-[18px]">Life at Swiggy</div>
                <div className="cursor-pointer">Explore with Swiggy</div>
                <div className="cursor-pointer">Swiggy News</div>
                <div className="cursor-pointer">Snackables</div>
            </ul>

        </div>
        <div className="mx-[5%] border-t-[1px] pb-10"></div>
        <div className="flex px-[200px] items-center gap-8 footerBottom">
            <div className="text-[24px] text-[#02060CBF] font-[600] ">For better experience, download the Swiggy app now</div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
        </div>
        </div>
    )
}