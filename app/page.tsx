import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/message-form";

export const runtime = "edge";

export default async function Home() {
  const messages = await getMessagesFromDatabase();
  return (
    <main className="max-w-2xl mx-auto p-10">
      <MessageForm />
      <div className="p-5">
        <ul>
          {messages.map((messages) => {
            return <li key={messages.id}>{messages.message}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}
