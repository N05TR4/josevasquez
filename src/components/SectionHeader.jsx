// Shared section header: mono path eyebrow + display title + amber tick.
const SectionHeader = ({ eyebrow, title }) => (
  <div className="mb-10">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-heading mt-2 flex items-center gap-3">
      <span className="h-6 w-1 rounded-full bg-amber" />
      {title}
    </h2>
  </div>
);

export default SectionHeader;
