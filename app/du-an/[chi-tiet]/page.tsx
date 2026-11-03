import type { Metadata } from "next";
import PropertyDetailPage from "@/modules/du-an-chi-tiet/PropertyDetailPage";

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return <PropertyDetailPage />;
}
