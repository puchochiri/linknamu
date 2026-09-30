import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-stone-50 px-4 py-12 dark:bg-stone-950 sm:py-16">
      <div className="w-full max-w-md">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <ul className="mt-8 flex flex-col gap-5">
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
