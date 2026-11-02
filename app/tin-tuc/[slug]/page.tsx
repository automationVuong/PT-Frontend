import type { Metadata } from "next";
import { NewsDetailPage } from "@/modules/news";

export const metadata: Metadata = {
  title: "Chi tiết tin tức",
  description: "Chi tiết bài viết và thông tin bất động sản liên quan",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <NewsDetailPage slug={slug} />;
}
