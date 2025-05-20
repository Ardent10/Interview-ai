import { useEffect, useState } from "react";
import SectionWrapper from "../../common/layout/SectionWrapper";
import { MessageSquareText } from "lucide-react";
import boyAvatar from "/assets/testimonials/boy.png";
import girlAvatar from "/assets/testimonials/girl.png";

const chatMessages = [
  {
    sender: "ai",
    message: "Thanks for joining, let’s begin the interview.",
    avatar: girlAvatar,
  },
  {
    sender: "user",
    message: "Absolutely, I’m ready to start.",
    avatar: boyAvatar,
  },
  {
    sender: "ai",
    message: "Great! Let's discuss your experience with React and system design.",
    avatar: girlAvatar,
  },
];

export default function RemoteAccessSection() {
  const [currentMessages, setCurrentMessages] = useState<any[]>([]);
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (typingIndex >= chatMessages.length) return;

    const fullMessage = chatMessages[typingIndex].message;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setTypingText(fullMessage.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === fullMessage.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentMessages((prev) => [
            ...prev,
            { ...chatMessages[typingIndex], message: fullMessage },
          ]);
          setTypingText("");
          setTypingIndex((prev) => prev + 1);
        }, 500); 
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [typingIndex]);

  return (
    <SectionWrapper className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-semibold mb-3 uppercase tracking-wide">
          Empowering global talent
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Interview and get hired <br className="hidden md:block" />
          from anywhere in the world
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          InterviewIQ connects job seekers and recruiters around the world. Our
          platform enables seamless AI-powered interviews that bridge time zones
          and borders—no matter where you are.
        </p>

        <div className="relative bg-white shadow-xl rounded-2xl p-6 max-w-xl mx-auto border border-gray-200">
          <p className="text-sm text-primary font-medium mb-4">Interview AI</p>

          <div className="flex flex-col text-left space-y-5 min-h-[200px]">
            {currentMessages.map((msg, index) => (
              <ChatBubble key={index} msg={msg} />
            ))}

            {typingText && (
              <ChatBubble
                msg={{
                  ...chatMessages[typingIndex],
                  message: typingText,
                }}
              />
            )}
          </div>

          <div className="absolute -top-6 left-6 bg-white p-2 rounded-full shadow-md">
            <MessageSquareText className="text-primary" size={28} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ChatBubble({ msg }: { msg: { sender: string; message: string; avatar: string } }) {
  const isUser = msg.sender === "user";

  return (
    <div
      className={`flex items-start gap-3 ${
        isUser ? " flex-row-reverse" : ""
      }`}
    >
      <img src={msg.avatar} alt="avatar" className="w-8 h-8 rounded-full border" />
      <div
        className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
          isUser ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        {msg.message}
      </div>
    </div>
  );
}
