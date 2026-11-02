import type { Metadata } from "next";
import { WalletPage } from "@/modules/wallet";

export const metadata: Metadata = {
  title: "Ví giao dịch bất động sản",
  description: "Trang ví để quản lý số dư, giao dịch và khoản đầu tư bất động sản",
};

export default function Page() {
  return <WalletPage />;
}
