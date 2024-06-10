import { useState } from 'react';
import axios from 'axios';


function Chat() {
  const [question, setQuestion] = useState("Ask me anything!");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading");
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
      console.log(answer);
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
      setQuestion("");
      console.log(answer);
    }
    catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <>
      <h1>AI Chat</h1>
      <textarea value={question} onChange={(e) => { setQuestion(e.target.value) }} placeholder="Ask me anything!"
        cols="30" rows="10"></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <p>{answer}</p>
    </>
  );
}

export default Chat;