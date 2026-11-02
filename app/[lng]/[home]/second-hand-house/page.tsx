import type { Metadata } from "next";
import { SecondHandHousePage } from "@/modules/second-hand-house/components/SecondHandHousePage";

export const metadata: Metadata = {
  title: "Bất động sản cũ",
};

export default function Page() {
  return <SecondHandHousePage />;
}
