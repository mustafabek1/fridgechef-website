/** The fridge mark from the app's sign-in screen (FridgeIcon in icons.tsx). */
export function LogoMark({ className = 'size-8' }: { className?: string }) {
  return (
    <span className={`${className} inline-grid place-items-center rounded-[27%] bg-brand`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="#14100c" strokeWidth="2" strokeLinecap="round" className="size-[62%]">
        <rect x="4" y="2" width="16" height="20" rx="2" strokeLinejoin="round" />
        <path d="M4 10h16M8 6v2M8 14v4" />
      </svg>
    </span>
  );
}
