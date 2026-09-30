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
      className="block w-full rounded-xl border-2 border-stone-900 bg-white px-5 py-4 text-center font-medium text-stone-900 transition hover:-translate-y-0.5 hover:bg-emerald-50 active:translate-y-0 dark:border-stone-200 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
    >
      {title}
    </a>
  );
}
