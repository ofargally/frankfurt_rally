import { useState } from "react";
import "./App.css";
function App() {
  const [passWord, setPassWord] = useState("0");
  const [message, setMessage] = useState("");
  const [redirection, setRedirection] = useState(false);
  const correctAnswer = "1234";
  const onSubmitHandle = () => {
    if (passWord == correctAnswer) {
      setMessage("Good Job, Now on to the next stage");
      setRedirection(true);
    } else {
      setMessage("Wrong Try again!");
    }
  };
  const showPasswordLogic = () => {
    return (
      <div>
        <h1>
          Congrats! You found the first link to the puzzle! Enter the secret
          code to continue!
        </h1>
        <div className="card">
          <input
            type="string"
            placeholder="Enter secret code"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <button onClick={onSubmitHandle}>Submit</button>
        {message && <p>{message}</p>}
      </div>
    );
  };
  const showPostPasswordLogic = () => {
    return (
      <div>
        <p>The location is in xyz</p>
      </div>
    );
  };

  return (
    <div className="App">
      {!redirection ? showPasswordLogic() : showPostPasswordLogic()}
    </div>
  );
}

export default App;
