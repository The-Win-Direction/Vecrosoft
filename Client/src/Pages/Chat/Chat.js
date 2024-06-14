import { useState } from 'react';
import axios from 'axios';
import "./Chat.css";


function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateAnswer() {
    setLoading(true);
    setAnswer("");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBALG93Bt9rVrdodrCIU0k2XjlrKHXjt7g",
        method: "post",
        data: {
          "contents": [{
            "parts": [{
              "text": question
            }]
          }]
        }
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    }
    catch (error) {
      console.error("Error fetching data: ", error);
      setAnswer("Sorry, something went wrong. Please try again.");
    }
    setLoading(false);
    setQuestion("");
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h1>AI Chat</h1>
        <div className="chat-messages">
          {answer ? (
            <div className="chat-message bot-message">{answer}</div>
          ) : (
            <div className="chat-message bot-message">How can I help you? Ask me anything!</div>
          )}
        </div>
        <textarea 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          placeholder="Type your question here..."
          rows="3"
        />
        <button 
          onClick={generateAnswer} 
          className="chat-submit-button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chat;
