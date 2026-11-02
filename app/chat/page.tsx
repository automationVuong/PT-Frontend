import type { Metadata } from "next";
import { ChatPage } from "@/modules/chat";

export const metadata: Metadata = {
  title: "Chat bất động sản",
  description: "Trang chat để trao đổi với môi giới và hỗ trợ mua bán bất động sản",
};

export default function Page() {
  return <ChatPage />;
}
