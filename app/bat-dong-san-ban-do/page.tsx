import type { Metadata } from "next";
import { MapPage } from "@/modules/second-hand-house/components/MapPage";

export const metadata: Metadata = {
  title: "Bản đồ bất động sản",
  description: "Tìm kiếm bất động sản theo bản đồ và chọn nhà phù hợp",
};

export default function Page() {
  return <MapPage />;
}
