import type { Metadata } from "next";
import { NewsPage } from "@/modules/news";

export const metadata: Metadata = {
  title: "Tin tức bất động sản",
  description: "Tổng hợp tin tức, xu hướng thị trường, thông tin dự án và phân tích bất động sản",
};

export default function Page() {
  return <NewsPage />;
}
