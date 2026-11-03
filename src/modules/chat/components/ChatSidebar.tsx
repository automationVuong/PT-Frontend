"use client";

import React from "react";
import { Search } from "lucide-react";

export interface Conversation {
  id: string;
  agentName: string;
  agency: string;
  propertyTitle: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar?: string;
}

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function ChatSidebar({ conversations, activeId, onSelect }: ChatSidebarProps) {
  return (
    <div className="flex flex-col h-full min-h-0 w-full lg:w-96 border-r border-slate-200 bg-white overflow-hidden shrink-0">
      {/* Search Header */}
      <div className="p-4 border-b border-slate-200 shrink-0">
        <h1 className="text-xl font-bold text-slate-900 mb-3">Tin nhắn & Yêu cầu</h1>
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 text-slate-600">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Tìm kiếm cuộc trò chuyện, môi giới..."
            className="w-full text-xs bg-transparent focus:outline-none text-slate-800 font-medium"
          />
        </div>
      </div>

      {/* Conversation List với thanh cuộn độc lập */}
      <div className="flex-1 overflow-y-auto min-h-0 divide-y divide-slate-100">
        {conversations.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full text-left p-4 flex gap-3 transition cursor-pointer ${
                isActive ? "bg-teal-50/70 border-l-4 border-[#0f6b73]" : "hover:bg-slate-50"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#0f6b73] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {item.agentName.slice(0, 2).toUpperCase()}
                </div>
                {item.unread && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-teal-500 border-2 border-white rounded-full" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h3 className="text-xs font-bold text-slate-900 truncate">{item.agentName}</h3>
                  <span className="text-[10px] text-slate-400 shrink-0">{item.timestamp}</span>
                </div>
                <p className="text-[11px] font-semibold text-teal-800 truncate mb-1">
                  {item.propertyTitle}
                </p>
                <p className="text-xs text-slate-500 truncate">{item.lastMessage}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}