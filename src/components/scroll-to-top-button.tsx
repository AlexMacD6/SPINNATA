"use client";

interface ScrollToTopButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollToTopButton({
  children,
  className,
}: ScrollToTopButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

