
import React, { useState } from "react";
import {
  Trash2,
  ChevronLeft,
  ChevronRight,
  Star,
  Pencil,
} from "lucide-react";

const initialProperties = [
  {
    id: 1,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
    date: "08.14.2020",
    views: 163,
    reviews: 6,
    rating: 5,
  },
  {
    id: 2,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
    date: "08.14.2020",
    views: 202,
    reviews: 6,
    rating: 4,
  },
  {
    id: 3,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400",
    date: "08.14.2020",
    views: 412,
    reviews: 6,
    rating: 5,
  },
  {
    id: 4,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
    date: "08.14.2020",
    views: 675,
    reviews: 6,
    rating: 4,
  },
  {
    id: 5,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400",
    date: "08.14.2020",
    views: 325,
    reviews: 6,
    rating: 5,
  },
  {
    id: 6,
    title: "Luxury Villa House",
    address: "Est St, 77 - Central Park South, NYC",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400",
    date: "08.14.2020",
    views: 247,
    reviews: 6,
    rating: 4,
  },
  {
    id: 7,
    title: "Modern Family House",
    address: "Broadway, Manhattan, NYC",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400",
    date: "09.12.2020",
    views: 385,
    reviews: 8,
    rating: 5,
  },
  {
    id: 8,
    title: "Contemporary Villa",
    address: "Park Avenue, New York, NYC",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400",
    date: "10.18.2020",
    views: 512,
    reviews: 9,
    rating: 4,
  },
];

const ITEMS_PER_PAGE = 6;

const FavoriteProperties = ({ onEdit }) => {
  const [properties, setProperties] = useState(initialProperties);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(properties.length / ITEMS_PER_PAGE)
  );

  const currentProperties = properties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this property from favorites?"
    );

    if (!confirmed) return;

    const updatedProperties = properties.filter(
      (property) => property.id !== id
    );

    setProperties(updatedProperties);

    const newTotalPages = Math.max(
      1,
      Math.ceil(updatedProperties.length / ITEMS_PER_PAGE)
    );

    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }
  };

  const handleEdit = (property) => {
    if (onEdit) {
      onEdit(property);
    } else {
      console.log("Edit Property:", property);
    }
  };

  return (
    <div className="w-full min-w-0 bg-[#f4f6fa] p-4 md:p-5 lg:p-6">

      <div className="bg-white p-4 md:p-6 lg:p-7 shadow-[0_3px_15px_rgba(0,0,0,0.10)]">

        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-[minmax(0,1fr)_170px_100px_130px] gap-4 items-center bg-[#f4f5fc] px-4 py-3 text-xs font-medium text-gray-800">
          <div>Top Property</div>
          <div>Date Added</div>
          <div>Views</div>
          <div>Actions</div>
        </div>

        {/* Property List */}
        <div>
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <div
                key={property.id}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_170px_100px_130px] gap-4 lg:gap-4 items-center px-0 lg:px-4 py-5 lg:py-4 border-b border-gray-100 hover:bg-gray-50/70 transition-colors"
              >
                {/* Property Details */}
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-[95px] h-[75px] object-cover rounded-sm shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      {property.title}
                    </h3>

                    <p className="text-xs text-gray-600 mb-2 truncate">
                      {property.address}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-[1px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={14}
                            fill={
                              index < property.rating
                                ? "#fbbf24"
                                : "none"
                            }
                            stroke={
                              index < property.rating
                                ? "#fbbf24"
                                : "#d1d5db"
                            }
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>

                      <span className="text-[11px] text-gray-500">
                        ({property.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Date Added */}
                <div className="flex lg:block justify-between text-xs text-gray-500">
                  <span className="lg:hidden font-medium text-gray-600">
                    Date Added
                  </span>
                  {property.date}
                </div>

                {/* Views */}
                <div className="flex lg:block justify-between text-xs text-gray-500">
                  <span className="lg:hidden font-medium text-gray-600">
                    Views
                  </span>
                  {property.views}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between lg:justify-start lg:gap-6">
                  <span className="lg:hidden text-xs font-medium text-gray-600">
                    Actions
                  </span>

                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => handleEdit(property)}
                      className="text-xs font-medium text-green-600 hover:text-green-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(property.id)}
                      className="text-rose-500 hover:text-rose-700 transition"
                      title="Remove from favorites"
                    >
                      <Trash2 size={16} strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center">
              <Star
                size={35}
                className="mx-auto mb-3 text-gray-300"
              />
              <h3 className="text-sm font-medium text-gray-700">
                No Favorite Properties
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                You haven't added any properties to your favorites yet.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {properties.length > ITEMS_PER_PAGE && (
          <div className="flex flex-wrap items-center gap-2 mt-6">

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => Math.max(1, prev - 1))
              }
              className="flex items-center gap-1 px-4 py-3 bg-rose-500 text-white text-xs rounded-sm hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={14} />
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 text-xs rounded-sm border transition ${
                    currentPage === page
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-white text-rose-500 border-gray-100 hover:bg-rose-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(totalPages, prev + 1)
                )
              }
              className="flex items-center gap-1 px-4 py-3 bg-rose-500 text-white text-xs rounded-sm hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default FavoriteProperties;
