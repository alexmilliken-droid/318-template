import { useEffect, useState } from "react";
import imgRectangle466 from "../public/pexels-brett-sayles-3633711.jpg";
import churchAbout from '../public/pexels-danielwells67-35608646.jpg'
import handsRaised from '../public/pexels-shelaghmurphy-1666816.jpg'
import kidsAbout from '../public/pexels-kseniachernaya-8535594.jpg'
import Header from "./components/Header";
import Resources from '../public/pexels-israwmx-28688219.jpg'
import { useNavigate } from "react-router";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phoneScreen, setPhoneScreen] = useState(false);
  const navigate = useNavigate();

  const heroSlides = [
    { img: imgRectangle466, text: "Seeing and Savoring Jesus Christ" },
    { img: churchAbout, text: "Serving one another in love" },
    { img: handsRaised, text: "Sharing His gospel with the world" }
  ];

  // Carousel timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const resizeWindow = () => {
    setPhoneScreen(window.innerWidth <= 639);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

    const cards = [
  {
    title: "About",
    items: ["Who We Are", "What We Believe", "Our Story", "Leadership"],
    text: 'Learn more about 318 Bible Church and why it might not be the place for you',
    img: churchAbout,
    path: '/about'
  },
  {
    title: "What To Expect",
    items: ["Sunday Service", "Sunday Meal"],
    text: 'Whether you’re a first time guest or just forgot! You can learn everything about Sunday here.',
    img: handsRaised,
    path: '/expect'
  },
  {
    title: "Kids",
    items: ["Church for Kids", "How We Serve"],
    text: 'Learn how we love and serve your kids every Sunday. Jesus loves the children and so do we.',
    img: kidsAbout,
    path: '/about'
  },
  {
    title: "Resources",
    items: ["Podcast", "Sermons"],
    text: 'Listen to our teaching Pastor every day and gain insights into God’s word!',
    img: Resources,
    path: '/about'
  },
];
const CardComponent = ({ card, maxItems }) => {
  return (
    <div key={card.title} className="flex flex-col h-full group">
      {/* Container with fixed aspect ratio or min-height */}
      <div className="relative rounded-lg overflow-hidden shadow-lg flex-1 min-h-[400px]">
        <img
          src={card.img}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content - Using Flex instead of Absolute positioning for the text 
            ensures it never overlaps the list items below it */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {card.title}
          </h3>
          <div className="w-12 h-px bg-white/40 mb-4" />

          <ul className="space-y-2">
            {card.items.map((i) => (
              <li key={i} className="text-base md:text-lg opacity-90">{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 text-gray-700 flex-grow">
        {card.text}
      </div>

      <button onClick={() => navigate(card.path)} className="cursor-pointer mt-4 bg-[#7bb0e0] px-6 py-2.5 rounded-full hover:bg-[#6a9fcf] text-white transition-colors self-start">
        Learn More
      </button>
    </div>
  );
};

  return (
    <div className="min-h-screen md:bg-white font-sans overflow-x-hidden">
      <Header />
      <div className="hidden md:block h-20" />

      {/* HERO SECTION */}
      <section className="relative text-center flex flex-col">
  <div className="relative min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden"> 
    
    {/* Background Images with Fade-In / Fade-Out */}
    {heroSlides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img
          src={slide.img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    ))}

    {/* HERO CONTENT */}
    <div className="relative z-20 max-w-4xl text-white w-full">
  {/* Wrapper for the titles to keep height consistent */}
  <div className="grid grid-cols-1 grid-rows-1 mb-4">
    {heroSlides.map((slide, index) => {
      return (
        <h1
          key={index}
          className={`
            col-start-1 row-start-1 
            transition-opacity duration-500 flex flex-col items-center justify-center text-center
            ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          aria-hidden={index !== currentSlide}
        >
            <span className={`
  font-bold whitespace-nowrap px-2
  /* Base size for screens below 400px */
  text-[22.5px] 
  /* Above 400px */
  min-[400px]:text-[24.1px] 
  min-[495px]:text-[28.1px]
  /* 512px and above */
  min-[512px]:text-3xl 
  min-[650px]:text-4xl 
  /* 684px and above */
  min-[684px]:text-4xl 
  /* Your existing desktop size */
  md:text-5xl
`}>
  {slide.text}
</span>
        </h1>
      );
    })}
  </div>

  <p className="text-base sm:text-lg mb-6 sm:mb-8">
    Launches March 22nd
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
    <button className="bg-[#99badd] w-1/2 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#7bb0e0] transition" onClick={() => navigate('/expect')}>
      What To Expect
    </button>
    <button 
  onClick={() => document.getElementById('memory-verse')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-white text-black w-1/2 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:opacity-90 transition-all cursor-pointer"
>
  Memory Verse
</button>
  </div>
</div>
  </div>

  {/* SERVICE TIMES — Always on top (z-50) */}
  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-50 w-full px-4">
    <div className="max-w-3xl mx-auto bg-[#7bb0e0] text-white shadow-2xl px-4 py-5 sm:px-6 sm:py-6">
      <div className="text-center space-y-2 sm:space-y-3">
        <p className="text-sm sm:text-lg md:text-2xl font-medium">Sunday Morning Service</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold">11:00 AM</p>
        <div className="h-px bg-white/30 my-2 sm:hidden" />
        <p className="text-sm sm:text-lg md:text-2xl font-medium">Sunday Fellowship Meal</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold">12:00 PM</p>
      </div>
    </div>
  </div>
</section>

      {/* CARDS SECTION */}
      <section className="pt-40 sm:pt-48 md:pt-32 px-4 pb-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
            {cards.slice(0, 3).map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
              <div className="hidden md:block" /> 
              {cards.slice(3, 4).map((card, index) => (
                <CardComponent key={index + 3} card={card} />
              ))}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#7bb0e0] py-12 sm:py-16 px-4 text-white text-center" id="memory-verse">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Memory Verse of the Month
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg">
          For Christ also suffered once for sins, the righteous for the
          unrighteous, to bring you to God.
        </p>
      </section>

      {/* CONTACT */}
      <section className="bg-black py-12 sm:py-16 px-4 text-white" id="contact">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
          Contact Us
        </h2>

        <form className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <input
            placeholder="Name"
            className="w-full p-3 sm:p-4 text-black rounded bg-white"
          />
          <input
            placeholder="Subject"
            className="w-full p-3 sm:p-4 text-black rounded bg-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 sm:p-4 h-32 sm:h-40 text-black rounded bg-white"
          />

          <button className="bg-[#148500] px-6 sm:px-8 py-3 rounded text-base sm:text-lg hover:bg-[#116a00]">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}