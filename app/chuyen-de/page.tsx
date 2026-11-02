import type { Metadata } from "next";
import { TopicPage } from "@/modules/topic";

export const metadata: Metadata = {
  title: "Chuyên đề: Giấy phép môi giới bất động sản",
  description: "Hướng dẫn chi tiết về điều kiện, quy trình và hồ sơ giấy phép môi giới bất động sản",
};

export default function Page() {
  return <TopicPage />;
}
