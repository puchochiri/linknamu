import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative flex flex-1 justify-center overflow-hidden px-6 py-16 sm:py-24">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/20"
      />

      <div className="relative w-full max-w-sm">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <ul className="mt-12 flex flex-col gap-4">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard id={link.id} title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
