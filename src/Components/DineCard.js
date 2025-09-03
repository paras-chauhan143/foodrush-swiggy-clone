
export default function DineCard({RestData}){


    return (
        <div className="max-w-sm flex-none">
       <a target="_blank" href={RestData.cta.link}>
        <div className="relative">
          <img
            className="w-80 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          {/* Gradient overlay behind the text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          {/* Text with higher z-index */}
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>


  

        </div>

<div className="flex justify-between pt-2 px-3 font-[200] text-[13px]">
                                    <div>{RestData?.info.cuisines[0]}.{RestData?.info.cuisines[1]}</div>
                                    <div>{RestData?.info.cuisines[0]}.{RestData?.info.cuisines[1]}</div>
                                    <div>{RestData?.info.costForTwo}</div>
                                </div>
                                <div className="flex justify-between px-3 font-[200] text-[13px]">
                                    <div>{RestData?.info.locationInfo.formattedAddress}</div>
                                    <div>{RestData?.info.locationInfo.distanceString}</div>
                                </div>
                                <div className="mx-3 bg-[#F0F0F5] py-[2px] px-[6px] mt-[8px] rounded-[12px] font-[200] text-[13px] flex justify-center max-w-[110px]">Table booking</div>
                                <div className="bg-[#1BA672] p-2 mt-3 mx-3 rounded-[8px] text-white font-bold text-[14px]">Flat 20% off on pre-booking</div>
                                <div className="bg-[#C8F9E5] p-2 mt-3 mx-3 rounded-[8px] text-[#1BA672] font-[200] text-[16px]">Up to 10% off with bank offers</div>



        </a>
      </div>
      
    )

}