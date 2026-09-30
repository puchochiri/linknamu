import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-40 w-40 rounded-full border-2 border-emerald-600 object-cover"
      />
      <h1 className="mt-5 text-xl font-bold text-stone-900 dark:text-stone-100">
        {name}
      </h1>
      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{bio}</p>
    </header>
  );
}
