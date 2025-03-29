import React, { useState } from "react";
import locations from "../data/locations.json"; 

const TravelChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocalSuggestion = (message) => {
    const keywords = ["เที่ยว", "ทะเล", "ภูเขา", "ธรรมชาติ", "สถานที่", "ที่เที่ยว"];
    const found = keywords.some((kw) => message.includes(kw));
    if (found) {
      const random = locations[Math.floor(Math.random() * locations.length)];
      return `แนะนำสถานที่: ${random.name}\n${random.description}`;
    }
    return null;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const localReply = getLocalSuggestion(input);
    if (localReply) {
      const botMessage = { role: "assistant", content: localReply };
      setMessages([...messages, userMessage, botMessage]);
      setInput("");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = { role: "assistant", content: data.reply };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-xl w-72 z-50">
      <h2 className="text-lg font-bold">Travel Chatbot</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "text-right" : "text-left"}>
            <p className={msg.role === "user" ? "bg-blue-500 text-white p-2 rounded-lg inline-block" : "bg-gray-200 p-2 rounded-lg inline-block"}>
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="ถามเกี่ยวกับการท่องเที่ยว..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "..." : "ส่ง"}
        </button>
      </div>
    </div>
  );
};

export default TravelChatbot;
