import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 링크별 클릭 수 조회
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find().toArray();
    const counts = new Map(docs.map((doc) => [doc._id, doc.count]));

    return Response.json(
      profile.links.map((link) => ({
        id: link.id,
        title: link.title,
        count: counts.get(link.id) ?? 0,
      })),
    );
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다" }, { status: 503 });
  }
}
