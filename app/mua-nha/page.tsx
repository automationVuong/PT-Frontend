import type { Metadata } from "next";
import { ShoppingPage } from "@/modules/shop";

export const metadata: Metadata = {
  title: "Mua nhà",
  description: "Trang mua nhà theo phong cách marketplace bất động sản",
};

export default function Page() {
  return <ShoppingPage />;
}
