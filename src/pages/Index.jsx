import { useState } from "react";
import { Search, MoreVertical, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/4 border-r">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40" alt="App Logo" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Chat App</span>
          </div>
          <Avatar>
            <AvatarImage src="https://placehold.co/40x40" alt="User Profile" />
            <AvatarFallback>UP</AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4">
          <Input placeholder="Search chats" icon={<Search className="mr-2 h-4 w-4" />} />
        </div>
        <ScrollArea className="h-[calc(100vh-128px)]">
          <div className="p-4 space-y-4">
            {/* Chat List */}
            {[...Array(10)].map((_, index) => (
              <Card key={index} className="flex items-center gap-4 p-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardHeader className="p-0">
                    <CardTitle>User {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground">
                    Last message preview...
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40" alt="Chat User" />
              <AvatarFallback>CU</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Chat User</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 p-4 space-y-4">
          {/* Message Area */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-2 rounded-lg ${
                  msg.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1"
          />
          <Button onClick={handleSendMessage} variant="primary">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;