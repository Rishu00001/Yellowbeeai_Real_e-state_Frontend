
import React, { useRef, useState } from "react";
import { UploadCloud, X, ImagePlus } from "lucide-react";

const featuresList = [
  "Air Conditioning",
  "Swimming Pool",
  "Central Heating",
  "Laundry Room",
  "Gym",
  "Alarm",
  "Window Covering",
  "Refrigerator",
  "TV Cable & WiFi",
  "Microwave",
];

const inputClass =
  "w-full h-[43px] px-3 border border-gray-200 rounded-sm text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition";

const labelClass = "block text-[13px] font-medium text-gray-600 mb-2";

const Section = ({ title, children }) => (
  <section className="bg-white p-5 md:p-6 mb-5 shadow-sm">
    <h3 className="text-[15px] font-semibold text-rose-500 pb-4 border-b border-gray-200 mb-6">
      {title}
    </h3>
    {children}
  </section>
);

const Field = ({ label, children, className = "" }) => (
  <div className={className}>
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);

const AddProperty = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [features, setFeatures] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    type: "",
    rooms: "",
    price: "",
    area: "",
    address: "",
    city: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
    age: "",
    bedrooms: "",
    bathrooms: "",
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);

    const newImages = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

    setImages((prev) => [...prev, ...newImages]);
    e.target.value = "";
  };

  const removeImage = (index) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      ...formData,
      features,
      images: images.map((item) => item.file),
    };

    console.log("Property Data:", propertyData);

    // Connect your API here
  };

  const SelectField = ({ name, placeholder, options }) => (
    <select
      name={name}
      value={formData[name]}
      onChange={handleChange}
      className={`${inputClass} bg-white`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <div className="w-full min-w-0 bg-[#f4f6fa] p-4 md:p-5 lg:p-6">
      <form onSubmit={handleSubmit}>

        {/* Property Description And Price */}
        <Section title="Property Description And Price">
          <div className="space-y-5">
            <Field label="Property Title">
              <input
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your property title"
              />
            </Field>

            <Field label="Property Description">
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-200 rounded-sm text-sm resize-y focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                placeholder="Describe about your property"
              />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="">
                <SelectField
                  name="status"
                  placeholder="Select status"
                  options={["For Sale", "For Rent", "Sold", "Pending"]}
                />
              </Field>

              <Field label="">
                <SelectField
                  name="type"
                  placeholder="Type"
                  options={[
                    "Apartment",
                    "House",
                    "Villa",
                    "Commercial",
                    "Office",
                    "Land",
                ]}
                />
              </Field>

              <Field label="">
                <SelectField
                  name="rooms"
                  placeholder="Rooms"
                  options={["1", "2", "3", "4", "5", "6+"]}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Price">
                <input
                  required
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="USD"
                />
              </Field>

              <Field label="Area">
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Sqft"
                />
              </Field>
            </div>
          </div>
        </Section>

        {/* Property Media */}
        <Section title="Property Media">
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleImageUpload({
                target: {
                  files: e.dataTransfer.files,
                  value: "",
                },
              });
            }}
            className="border-2 border-dashed border-teal-400 bg-teal-50/20 rounded-sm min-h-[170px] flex flex-col items-center justify-center cursor-pointer hover:bg-teal-50 transition p-5"
          >
            <UploadCloud size={42} className="text-teal-500 mb-3" />

            <p className="text-sm font-medium text-teal-600">
              Click Here Or Drop Files To Upload
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Upload property images (PNG, JPG, WEBP)
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleImageUpload}
            />
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">
              {images.map((image, index) => (
                <div key={image.preview} className="relative group">
                  <img
                    src={image.preview}
                    alt={`Property ${index + 1}`}
                    className="w-full h-28 object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1 shadow"
                  >
                    <X size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Property Location */}
        <Section title="Property Location">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Address">
              <input name="address" value={formData.address} onChange={handleChange} className={inputClass} placeholder="Enter Your Address" />
            </Field>

            <Field label="City">
              <input name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Enter Your City" />
            </Field>

            <Field label="State">
              <input name="state" value={formData.state} onChange={handleChange} className={inputClass} placeholder="Enter Your State" />
            </Field>

            <Field label="Country">
              <input name="country" value={formData.country} onChange={handleChange} className={inputClass} placeholder="Enter Your Country" />
            </Field>

            <Field label="Google Maps Latitude">
              <input name="latitude" value={formData.latitude} onChange={handleChange} className={inputClass} placeholder="Google Maps latitude" />
            </Field>

            <Field label="Google Maps Longitude">
              <input name="longitude" value={formData.longitude} onChange={handleChange} className={inputClass} placeholder="Google Maps longitude" />
            </Field>
          </div>
        </Section>

        {/* Extra Information */}
        <Section title="Extra Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              name="age"
              placeholder="Select Age"
              options={["New", "1 Year", "2 Years", "5 Years", "10+ Years"]}
            />

            <SelectField
              name="bedrooms"
              placeholder="Select Rooms"
              options={["1", "2", "3", "4", "5", "6+"]}
            />

            <SelectField
              name="bathrooms"
              placeholder="Select Bathrooms"
              options={["1", "2", "3", "4", "5", "6+"]}
            />
          </div>
        </Section>

        {/* Property Features */}
        <Section title="Property Features">
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {featuresList.map((feature) => (
              <label
                key={feature}
                className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-rose-500"
              >
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="accent-rose-500 w-4 h-4 cursor-pointer"
                />
                {feature}
              </label>
            ))}
          </div>
        </Section>

        {/* Contact Information */}
        <Section title="Contact Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Name">
              <input name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Enter Your Name" />
            </Field>

            <Field label="Username">
              <input name="username" value={formData.username} onChange={handleChange} className={inputClass} placeholder="Enter Your Username" />
            </Field>

            <Field label="Email">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="Enter Your Email" />
            </Field>

            <Field label="Phone">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Enter Your Phone Number" />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-6 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-7 py-3 rounded-sm transition shadow-sm"
          >
            Submit Property
          </button>
        </Section>

      </form>
    </div>
  );
};

export default AddProperty;
