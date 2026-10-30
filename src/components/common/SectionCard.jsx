export default function SectionCard({ title, children, className = "" }) {
  return (
    <section
      className={`min-w-0 rounded-md border border-slate-200 bg-white ${className}`}
    >
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-base font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}