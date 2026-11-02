import type { Metadata } from "next";
import { CourseDetailPage } from "@/modules/course";

export const metadata: Metadata = {
  title: "Chi tiết khóa học",
  description: "Chi tiết khóa học bất động sản và chương trình học tập",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <CourseDetailPage slug={slug} />;
}
