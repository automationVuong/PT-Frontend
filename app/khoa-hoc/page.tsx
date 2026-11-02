import type { Metadata } from "next";
import { CoursePage } from "@/modules/course";

export const metadata: Metadata = {
  title: "Khóa học bất động sản",
  description: "Trang khóa học bất động sản với lộ trình thực chiến, tư vấn và hướng dẫn đầu tư",
};

export default function Page() {
  return <CoursePage />;
}
