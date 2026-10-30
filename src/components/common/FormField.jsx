export default function FormField({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  multiline = false,
}) {
  const className =
    "w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${className} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      )}
    </div>
  );
}