"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon 사용
  const trackClick = () => {
    navigator.sendBeacon(`/api/clicks/${encodeURIComponent(id)}`);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-medium text-stone-700 shadow-[0_6px_24px_-12px_rgba(140,80,40,0.35)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_30px_-12px_rgba(140,80,40,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
