import { Avatar } from "./Avatar";

export default function ChatHeader({firstName = ''}) {
  return (
    <div className="navbar bg-base-200 rounded-t-lg">
      <div className="flex-1">
        <span className="text-lg font-semibold">Live Chat with {firstName}</span>
      </div>
      <div className="flex-none">
        <div className="avatar online">
          <div className="w-8 rounded-full">
            <Avatar name={firstName} />
          </div>
        </div>
      </div>
    </div>
  )
}
