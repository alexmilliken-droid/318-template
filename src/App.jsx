import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./components/Header";

// Images (Assuming paths remain the same)
import imgRectangle466 from "../public/pexels-brett-sayles-3633711.jpg";
import handsRaised from '../public/pexels-shelaghmurphy-1666816.jpg'
import kidsAbout from '../public/pexels-kseniachernaya-8535594.jpg'
import Resources from '../public/pexels-israwmx-28688219.jpg'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    { img: 'churchImages/churchInside.webp', text: "Seeing and Savoring Jesus Christ" },
    { img: 'churchImages/churchOutside.webp', text: "Serving one another in love" },
    { img: 'churchImages/sign.webp', text: "Sharing His gospel with the world" }
  ];

  const cards = [
    {
      title: "About",
      items: ["Who We Are", "What We Believe", "Our Story", "Leadership"],
      text: 'Learn more about 318 Bible Church and our heart for the community.',
      img: 'churchImages/sign.webp',
      path: '/about'
    },
    {
      title: "What To Expect",
      items: ["Sunday Service", "Sunday Meal"],
      text: 'Whether you’re a first-time guest or a long-time member, find everything about Sundays here.',
      img: 'churchImages/churchInside.webp',
      path: '/expect'
    },
    {
      title: "Kids",
      items: ["Church for Kids", "How We Serve"],
      text: 'Learn how we love and serve your kids every Sunday. Jesus loves the children and so do we.',
      img: 'churchImages/Kids.webp',
      path: '/about'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const CardComponent = ({ card }) => (
    <div className="flex flex-col group h-full">
      <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1 min-h-[420px] transition-all duration-500 hover:shadow-2xl cursor-pointer" onClick={() => navigate(card.path)}>
        <img
          src={card.img}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
          <h3 className="text-2xl font-bold mb-1 transform transition-transform duration-300 group-hover:-translate-y-2">
            {card.title}
          </h3>
          <div className="w-10 h-1 bg-[#99badd] mb-4 rounded-full" />
          <ul className="space-y-1 mb-2">
            {card.items.map((i) => (
              <li key={i} className="text-sm font-light opacity-80">{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-5 px-2 flex flex-col flex-grow">
        <p className="text-gray-600 leading-relaxed text-sm flex-grow">
          {card.text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#7bb0e0] selection:text-white">
      <Header />

      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
  
  {/* Move overflow-hidden here to clip the images/zoom only */}
  <div className="absolute inset-0 overflow-hidden">
    {heroSlides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img 
          src={slide.img} 
          alt="" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>
    ))}
  </div>

  <div className="relative z-10 text-center text-white px-4 max-w-5xl">
    <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-90 font-medium">Welcome to 318 Bible Church</p>
    <div className="h-24 md:h-32 flex items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
        {heroSlides[currentSlide].text}
      </h1>
    </div>
    
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <button onClick={() => navigate('/expect')} className="bg-[#99badd] px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#99badd] transition-all duration-300 shadow-lg">
        What To Expect
      </button>
      <button onClick={() => document.getElementById('memory-verse')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
        Memory Verse
      </button>
    </div>
  </div>

  {/* Floating Info Box - Increased z-index and ensured parent is relative */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-full max-w-4xl px-4">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
      <div className="flex-1 p-6 text-center border-b md:border-b-0 md:border-r border-gray-100">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Service</span>
        <p className="text-lg font-bold text-gray-800">Sunday Morning • 10:30 AM</p>
      </div>
      <div className="flex-1 p-6 text-center bg-slate-50">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Fellowship</span>
        <p className="text-lg font-bold text-gray-800">Sunday Meal • 12:00 PM</p>
      </div>
    </div>
  </div>
</section>

{/* CARDS SECTION */}
{/* Added a bit more top padding (pt-32 instead of pt-48) to balance the gap now that the box is visible */}
<section className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cards.map((card, index) => (
      <CardComponent key={index} card={card} />
    ))}
  </div>
</section>


      {/* MEMORY VERSE */}
      <section id="memory-verse" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7bb0e0] to-transparent" />
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[#7bb0e0] font-bold tracking-widest uppercase text-sm mb-6">Verse of the Month</h2>
          <blockquote className="text-2xl md:text-4xl font-serif text-gray-800 leading-relaxed">
            "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God." - 1 Peter 3:18
          </blockquote>
          <div className="mt-8 w-12 h-1 bg-gray-200 mx-auto" />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#1a1a1a] py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in touch.</h2>
          </div>
          <form className="space-y-4">
            <input 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#7bb0e0] transition-colors" 
              placeholder="Name" 
            />
            <input 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#7bb0e0] transition-colors" 
              placeholder="Email Address" 
            />
            <textarea 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-lg h-32 focus:outline-none focus:border-[#7bb0e0] transition-colors" 
              placeholder="Your Message" 
            />
            <button className="w-full bg-[#7bb0e0] py-4 rounded-lg font-bold hover:bg-[#5a8dbd] transition-all shadow-lg shadow-blue-500/10">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}