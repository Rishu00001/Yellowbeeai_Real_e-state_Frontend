import React, { useState } from 'react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Calendar, 
  Clock, 
  Plus, 
  Minus, 
  Play, 
  Star, 
  Check, 
  Share2, 
  Heart, 
  Printer 
} from 'lucide-react';

export default function PropertyDetails() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [tourDate, setTourDate] = useState('10/07/2026');
  const [tourTime, setTourTime] = useState('11:21 am');
  
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    review: '',
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80'
  ];

  const propertyDetailsList = [
    { label: 'Property ID:', value: 'HZ27' },
    { label: 'Price:', value: '$130,000' },
    { label: 'Property Size:', value: '1500 Sq Ft' },
    { label: 'Bedrooms:', value: '6' },
    { label: 'Bathrooms:', value: '4' },
    { label: 'Garage:', value: '2' },
    { label: 'Garage Size:', value: '200 SqFt' },
    { label: 'Year Built:', value: '2016' },
    { label: 'Property Type:', value: 'Apartment' },
    { label: 'Property Status:', value: 'For Sale' },
  ];

  const amenities = [
    'Air Conditioning', 'Barbeque', 'Dryer', 'Microwave',
    'Refrigerator', 'WiFi', 'Gym', 'Laundry',
    'TV Cable', 'Window Coverings', 'Swimming Pool', 'Sauna'
  ];

  const floorPlans = [
    { title: 'First Floor', size: '1267 Sqft', price: '$130,000', beds: '2', baths: '2' },
    { title: 'Second Floor', size: '942 Sqft', price: '$130,000', beds: '1', baths: '1' }
  ];

  const walkthroughScores = [
    { category: 'All WalkScore', score: '96 / 100' },
    { category: 'TransitScore', score: '85 / 100' },
    { category: 'BikeScore', score: '78 / 100' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Maria Smith',
      date: 'July 25, 2020',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
      gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80']
    },
    {
      id: 2,
      name: 'Leo Williams',
      date: 'July 22, 2020',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.',
    },
  ];

  const similarProperties = [
    {
      id: 1,
      title: 'Luxury Family Villa',
      price: '$130,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      location: 'New York',
      beds: 3,
      baths: 2,
      sqft: 1200
    },
    {
      id: 2,
      title: 'Modern House',
      price: '$150,000',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      location: 'California',
      beds: 4,
      baths: 3,
      sqft: 1800
    },
    {
      id: 3,
      title: 'Gorgeous Apartment',
      price: '$110,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      location: 'Miami',
      beds: 2,
      baths: 2,
      sqft: 950
    },
  ];

  const handleTourSubmit = (e) => {
    e.preventDefault();
    alert(`Tour requested for ${tourDate} at ${tourTime}`);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.email || !reviewForm.review) return;
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
    setReviewForm({ name: '', email: '', rating: 5, review: '' });
  };

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-16">
      
      {/* Top Image Gallery Grid Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 h-[360px] rounded-lg overflow-hidden">
            <img src={images[0]} alt="Main Property" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-1 h-[360px]">
            <div className="h-[172px] rounded-lg overflow-hidden">
              <img src={images[1]} alt="Property View" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="h-[172px] rounded-lg overflow-hidden">
              <img src={images[2]} alt="Property Kitchen" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-1 h-[360px]">
            <div className="h-[172px] rounded-lg overflow-hidden">
              <img src={images[3]} alt="Property Interior" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="h-[172px] rounded-lg overflow-hidden">
              <img src={images[4]} alt="Property Living" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols wide): Property Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title & Price Header Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-[#ff385c] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">For Sale</span>
                  <span className="bg-[#00c087] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Featured</span>
                </div>
                <h1 className="text-2xl font-bold text-[#1e2b40]">Luxury Villa House</h1>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff385c]" />
                  95 South Park Ave, USA
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-[#ff385c]">$130,000</div>
                <div className="text-xs text-gray-400">$850 / Sq Ft</div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Description</h2>
              <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur adipisicing elit. Amet consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliqu id aliquid quo ipsa molestias ex ducimus dolores. Cumque, voluptatem tenetur. Voluptatibus accusamus earum laudantium sed temporibus, atque necessitatibus nisi.
                </p>
              </div>
            </div>

            {/* Property Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-xs">
                {propertyDetailsList.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-700">{item.label}</span>
                    <span className="text-gray-500">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-600">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-[#00c087] flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Floor Plans</h2>
              <div className="space-y-6">
                {floorPlans.map((plan, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-wrap items-center justify-between mb-4 text-xs font-bold text-[#1e2b40]">
                      <span>{plan.title}</span>
                      <div className="flex items-center space-x-4 text-gray-500 font-normal">
                        <span>Size: {plan.size}</span>
                        <span>Price: {plan.price}</span>
                        <span>Beds: {plan.beds}</span>
                        <span>Baths: {plan.baths}</span>
                      </div>
                    </div>
                    <div className="bg-slate-100 h-48 rounded flex items-center justify-center text-gray-400 text-xs">
                      [Floor Plan Schematic Blueprint]
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Walkscore / Walkaround Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Walkaround</h2>
              <div className="space-y-4 text-xs">
                {walkthroughScores.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700">{item.category}</span>
                    <span className="text-[#ff385c] font-bold">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Video Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Property Video</h2>
              <div className="relative h-72 rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80')`
                }}
              >
                <button className="w-14 h-14 bg-[#ff385c] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </button>
              </div>
            </div>

            {/* Map Location Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Map</h2>
              <div className="relative w-full h-[320px] rounded-lg overflow-hidden bg-slate-100 border border-gray-200">
                <iframe
                  title="Property Location Map"
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">
                {reviews.length} Reviews
              </h2>
              <div className="space-y-6">
                {reviews.map((rev) => (
                  <div key={rev.id} className="flex space-x-4 pb-6 border-b border-gray-100 last:border-b-0">
                    <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-[#1e2b40]">{rev.name}</h4>
                        <span className="text-xs text-gray-400">{rev.date}</span>
                      </div>
                      <div className="flex items-center text-yellow-400 mb-2">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">{rev.text}</p>
                      {rev.gallery && (
                        <div className="flex gap-2">
                          {rev.gallery.map((img, i) => (
                            <img key={i} src={img} alt="review attachment" className="w-20 h-16 rounded object-cover" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Write a Review Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-[#1e2b40] uppercase tracking-wider mb-6">Write a Review</h2>

              {reviewSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 text-xs">
                  Thank you! Your review has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#ff385c]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#ff385c]"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Your Review"
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#ff385c] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#ff385c] hover:bg-[#e02e4d] text-white font-medium px-8 py-3 rounded-md transition shadow-sm"
                >
                  Submit Review
                </button>
              </form>
            </div>

          </div>

          {/* Right Sidebar Column (1 Col wide) */}
          <div className="space-y-8">
            
            {/* Schedule a Tour Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff385c]" />
                Schedule a Tour
              </h3>

              <form onSubmit={handleTourSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded text-center text-gray-600 focus:outline-none focus:border-[#ff385c]"
                  />
                  <input 
                    type="text" 
                    value={tourTime}
                    onChange={(e) => setTourTime(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded text-center text-gray-600 focus:outline-none focus:border-[#ff385c]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-gray-400 block mb-1">Adult</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded px-2 py-1.5">
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="text-gray-400 hover:text-[#ff385c]">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-semibold text-[#1e2b40]">{adults}</span>
                      <button type="button" onClick={() => setAdults(adults + 1)} className="text-gray-400 hover:text-[#ff385c]">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 block mb-1">Children</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded px-2 py-1.5">
                      <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="text-gray-400 hover:text-[#ff385c]">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-semibold text-[#1e2b40]">{children}</span>
                      <button type="button" onClick={() => setChildren(children + 1)} className="text-gray-400 hover:text-[#ff385c]">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#ff385c] hover:bg-[#e02e4d] text-white font-medium py-3 rounded text-xs tracking-wider uppercase transition shadow-sm mt-2"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Agent Contact Card Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" 
                  alt="Agent" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#1e2b40]">Carls Jhons</h4>
                  <p className="text-[11px] text-gray-400">Agent / Property Manager</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-gray-600 mb-4">
                <p>📞 (234) 0200 17813</p>
                <p>✉️ info@agent.com</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to agent!'); }} className="space-y-3 text-xs">
                <input type="text" placeholder="Name" required className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#ff385c]" />
                <input type="email" placeholder="Email" required className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#ff385c]" />
                <textarea rows="3" placeholder="Message" required className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#ff385c] resize-none"></textarea>
                <button type="submit" className="w-full bg-[#ff385c] hover:bg-[#e02e4d] text-white font-medium py-2.5 rounded uppercase tracking-wider transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Recent Properties Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Recent Properties</h3>
              <div className="space-y-4">
                {similarProperties.map((prop) => (
                  <div key={prop.id} className="flex items-center space-x-3 group cursor-pointer">
                    <img src={prop.image} alt={prop.title} className="w-16 h-16 rounded object-cover flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1e2b40] group-hover:text-[#ff385c] transition">{prop.title}</h4>
                      <p className="text-xs font-semibold text-[#ff385c] mt-1">{prop.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}