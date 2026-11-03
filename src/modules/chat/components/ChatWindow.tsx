"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Phone, Building, ExternalLink, Paperclip } from "lucide-react";
import { Conversation } from "./ChatSidebar";

export interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: string;
}

interface ChatWindowProps {
  conversation?: Conversation;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export function ChatWindow({ conversation, messages, onSendMessage }: ChatWindowProps) {
  const [inputText, setInputText] = useState("");

  if (!conversation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 p-6 text-center h-full">
        <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0f6b73] flex items-center justify-center mb-3">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-base font-bold text-slate-800">Chọn cuộc trò chuyện</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-xs">
          Kết nối trực tiếp với các chuyên viên môi giới và nhận tư vấn chi tiết về dự án.
        </p>
      </div>
    );
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 bg-slate-50 min-w-0 overflow-hidden">
      {/* Header Chat */}
      <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-[#0f6b73] text-white flex items-center justify-center font-bold text-xs shrink-0">
            {conversation.agentName.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-slate-900 truncate">{conversation.agentName}</h2>
            <p className="text-xs text-slate-500 flex items-center gap-1 truncate">
              <Building className="w-3 h-3 text-slate-400 shrink-0" /> {conversation.agency}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:02039073637"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700" />
            <span>Gọi môi giới</span>
          </a>
        </div>
      </div>

      {/* Property Context Banner */}
      <div className="bg-teal-50/80 border-b border-teal-100 px-4 py-2.5 flex items-center justify-between text-xs shrink-0">
        <div className="truncate mr-2">
          <span className="font-bold text-teal-900">Đang thảo luận: </span>
          <span className="text-teal-800">{conversation.propertyTitle}</span>
        </div>
        <Link
          href="/du-an/chi-tiet"
          className="inline-flex items-center gap-1 text-teal-800 font-bold hover:underline shrink-0"
        >
          Xem nhà <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Messages Feed (Có thanh cuộn) */}
      <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-3">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs shadow-sm ${
                  isUser
                    ? "bg-[#0f6b73] text-white rounded-br-none"
                    : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
            </div>
          );
        })}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
        <button
          type="button"
          className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition shrink-0"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Nhập tin nhắn tư vấn..."
          className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0f6b73]"
        />
        <button
          type="submit"
          className="p-2.5 bg-[#0f6b73] text-white rounded-xl hover:bg-teal-800 transition shadow-sm cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
