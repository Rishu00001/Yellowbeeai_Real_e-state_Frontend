import { useState } from "react";
import {
  Building2,
  Star,
  MessageCircle,
  Heart,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

const stats = [
  {
    title: "Published Property",
    value: "345",
    icon: Building2,
    color: "bg-[#1abc9c]",
  },
  {
    title: "Total Reviews",
    value: "116",
    icon: Star,
    color: "bg-[#ff9800]",
  },
  {
    title: "Messages",
    value: "223",
    icon: MessageCircle,
    color: "bg-[#64a9e8]",
  },
  {
    title: "Times Bookmarked",
    value: "432",
    icon: Heart,
    color: "bg-[#f32655]",
  },
];

const initialListings = [
  {
    id: 1,
    name: "Luxury Restaurant",
    date: "23 Jan 2020",
    rating: "5.0",
    active: true,
  },
  {
    id: 2,
    name: "Gym in Town",
    date: "11 Feb 2020",
    rating: "4.5",
    active: true,
  },
  {
    id: 3,
    name: "Cafe in Boston",
    date: "09 Jan 2020",
    rating: "5.0",
    active: false,
  },
  {
    id: 4,
    name: "Car Dealer in New York",
    date: "24 Feb 2018",
    rating: "4.5",
    active: true,
  },
];

const initialMessages = [
  {
    id: 1,
    name: "Mary Smith",
    time: "22 Minutes ago",
    avatar: "https://i.pravatar.cc/100?img=47",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    name: "Karl Tyron",
    time: "23 Minutes ago",
    avatar: "https://i.pravatar.cc/100?img=12",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    name: "Lisa Willis",
    time: "53 Minutes ago",
    avatar: "https://i.pravatar.cc/100?img=44",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

const initialReviews = [
  {
    id: 1,
    property: "Family House",
    name: "Mary Smith",
    time: "10 hours ago",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 2,
    property: "Bay Apartment",
    name: "Karl Tyron",
    time: "22 hours ago",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    property: "Family House Villa",
    name: "Lisa Willis",
    time: "51 hours ago",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
];

function Panel({ title, children, className = "" }) {
  return (
    <section
      className={`overflow-hidden rounded-sm border border-[#e8edf2] bg-white shadow-[0_2px_7px_rgba(25,43,69,0.08)] ${className}`}
    >
      <div className="border-b border-[#edf0f4] px-5 py-4">
        <h2 className="text-sm font-semibold text-[#344054]">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function StatCards() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      {stats.map(({ title, value, icon: Icon, color }) => (
        <div
          key={title}
          className={`flex min-h-[88px] items-center justify-between ${color} px-5 py-4 text-white`}
        >
          <div>
            <p className="text-xs font-medium text-white/90">
              {title}
            </p>

            <p className="mt-1 text-2xl font-semibold">
              {value}
            </p>
          </div>

          <Icon
            size={29}
            strokeWidth={1.7}
            className="text-white/90"
          />
        </div>
      ))}
    </div>
  );
}

function ListingsTable() {
  const [listings, setListings] = useState(initialListings);

  function toggleStatus(id) {
    setListings((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : item
      )
    );
  }

  return (
    <Panel title="Listing" className="mb-5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-white text-[#697586]">
              <th className="px-5 py-3 font-medium">
                Listing Name
              </th>

              <th className="px-4 py-3 font-medium">
                Date
              </th>

              <th className="px-4 py-3 font-medium">
                Rating
              </th>

              <th className="px-4 py-3 font-medium">
                Status
              </th>

              <th className="px-4 py-3 text-center font-medium">
                Edit
              </th>
            </tr>
          </thead>

          <tbody>
            {listings.map((item, index) => (
              <tr
                key={item.id}
                className={
                  index % 2 === 0
                    ? "bg-[#f1f3f5]"
                    : "bg-white"
                }
              >
                <td className="px-5 py-3 text-[#344054]">
                  {item.name}
                </td>

                <td className="px-4 py-3 text-[#667085]">
                  {item.date}
                </td>

                <td className="px-4 py-3 text-[#344054]">
                  <span className="inline-flex items-center gap-1">
                    {item.rating}

                    <Star
                      size={11}
                      className="fill-[#ffb020] text-[#ffb020]"
                    />
                  </span>
                </td>

                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => toggleStatus(item.id)}
                    className={`rounded px-2 py-1 text-[10px] font-medium ${
                      item.active
                        ? "bg-[#d8f5e8] text-[#178553]"
                        : "bg-[#fee4e2] text-[#c43226]"
                    }`}
                  >
                    {item.active ? "Active" : "Non-Active"}
                  </button>
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    type="button"
                    aria-label={`Edit ${item.name}`}
                    onClick={() =>
                      window.alert(
                        `Connect edit form for ${item.name}`
                      )
                    }
                    className="text-[#ff385c] hover:text-[#c91d3d]"
                  >
                    <Pencil size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function ActivityList({ title, items, isReview = false }) {
  const [entries, setEntries] = useState(items);

  function removeEntry(id) {
    setEntries((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  return (
    <Panel title={title} className="mb-5">
      <div className="divide-y divide-[#edf0f4] px-5">
        {entries.map((item) => (
          <article
            key={item.id}
            className="flex gap-3 py-4"
          >
            <img
              src={item.avatar}
              alt=""
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {isReview && (
                  <span className="text-xs font-semibold text-[#344054]">
                    {item.property}
                  </span>
                )}

                <span className="text-xs font-semibold text-[#344054]">
                  {item.name}
                </span>
              </div>

              <p className="mt-1 text-[10px] text-[#98a2b3]">
                {item.time}
              </p>

              <p className="mt-2 max-w-3xl text-xs leading-5 text-[#667085]">
                {isReview
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
                  : item.message}
              </p>

              {isReview && (
                <div className="mt-2 flex gap-0.5 text-[#ffb020]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={11}
                      className={
                        index < 4 ? "fill-current" : ""
                      }
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              aria-label={`Delete ${item.name}`}
              onClick={() => removeEntry(item.id)}
              className="flex h-7 shrink-0 items-center gap-2 text-[#98a2b3] hover:text-[#e5484d]"
            >
              <Trash2 size={13} />
            </button>
          </article>
        ))}

        {entries.length === 0 && (
          <p className="py-6 text-center text-xs text-[#98a2b3]">
            No items to display.
          </p>
        )}
      </div>
    </Panel>
  );
}

const fieldClass =
  "mt-2 w-full rounded-sm border border-[#dfe4ea] bg-white px-3 py-2.5 text-xs text-[#344054] outline-none transition placeholder:text-[#a0a8b5] focus:border-[#64a9e8]";

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  return (
    <label className="block text-xs font-medium text-[#475467]">
      {label}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </label>
  );
}

function PersonalInformation() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  const [saved, setSaved] = useState(false);

  function update(event) {
    const { name, value } = event.target;

    setSaved(false);

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function submit(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <Panel title="Personal Information" className="mb-5">
      <form onSubmit={submit} className="p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="block text-xs font-medium text-[#475467]">
            First Name

            <input
              name="firstName"
              value={form.firstName}
              onChange={update}
              placeholder="Enter your First name"
              required
              className={fieldClass}
            />
          </label>

          <label className="block text-xs font-medium text-[#475467]">
            Last Name

            <input
              name="lastName"
              value={form.lastName}
              onChange={update}
              placeholder="Enter your Last name"
              required
              className={fieldClass}
            />
          </label>

          <label className="block text-xs font-medium text-[#475467]">
            Email Address

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="Ex example@domain.com"
              required
              className={fieldClass}
            />
          </label>

          <label className="block text-xs font-medium text-[#475467]">
            Phone Number

            <input
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="Ex 1-800-00-00"
              className={fieldClass}
            />
          </label>
        </div>

        <label className="mt-5 block text-xs font-medium text-[#475467]">
          Address

          <span className="relative mt-2 block">
            <MapPin
              size={15}
              className="absolute left-3 top-3 text-[#98a2b3]"
            />

            <input
              name="address"
              value={form.address}
              onChange={update}
              placeholder="Write your address here"
              className={`${fieldClass} pl-9`}
            />
          </span>
        </label>

        <label className="mt-5 block text-xs font-medium text-[#475467]">
          About Yourself

          <textarea
            name="about"
            value={form.about}
            onChange={update}
            rows={4}
            placeholder="Write about yourself"
            className={`${fieldClass} resize-y`}
          />
        </label>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="bg-[#ff385c] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#e52d4f]"
          >
            Save Information
          </button>

          {saved && (
            <span
              className="text-xs text-[#178553]"
              role="status"
            >
              Form saved locally for this session.
            </span>
          )}
        </div>
      </form>
    </Panel>
  );
}

function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();

    if (password !== repeat) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setMessage(
        "Password must contain at least 8 characters."
      );
      return;
    }

    setMessage(
      "Form validated. Connect this form to your password API."
    );
  }

  return (
    <Panel title="Update Password" className="mb-6">
      <form onSubmit={submit} className="p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field
            label="New Password"
            placeholder="Write new password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setMessage("");
            }}
            required
          />

          <Field
            label="Repeat Password"
            placeholder="Write same password again"
            type="password"
            value={repeat}
            onChange={(event) => {
              setRepeat(event.target.value);
              setMessage("");
            }}
            required
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="bg-[#ff385c] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#e52d4f]"
          >
            Submit
          </button>

          {message && (
            <p
              className="text-xs text-[#667085]"
              role="status"
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </Panel>
  );
}

export default function Dashboard() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-[#26364a]">
          Manage Dashboard
        </h1>
      </div>

      <StatCards />

      <ListingsTable />

      <ActivityList
        title="Message"
        items={initialMessages}
      />

      <ActivityList
        title="Review"
        items={initialReviews}
        isReview
      />

      <PersonalInformation />

      <UpdatePassword />
    </div>
  );
}