import React, { useState } from 'react';
import { Calendar, User, MessageSquare, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const blogPosts = [
    {
      id: 1,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Lisa Brown',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 2,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 3,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 4,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 5,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 6,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 7,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 8,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
    {
      id: 9,
      title: 'Real Estate News',
      date: 'April 11, 2020',
      comments: 386,
      views: 34,
      likes: 122,
      author: 'Karl Smith',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse, quam dolor sit amet, consectetur.',
    },
  ];

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-16">
      {/* Hero Banner Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 27, 43, 0.75), rgba(18, 27, 43, 0.75)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">Blog</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-300 mt-2">
          <a href="/" className="hover:text-white transition">Home</a>
          <span>/</span>
          <span className="text-[#ff385c]">Blog</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
            >
              <div>
                {/* Blog Image */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1e2b40] mb-2 hover:text-[#ff385c] transition cursor-pointer">
                    {post.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center text-xs text-gray-400 gap-y-1 gap-x-3 mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#ff385c]" />
                      {post.date}
                    </span>
                    <span>/</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#ff385c]" />
                      {post.comments}
                    </span>
                    <span>/</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#ff385c]" />
                      {post.views}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Read More & Author */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <a 
                  href={`/blog/${post.id}`} 
                  className="text-xs font-semibold text-[#ff385c] uppercase tracking-wider hover:underline"
                >
                  Read more...
                </a>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">By {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex items-center justify-center mt-12 space-x-2">
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
    </div>
  );
}