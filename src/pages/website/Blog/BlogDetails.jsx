import React, { useState } from 'react';
import { Search, Calendar, MessageSquare, Eye, Share2, Send } from 'lucide-react';

export default function BlogDetails() {
  const [searchQuery, setSearchQuery] = useState('');
  const [commentForm, setCommentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const categories = [
    { name: 'House', count: 6 },
    { name: 'Garages', count: 12 },
    { name: 'Real Estate', count: 8 },
    { name: 'Real Home', count: 3 },
    { name: 'Bath', count: 5 },
    { name: 'Bed', count: 7 },
  ];

  const popularTags = [
    'Houses', 'Real Home', 'Bath', 'Beds', 'Garages',
    'Family', 'Real Estate', 'Properties', 'Location', 'Price'
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Real Estate News',
      date: 'May 30, 2020',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      title: 'Real Estate News',
      date: 'May 30, 2020',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      title: 'Real Estate News',
      date: 'May 30, 2020',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80'
    },
  ];

  const comments = [
    {
      id: 1,
      name: 'Maria Smith',
      date: 'July 25, 2020',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 2,
      name: 'Maya Taylor',
      date: 'July 25, 2020',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 3,
      name: 'Leo Williams',
      date: 'July 22, 2020',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
  ];

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.firstName || !commentForm.email || !commentForm.message) return;
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 4000);
    setCommentForm({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-16">
      {/* Hero Banner Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 27, 43, 0.75), rgba(18, 27, 43, 0.75)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">Blog Details</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-300 mt-2">
          <a href="/" className="hover:text-white transition">Home</a>
          <span>/</span>
          <span className="text-[#ff385c]">Blog Details</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left / Main Blog Content Area (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-8">
              
              {/* Featured Image */}
              <div className="relative h-[380px] rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Real Estate News" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <h2 className="text-2xl font-bold text-[#1e2b40] mb-3">Real Estate News</h2>
              <div className="flex flex-wrap items-center text-xs text-gray-400 gap-y-1 gap-x-3 mb-6 pb-4 border-b border-gray-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#ff385c]" />
                  April 11, 2020
                </span>
                <span>/</span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-[#ff385c]" />
                  386
                </span>
                <span>/</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#ff385c]" />
                  34
                </span>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, molestiae! Voluptatibus ea accusantium illo, doloribus eum libero quisquam placeat omnis pariatur quis itaque ipsam hic repellat excepturi ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam id aliquid quo ipsa molestias ex ducimus dolores. Cumque, voluptatem tenetur. Voluptatibus accusamus earum laudantium sed temporibus, atque necessitatibus nisi. Dicta consequuntur possimus eaque ea, perspiciatis aspernatur officiis esse.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vel! Velit pariatur ab, earum iste, tempore tempora impedit, doloremque sequi reiciendis ducimus blanditiis iste accusamus autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vel enim reprehenderit debitis inventore ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus architecto excepturi id. Obcaecati quis laboriosam exercitationem illum, recusandae ducimus nisi dicta consequatur porro fuga ea, perspiciatis aut!
                </p>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                <h3 className="text-lg font-bold text-[#1e2b40] mb-6">
                  {comments.length} Comments
                </h3>

                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4 pb-6 border-b border-gray-100 last:border-b-0">
                      <img 
                        src={comment.avatar} 
                        alt={comment.name} 
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-bold text-[#1e2b40]">{comment.name}</h4>
                          <span className="text-xs text-gray-400">{comment.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leave a Comment Form */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                <h3 className="text-lg font-bold text-[#1e2b40] mb-6">Leave a Comment</h3>

                {commentSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 text-sm">
                    Thank you! Your comment has been submitted successfully.
                  </div>
                )}

                <form onSubmit={handleCommentSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={commentForm.firstName}
                        onChange={handleCommentChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={commentForm.lastName}
                        onChange={handleCommentChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={commentForm.email}
                      onChange={handleCommentChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={commentForm.message}
                      onChange={handleCommentChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#ff385c] hover:bg-[#e02e4d] text-white font-medium px-8 py-3 rounded-md transition shadow-sm text-sm"
                    >
                      Submit Comment
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

          {/* Right Sidebar Area (1 Column) */}
          <div className="space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#ff385c] transition"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-[#ff385c] transition">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Category</h3>
              <ul className="space-y-2.5 text-sm">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center justify-between text-gray-600 hover:text-[#ff385c] cursor-pointer transition">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      {cat.name}
                    </span>
                    <span className="text-xs text-gray-400">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="text-xs px-3 py-1.5 bg-gray-50 hover:bg-[#ff385c] hover:text-white text-gray-600 border border-gray-200 rounded-md transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#1e2b40] uppercase tracking-wider mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center space-x-3 group cursor-pointer">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1e2b40] group-hover:text-[#ff385c] transition line-clamp-1">
                        {post.title}
                      </h4>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3 text-[#ff385c]" />
                        {post.date}
                      </span>
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
