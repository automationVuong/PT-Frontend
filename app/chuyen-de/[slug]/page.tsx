import type { Metadata } from "next";
import { TopicDetailPage } from "@/modules/topic";

export const metadata: Metadata = {
  title: "Chi tiết chủ đề",
  description: "Học chủ đề thực hành về bất động sản và giao tiếp khách hàng",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <TopicDetailPage slug={slug} />;
}
