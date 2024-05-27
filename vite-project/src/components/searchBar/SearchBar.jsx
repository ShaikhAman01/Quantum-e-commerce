import { useState } from "react";

// Search Data
const searchData = [
  {
      name: 'Computers & Accessories',
      image: 'https://www.shutterstock.com/image-photo/new-york-usa-november-1-600nw-2068476569.jpg'
  },
  {
      name: 'Mobile Phones & Accessories',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJmcwQ4rbBdhG_oAp9Qzjw0E7yP1uXqGN4BA61yCvCg&s'
  },
  {
      name: 'Audio & Headphones',
      image: 'https://i.gadgets360cdn.com/products/headphones-and-headsets/large/boat-rockerz-450-wireless-headset-832X558-1598517507.jpg'
  },
  {
      name: 'Gaming',
      image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697016680/Croma%20Assets/Gaming/Gaming%20Consoles/Images/267452_0_eeziko.png'
  },
  {
      name: 'Smart Home Devices',
      image: 'https://w7.pngwing.com/pngs/434/525/png-transparent-amazon-echo-google-home-mini-google-assistant-google-angle-furniture-business-thumbnail.png'
  }
]

const SearchBar = () => {
   // Search State 
   const [search, setSearch] = useState("");

   // Filter Search Data
   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8)
  return (
    <div className="">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black border border-black'
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-10" src={item.image} alt="" />
                                    {item.name}
                                </div>
                            </div> 
                        )
                    })}
                </>
                :

                <>
                    <div className="flex justify-center">
                        <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                </>}
        </div>
        }
    </div>
</div>
  );
}

export default SearchBar;