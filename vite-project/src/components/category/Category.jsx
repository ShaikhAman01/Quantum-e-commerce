// category 
const category = [
    {
      name: [
        { text: "Enjoy", style: "text-sm" },
        { text: "With", style: "font-bold text-lg" },
        { text: "Earphones", style: " text-3xl" }
      ],
      image: 'https://example.com/image1.jpg'
    },
    {
        name: [
          { text: "New", style: " text-sm" },
          { text: "Wear", style: "font-bold text-lg" },
          { text: "Gadget", style: "text-3xl" }
        ],
        image: 'https://example.com/image2.jpg'
      },

      {
        name: [
          { text: "trend", style: " text-sm" },
          { text: "devices", style: "font-bold text-lg" },
          { text: "laptop", style: "text-3xl" }
        ],
        image: 'https://example.com/image2.jpg'
      },
    {
      name: [
        { text: "Best", style: " text-sm" },
        { text: "Gaming", style: "font-bold text-lg" },
        { text: "Console", style: "text-3xl" }
      ],
      image: 'https://example.com/image2.jpg'
    },
    {
        name: [
          { text: "Play", style: " text-sm" },
          { text: "Game", style: "font-bold text-lg" },
          { text: "Oculus", style: "text-3xl" }
        ],
        image: 'https://example.com/image2.jpg'
      },
      {
        name: [
          { text: "New", style: "font-bold text-sm" },
          { text: "Amazon", style: "font-bold text-lg" },
          { text: "Speaker", style: "text-3xl" }
        ],
        image: 'https://example.com/image2.jpg'
      },
]

const Category = () => {
    const boxStyle = "bg-gray-400 border-2 rounded-xl p-2 flex flex-col justify-center row-span-2";
    return (
      <div className="mx-6 mt-4 grid grid-cols-4  auto-rows-[150px] gap-4 my-10">
        {category.map((item, index) => (
          <div key={index} className={`${boxStyle} ${index === 2 || index === 3 ? "col-span-2" : "" }`}>
            <img src={item.image} alt={`Category ${index}`} className="" />
            {item.name.map((line, lineIndex) => (
              <p key={lineIndex} className={line.style}>
                {line.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default Category;