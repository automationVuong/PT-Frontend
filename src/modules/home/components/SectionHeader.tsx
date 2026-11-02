type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  actionText?: string;
};

export function SectionHeader({
  title,
  subtitle,
  actionText,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>

      {actionText ? (
        <button
          type="button"
          className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          {actionText}
        </button>
      ) : null}
    </div>
  );
}
