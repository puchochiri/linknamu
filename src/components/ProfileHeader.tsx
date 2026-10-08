import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-16px_rgba(140,80,40,0.45)] ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/15 dark:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={120}
          height={120}
          priority
          className="h-28 w-28 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
