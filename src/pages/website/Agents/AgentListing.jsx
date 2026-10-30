import React, { useState } from 'react';
import { 
  Phone, 
  Smartphone, 
  Printer, 
  Mail, 
  Building, 
  Grid, 
  List, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Clock,
  Plus,
  Minus
} from 'lucide-react';

export default function Agents() {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Alphabet');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [tourDate, setTourDate] = useState('10/07/2026');
  const [tourTime, setTourTime] = useState('11:21 am');

  const totalPages = 5;

  const agents = [
    {
      id: 1,
      name: 'Carls Jhons',
      listings: '5 Listings',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 2,
      name: 'Arling Tracy',
      listings: '8 Listings',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 3,
      name: 'Mark Web',
      listings: '3 Listings',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 4,
      name: 'Katy Grace',
      listings: '6 Listings',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 5,
      name: 'Ichiro Lee',
      listings: '4 Listings',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      office: '(123) 0200 17823',
      mobile: '(657) 9854 12093',
      fax: '809 123 0953',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 6,
      name: 'Alex Mathew',
      listings: '2 Listings',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 7,
      name: 'Chris Melo',
      listings: '9 Listings',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
    {
      id: 8,
      name: 'Nina Thomas',
      listings: '7 Listings',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      office: '(234) 0200 17813',
      mobile: '(657) 9854 12091',
      fax: '809 123 0951',
      email: 'info@agent.com',
      company: 'Company Name',
    },
  ];

  const recentProperties = [
    {
      id: 1,
      title: 'Family Home',
      price: '$230,000',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      title: 'Family Home',
      price: '$230,000',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      title: 'Family Home',
      price: '$230,000',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    alert(`Tour scheduled for ${tourDate} at ${tourTime} (${adults} Adults, ${children} Children)`);
  };

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 mb-1">
            <a href="/" className="hover:text-[#ff385c]">Home</a> / <span className="text-gray-600">Listings</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1e2b40]">All Agents</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Filter & Sorting Bar */}
            <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-xs text-gray-500">
              <div>
                <span>8 Search results</span>
              </div>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <div className="flex items-center space-x-1">
                  <span>SORT BY:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-medium text-[#1e2b40] focus:outline-none cursor-pointer"
                  >
                    <option value="Alphabet">Alphabet</option>
                    <option value="Listings">Listings Count</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>

                <div className="flex items-center space-x-1 border-l border-gray-200 pl-4">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition ${viewMode === 'grid' ? 'bg-[#ff385c] text-white' : 'text-gray-400 hover:text-gray-700'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded transition ${viewMode === 'list' ? 'bg-[#ff385c] text-white' : 'text-gray-400 hover:text-gray-700'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Agent Grid / List View */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-6' : 'space-y-6'}>
              {agents.map((agent) => (
                <div 
                  key={agent.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={agent.image} 
                      alt={agent.name} 
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#ff385c] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                      {agent.listings}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#1e2b40] mb-3 hover:text-[#ff385c] cursor-pointer transition">
                      {agent.name}
                    </h3>

                    <div className="space-y-1.5 text-xs text-gray-500 mb-5">
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>Office: {agent.office}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-gray-400" />
                        <span>Mobile: {agent.mobile}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Printer className="w-3.5 h-3.5 text-gray-400" />
                        <span>Fax: {agent.fax}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <span>Email: {agent.email}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                      <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                        <Building className="w-3.5 h-3.5" />
                        {agent.company}
                      </span>
                      <a href={`/agents/${agent.id}`} className="text-[#ff385c] font-semibold hover:underline">
                        View My Listings
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8 space-x-2">
              <button 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-md text-sm font-medium transition ${
                      currentPage === pageNum
                        ? 'bg-[#ff385c] text-white shadow-sm'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition"
              >
                Next
              </button>
            </div>

          </div>

          {/* Right Sidebar Widget Column */}
          <div className="space-y-8">
            
            {/* Schedule a Tour Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ff385c]" />
                Schedule a Tour
              </h3>

              <form onSubmit={handleScheduleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input 
                      type="text" 
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded text-center text-gray-600 focus:outline-none focus:border-[#ff385c]"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      value={tourTime}
                      onChange={(e) => setTourTime(e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded text-center text-gray-600 focus:outline-none focus:border-[#ff385c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-gray-400 block mb-1">Adult</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded px-2 py-1.5">
                      <button 
                        type="button" 
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="text-gray-400 hover:text-[#ff385c]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-semibold text-[#1e2b40]">{adults}</span>
                      <button 
                        type="button" 
                        onClick={() => setAdults(adults + 1)}
                        className="text-gray-400 hover:text-[#ff385c]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 block mb-1">Children</label>
                    <div className="flex items-center justify-between border border-gray-200 rounded px-2 py-1.5">
                      <button 
                        type="button" 
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="text-gray-400 hover:text-[#ff385c]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-semibold text-[#1e2b40]">{children}</span>
                      <button 
                        type="button" 
                        onClick={() => setChildren(children + 1)}
                        className="text-gray-400 hover:text-[#ff385c]"
                      >
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

            {/* Recent Properties Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">
                Recent Properties
              </h3>
              <div className="space-y-4">
                {recentProperties.map((prop) => (
                  <div key={prop.id} className="flex items-center space-x-3 group cursor-pointer">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-16 h-16 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1e2b40] group-hover:text-[#ff385c] transition">
                        {prop.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#ff385c] mt-1">{prop.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Properties Widget Carousel Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider">
                  Feature Properties
                </h3>
                <div className="flex items-center space-x-1">
                  <button className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative rounded overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                  alt="Featured Property" 
                  className="w-full h-44 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#00c087] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  $130,000
                </span>
                <span className="absolute top-3 right-3 bg-[#ff385c] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  For Rent
                </span>
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow-md">
                  New York
                </div>
              </div>
            </div>

            {/* Specials of the Day Banner Widget */}
            <div 
              className="rounded-lg p-6 text-center text-white bg-cover bg-center min-h-[260px] flex flex-col justify-center items-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 192, 135, 0.85), rgba(0, 192, 135, 0.85)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80')`
              }}
            >
              <h4 className="text-xs uppercase tracking-widest text-emerald-100 font-semibold mb-2">Specials of the day</h4>
              <div className="text-2xl font-black mb-1">$150<span className="text-xs font-normal">/mo</span></div>
              <h3 className="text-lg font-extrabold leading-tight mb-4">Find Your<br />Dream Home?</h3>
              <a 
                href="tel:+000000000" 
                className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full text-xs shadow hover:bg-yellow-300 transition flex items-center gap-1"
              >
                📞 +00 0000 000
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}