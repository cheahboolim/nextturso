"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { addMessageToDatabase } from "@/actions/add-message-to-database";

export default function MessageForm() {
  const [message, setMessage] = useState("");

  async function handleAddMessageToDatabase() {
    const response = await addMessageToDatabase(message);

    if (response.ok) {
      setMessage("");
    }
  }
  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="Add a Message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button onClick={handleAddMessageToDatabase}>Submit</Button>
    </div>
  );
}
