import React, { useState, useRef } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (inputRef.current?.value) {
      const userInput = inputRef.current.value;
      setMessages(prevMessages => [...prevMessages, `You: ${userInput}`]);
      inputRef.current.value = '';

      try {
        const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: userInput,
            max_tokens: 1024,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();
        setMessages(prevMessages => [...prevMessages, `Bot: ${data.choices[0]?.text || 'No response received'}`]);
      } catch (error) {
        console.error("Failed to send message:", error);
        setMessages(prevMessages => [...prevMessages, 'An error occurred while sending your message. Please try again later.']);
      }
    }
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-20 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={toggleChatbot}
      >
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-500 p-4">
            <h3 className="text-lg text-white">Chatbot - Feature not available</h3>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="my-2 p-2 bg-gray-200 rounded-lg">
                {msg}
              </div>
            ))}
          </div>
          <div className="p-4 flex">
            <input
              type="text"
              ref={inputRef}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
