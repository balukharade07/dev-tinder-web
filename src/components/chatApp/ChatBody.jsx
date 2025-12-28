import ChatMessage from "./ChatMessage";

export default function ChatBody({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-2">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          firstName={msg.firstName}
          createdAt={msg.createdAt}
          message={msg.text}
          isOwn={msg.isOwn}
        />
      ))}
    </div>
  )
}
