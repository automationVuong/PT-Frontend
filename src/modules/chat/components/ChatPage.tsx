"use client";

import React, { useState } from "react";
import { ChatSidebar, Conversation } from "./ChatSidebar";
import { ChatWindow, Message } from "./ChatWindow";

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "conv-1",
    agentName: "Beauchamp Estates Ltd",
    agency: "St John's Wood Branch",
    propertyTitle: "Kidderpore Avenue, Hampstead, NW3",
    lastMessage: "Chào bạn, căn hộ 3 phòng ngủ này hiện vẫn còn suất ưu đãi...",
    timestamp: "10:42 AM",
    unread: true,
  },
  {
    id: "conv-2",
    agentName: "Martyn Gerrard",
    agency: "Hampstead Branch",
    propertyTitle: "Netherhall Gardens, Hampstead, NW3",
    lastMessage: "Lịch hẹn xem nhà lúc 14:00 chiều nay đã được xác nhận nhé.",
    timestamp: "Hôm qua",
    unread: false,
  },
];

const INITIAL_MESSAGES: Record<string, Message[]> = {
  "conv-1": [
    {
      id: "m1",
      sender: "agent",
      text: "Chào ông Vương, cảm ơn ông đã quan tâm đến dự án Kidderpore Avenue!",
      timestamp: "10:30 AM",
    },
    {
      id: "m2",
      sender: "user",
      text: "Cho tôi hỏi thông tin về pháp lý và chính sách thanh toán của căn hộ này?",
      timestamp: "10:35 AM",
    },
    {
      id: "m3",
      sender: "agent",
      text: "Chào bạn, căn hộ 3 phòng ngủ này hiện vẫn còn suất ưu đãi và đã có sổ hồng lâu dài.",
      timestamp: "10:42 AM",
    },
  ],
  "conv-2": [
    {
      id: "m4",
      sender: "agent",
      text: "Lịch hẹn xem nhà lúc 14:00 chiều nay đã được xác nhận nhé.",
      timestamp: "Hôm qua",
    },
  ],
};

export function ChatPage() {
  const [activeId, setActiveId] = useState<string>("conv-1");
  const [messagesMap, setMessagesMap] = useState(INITIAL_MESSAGES);

  const activeConversation = MOCK_CONVERSATIONS.find((c) => c.id === activeId);
  const currentMessages = messagesMap[activeId] || [];

  const handleSendMessage = (text: string) => {
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: "Vừa xong",
    };

    setMessagesMap((prev) => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), newMsg],
    }));
  };

  return (
    <div className="w-full bg-[#f4f6f8] text-slate-900 h-[calc(100vh-65px)] flex flex-col overflow-hidden">
      <div className="mx-auto max-w-[1280px] w-full px-4 py-6 lg:px-6 flex-1 flex flex-col min-h-0">
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row min-h-0 h-full">
          {/* Sidebar */}
          <ChatSidebar
            conversations={MOCK_CONVERSATIONS}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* Active Chat Window */}
          <ChatWindow
            conversation={activeConversation}
            messages={currentMessages}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;