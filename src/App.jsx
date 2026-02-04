import { useEffect, useState } from "react";
import imgRectangle466 from "../public/pexels-brett-sayles-3633711.jpg";
import churchAbout from '../public/pexels-danielwells67-35608646.jpg'
import handsRaised from '../public/pexels-shelaghmurphy-1666816.jpg'
import kidsAbout from '../public/pexels-kseniachernaya-8535594.jpg'
import Header from "./components/Header";
import Resources from '../public/pexels-israwmx-28688219.jpg'
export default function App() {
  
  const [phoneScreen, setPhoneScreen] = useState(false)
  const resizeWindow = () => {
    if (window.innerWidth > 639) {
      setPhoneScreen(false)
    } else {
      setPhoneScreen(true)
    }
  }
  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [])

  const cards = [
  {
    title: "About",
    items: ["Who We Are", "What We Believe", "Our Story", "Leadership"],
    text: 'Learn more about 318 Bible Church and why it might not be the place for you',
    img: churchAbout
  },
  {
    title: "What To Expect",
    items: ["Sunday Service", "Sunday Meal"],
    text: 'Whether you’re a first time guest or just forgot! You can learn everything about Sunday here.',
    img: handsRaised
  },
  {
    title: "Kids",
    items: ["Church for Kids", "How We Serve"],
    text: 'Learn how we love and serve your kids every Sunday. Jesus loves the children and so do we.',
    img: kidsAbout
  },
  {
    title: "Resources",
    items: ["Podcast", "Sermons"],
    text: 'Listen to our teaching Pastor every day and gain insights into God’s word!',
    img: Resources
  },
];

const CardComponent = ({ card, maxItems, phoneScreen }) => {
  const missing = maxItems - card.items.length;
  const topFill = Math.floor(missing / 2);
  const bottomFill = Math.ceil(missing / 2);

  return (
    <div key={card.title} className="flex flex-col h-full">



          <div className="relative rounded-lg overflow-hidden shadow-lg flex-1 min-h-[400px] sm:min-h-[400px]">

            <img

              src={card.img}

              alt={card.title}

              className="absolute inset-0 w-full h-full object-cover"

            />

            <div className="absolute inset-0 bg-black/60" />



            <div className="relative z-10 h-full flex flex-col justify-end items-center text-white p-4 sm:p-6 text-center">

              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 absolute ${!phoneScreen ? "bottom-1/3" : "bottom-1/3"}`}>

                {card.title}

              </h3>

            <div className={`w-12 h-px bg-white/40  ${card.items.length < maxItems ? "-mb-2" : ""}`} />



              <ul className="md:text-base">

  {/* TOP FILLERS */}

  {Array.from({ length: topFill }).map((_, i) => (

    <li key={`top-${i}`} className="invisible">

      filler

    </li>

  ))}



  {/* REAL ITEMS */}

  {card.items.map((i) => (

    <li key={i} className={`${card.items.length < maxItems && "pt-2"} text-lg`}>{i}</li>

  ))}



  {/* BOTTOM FILLERS */}

  {Array.from({ length: bottomFill }).map((_, i) => (

    <li key={`bottom-${i}`} className="invisible">

      filler

    </li>

  ))}

</ul>

            </div>

          </div>

        <div>

         {card.text}

        </div>

          <button className="cursor-pointer mt-6 bg-[#7bb0e0] px-4 px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#6a9fcf] md:text-base self-start text-white">

            Learn More

          </button>

        </div>
  );
};

const maxItems = Math.max(...cards.map(c => c.items.length));

  return (
    <div className="min-h-screen md:bg-white font-sans overflow-x-hidden">
      
      <Header />

      {/* HEADER SPACER */}
      <div className="hidden md:block h-20" />

      {/* HERO */}
      <section className="relative text-center">
        {/* HERO IMAGE CONTAINER */}
        <div className="relative h-[90vh] sm:h-[75vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] min-h-[420px]">
          <img
            src={imgRectangle466}
            alt="Worship"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* HERO CONTENT */}
          <div className="relative z-30 h-full flex items-center justify-center px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">
                Seeing and Savoring Jesus Christ
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">
                Serving one another in love
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8">
                Sharing His gospel with the world
              </h2>

              <p className="text-base sm:text-lg mb-6 sm:mb-8">
                Launches March 22nd
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
  <button className="bg-[#99badd] w-1/2 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#7bb0e0] transition">
    What To Expect
  </button>
  <button className="bg-white text-black w-1/2 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:opacity-90">
    Memory Verse
  </button>
</div>
            </div>
          </div>

          {/* SERVICE TIMES — RESPONSIVE HALFWAY POINT */}
          <div className="absolute -bottom-32 xs:-bottom-28 sm:-bottom-24 md:-bottom-16 lg:-bottom-16 xl:-bottom-16 left-1/2 -translate-x-1/2 z-20 w-full px-4">
  <div className="max-w-3xl mx-auto bg-[#7bb0e0] text-white shadow-xl px-4 py-5 sm:px-6 sm:py-6">
    <div className="text-center space-y-2 sm:space-y-3">
      <p className="text-sm sm:text-lg md:text-2xl font-medium">
        Sunday Morning Service
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-bold">
        11:00 AM
      </p>

      <div className="h-px bg-white/30 my-2 sm:hidden" />

      <p className="text-sm sm:text-lg md:text-2xl font-medium">
        Sunday Fellowship Meal
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-bold">
        12:00 PM
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* CARDS */}
      {/* CARDS SECTION */}
<section className="pt-40 sm:pt-48 md:pt-32 px-4 pb-6">
  <div className="max-w-7xl mx-auto space-y-8">
    
    {/* FIRST ROW: Always 3 columns on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
      {cards.slice(0, 3).map((card, index) => (
        <CardComponent key={index} card={card} maxItems={maxItems} phoneScreen={phoneScreen} />
      ))}
    </div>

    {/* SECOND ROW: Centered container for the 4th card (and any future cards) */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
        {/* This empty div acts as a spacer for the 1st column on desktop */}
        <div className="hidden md:block" /> 
        
        {/* The 4th Card sits in the middle column */}
        {cards.slice(3, 4).map((card, index) => (
          <CardComponent key={index + 3} card={card} maxItems={maxItems} phoneScreen={phoneScreen} />
        ))}

        {/* This empty div acts as a spacer for the 3rd column on desktop */}
        <div className="hidden md:block" />
      </div>
    </div>

  </div>
</section>


      {/* MEMORY VERSE */}
      <section className="bg-[#7bb0e0] py-12 sm:py-16 px-4 text-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Memory Verse of the Month
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg">
          For Christ also suffered once for sins, the righteous for the
          unrighteous, to bring you to God.
        </p>
      </section>

      {/* CONTACT */}
      <section className="bg-black py-12 sm:py-16 px-4 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
          Contact Us
        </h2>

        <form className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <input
            placeholder="Name"
            className="w-full p-3 sm:p-4 text-black rounded"
          />
          <input
            placeholder="Subject"
            className="w-full p-3 sm:p-4 text-black rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 sm:p-4 h-32 sm:h-40 text-black rounded"
          />

          <button className="bg-[#148500] px-6 sm:px-8 py-3 rounded text-base sm:text-lg hover:bg-[#116a00]">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
