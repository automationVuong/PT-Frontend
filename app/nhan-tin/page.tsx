import type { Metadata } from "next";
import ChatPage from "@/modules/chat/components/ChatPage";

export const metadata: Metadata = {
  title: "Bất động sản",
};

export default function Page() {
  return (
      <main className="bg-[#f3f1ee] text-slate-900">
        <ChatPage />
      </main>
    );
}
