import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

const Home = () => {
  // --- MOCK DATA MANAGED IN STATE FOR YOUR PROJECT VIEWING ---
  const [popularPGs] = useState([
    {
      id: 1,
      title: "Homely Haven Ladies PG",
      category: "Girls",
      rating: "4.0",
      location: "Koramangala, Bengaluru",
      amenities: ["Wifi", "AC", "Laundry", "Parking"],
      prices: { single: "12,000", double: "9,000", triple: "6,500" }
    },
    {
      id: 2,
      title: "Best PG in HSR Layout",
      category: "Boys",
      rating: "4.0",
      location: "Sector 2, HSR Layout",
      amenities: ["Wifi", "AC", "Laundry", "Parking"],
      prices: { single: "10,000", double: "7,500", triple: "6,500" }
    },
    {
      id: 3,
      title: "Sri Rama Colive Space",
      category: "Co-living",
      rating: "4.2",
      location: "Electronic City, Bengaluru",
      amenities: ["Wifi", "AC", "Gym", "Parking"],
      prices: { single: "11,500", double: "8,000", triple: "5,500" }
    }
  ]);

  const [suggestedPGs] = useState([
    {
      id: 4,
      title: "JJ Living Space for Ladies",
      category: "Girls",
      rating: "4.1",
      location: "Indiranagar, Bengaluru",
      amenities: ["Wifi", "AC", "Laundry", "Security"],
      prices: { single: "14,000", double: "10,500", triple: "7,500" }
    },
    {
      id: 5,
      title: "CM Luxury Boys PG",
      category: "Boys",
      rating: "4.0",
      location: "Whitefield, Bengaluru",
      amenities: ["Wifi", "AC", "Laundry", "Food Included"],
      prices: { single: "13,500", double: "8,500", triple: "6,500" }
    }
  ]);

  return (
    <div className="w-full bg-white min-h-screen text-slate-800 font-sans">
      
      {/* ================= HERO BANNER SECTION (Your Original Premium Design) ================= */}
      <div className='relative w-full h-[580px] overflow-hidden image-container'>
        <img 
          src="https://tse3.mm.bing.net/th/id/OIP.EAz3zhJ4W3ca1LGj2T898AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="Bengaluru Banner" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-slate-950/65"></div>

        <div className='absolute inset-0 flex flex-col items-center justify-center p-6 z-10'>
          <div className='max-w-3xl mb-8 text-center text-white'>
            <h1 className='mb-4 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight'>
              Find Your Perfect PG in <span className="text-teal-400">Bengaluru</span>.
            </h1>
            <p className='text-base md:text-lg text-slate-200 max-w-2xl mx-auto opacity-95'>
              Discover fully furnished, tech-enabled, and affordable co-living options near tech parks, colleges, and metro stations.
            </p>
          </div>
          
          {/* Your Clean Multi-Input Search Engine */}
          <div className='flex flex-col w-full max-w-4xl gap-3 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl md:flex-row justify-center items-center border border-slate-100 mb-8'>
            <input className='w-full p-3 border border-slate-300 text-slate-800 rounded-lg focus:outline-none focus:border-teal-500 md:w-1/3 text-sm' type="text" placeholder='📍 Enter Locality (e.g. HSR, Koramangala)' />
            <input className='w-full p-3 border border-slate-300 text-slate-800 rounded-lg focus:outline-none focus:border-teal-500 md:w-1/4 text-sm' type="text" placeholder='🏠 Sharing Type' />
            <input className='w-full p-3 border border-slate-300 text-slate-800 rounded-lg focus:outline-none focus:border-teal-500 md:w-1/4 text-sm' type="text" placeholder='👥 Gender' />
            <button className='w-full px-8 py-3 text-white bg-orange-500 rounded-lg font-bold hover:bg-orange-600 shadow-md transition-all md:w-auto text-sm tracking-wide shrink-0'>
              Search Now
            </button>
          </div>

          {/* ADDED CONCEPT: The 3 Clean Category Quick-Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-4 text-white text-sm font-semibold'>
            <Link to="/boys-pgs" className='bg-white/10 hover:bg-teal-500 hover:border-teal-500 border border-white/20 px-6 py-2.5 rounded-lg transition-all backdrop-blur-sm' to="/boys-pgs">
              👨‍💻 PGs For Boys
            </Link>
            <Link to="/girls-pgs" className='bg-white/10 hover:bg-teal-500 hover:border-teal-500 border border-white/20 px-6 py-2.5 rounded-lg transition-all backdrop-blur-sm' to="/girls-pgs">
              👩‍💻 PGs For Girls
            </Link>
            <Link to="/co-living" className='bg-white/10 hover:bg-teal-500 hover:border-teal-500 border border-white/20 px-6 py-2.5 rounded-lg transition-all backdrop-blur-sm' to="/co-living">
              ✨ PGs For Co-Living
            </Link>
          </div>
        </div>
      </div>

      {/* ================= 1. CLEAN SERVICES / VALUE PROPS ================= */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-xs">Our Services</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-12">Why Choose Us?</h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-left">
              <div className="text-teal-600 text-2xl mb-3">💸</div>
              <h3 className="font-bold text-slate-800 mb-1 text-base">Zero Brokerage</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Browse listings and connect directly with verified property hosts. No hidden commissions.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-left">
              <div className="text-teal-600 text-2xl mb-3">🛡️</div>
              <h3 className="font-bold text-slate-800 mb-1 text-base">Verified Properties</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Immersive, true-to-life images. Every room is physically audited for security and hygiene setups.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-left">
              <div className="text-teal-600 text-2xl mb-3">🤫</div>
              <h3 className="font-bold text-slate-800 mb-1 text-base">No Unwanted Calls</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Complete control over your personal privacy. Landlords can only connect when you request it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. POPULAR / TRENDING DYNAMIC CARDS SECTION ================= */}
      <div className="bg-slate-50 py-16 px-6 border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end border-b border-slate-200 pb-3 mb-8">
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Top Picks</span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">Popular Accommodations</h2>
            </div>
            <button className="text-teal-600 font-bold text-xs hover:underline">View All</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPGs.map((pg) => (
              <div key={pg.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col relative">
                
                {/* Badges styling matching your theme */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="bg-teal-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">Verified</span>
                  <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">{pg.category} ★ {pg.rating}</span>
                </div>

                <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80" alt={pg.title} className="h-44 w-full object-cover"/>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-slate-900 text-base mb-0.5">{pg.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">📍 {pg.location}</p>
                  
                  {/* Clean amenities subpills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pg.amenities.map((amenity, index) => (
                      <span key={index} className="bg-slate-50 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-100">{amenity}</span>
                    ))}
                  </div>

                  {/* CONCEPT INTEGRATION: The clean 3-Tier Pricing footer box inside the card */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-1 text-center bg-slate-50 -mx-4 -mb-4 p-3 mt-auto">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Single</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.single}</span>
                    </div>
                    <div className="border-l border-r border-slate-200">
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Double</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.double}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Triple</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.triple}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 3. SUGGESTED FOR YOU CARDS SECTION ================= */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end border-b border-slate-200 pb-3 mb-8">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Curated For You</span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">Suggested Properties</h2>
            </div>
            <button className="text-teal-600 font-bold text-xs hover:underline">View All</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {suggestedPGs.map((pg) => (
              <div key={pg.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col relative">
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="bg-teal-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">Verified</span>
                  <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">{pg.category} ★ {pg.rating}</span>
                </div>

                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80" alt={pg.title} className="h-44 w-full object-cover"/>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="font-bold text-slate-900 text-base mb-0.5">{pg.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">📍 {pg.location}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pg.amenities.map((amenity, index) => (
                      <span key={index} className="bg-slate-50 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-100">{amenity}</span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-1 text-center bg-slate-50 -mx-4 -mb-4 p-3 mt-auto">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Single</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.single}</span>
                    </div>
                    <div className="border-l border-r border-slate-200">
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Double</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.double}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase">Triple</span>
                      <span className="text-xs font-extrabold text-slate-900">₹{pg.prices.triple}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home