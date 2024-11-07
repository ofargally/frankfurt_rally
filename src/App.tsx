import { useState } from "react";
import "./App.css";
function App() {
  const [passWord, setPassWord] = useState("0");
  const [message, setMessage] = useState("");
  const [redirection, setRedirection] = useState(false);
  const correctAnswer = "1981";
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
        <h2>
          As you approach the ticket booth, you hear the sounds of the orchestra
          warming up for the night's performance. There's only one problem: how
          are you supposed to buy tickets for today if you don't even know what
          year it is?
        </h2>
        <div className="card">
          <p>The year is: </p>
          <input
            type="string"
            placeholder="0"
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
        <h2>
          Nice work! Thanks to your unmatched knowledge of Frankfurt history --
          and a little bit of help from Wikipedia lol --, you deduce that it
          must be August 28, 1981 and promptly buy tickets for that date.
        </h2>
        <h2>
          Tickets in hand, you remember that one of your fellow time-travelers
          had stashed some emergency return-to-present devices near here.
          Unfortunately, all they told you about their location was this cryptic
          clue:
        </h2>
        <img src="https://imagizer.imageshack.com/v2/640x480q70/923/auE2FV.jpg"></img>
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
