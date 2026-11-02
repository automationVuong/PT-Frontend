import type { Metadata } from "next";
import { AboutUsPage } from "@/modules/about";

export const metadata: Metadata = {
  title: "Về chúng tôi | Nền tảng Bất động sản",
  description: "Khám phá sứ mệnh, giá trị, phạm vi thị trường và chuyên môn bất động sản của chúng tôi.",
};

export default function Page() {
  return <AboutUsPage />;
}
