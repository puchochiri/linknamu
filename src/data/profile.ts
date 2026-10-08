export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값 — 실제 프로필과 링크로 교체하기
export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/puchochiri" },
    { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/doawishfor" },
    { id: "email", title: "📧 이메일", url: "mailto:doawishfor@naver.com" },
  ],
};
