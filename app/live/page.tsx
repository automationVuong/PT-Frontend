import type { Metadata } from "next";
import { LivePage } from "@/modules/live";

export const metadata: Metadata = {
  title: "Live bất động sản",
  description: "Trang live để môi giới quảng bá bất động sản trước khán giả trực tiếp",
};

export default function Page() {
  return <LivePage />;
}
