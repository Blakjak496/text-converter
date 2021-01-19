import './App.css';
import {useState} from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("<add some text to the input>");

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  const convertText = () => {
    if (inputText) {
      const text = inputText.toLowerCase();
      const words = text.split(" ");
      const output = [];
      words.forEach((word, index) => {
        const letters = word.split("");
        if(index === 0) letters[0] = letters[0].toUpperCase();
        else {
          const previousWord = words[index-1];
          const lastChar = previousWord[previousWord.length-1];
          if (lastChar === "." || lastChar === "!" || lastChar === "?") letters[0] = letters[0].toUpperCase();
        }
        output.push(letters.join(""));
      })
      setConvertedText(output.join(" "))
    }
    else setConvertedText("<add some text to the input>");
  }

  return (
    <div className="App">
      <div className="app_header">
        <h1>Text Converter</h1>
        <h3>Convert block capital text into standard formatting<br/>(i.e Capital letters at the start of sentences.)</h3>
        <h3>To use:</h3>
        <p className="app_header-instructions">Copy/paste the text into the box below and click the button. <br/> The correctly formatted text will appear underneath the converter.</p>
      </div>
      <div className="app_converter">
        <textarea className="app_converter-input" onChange={handleChange}></textarea>
        <button className="app_converter-btn" onClick={convertText}>Format</button>
      </div>
      <div className="app_output">
        <h3>Output</h3>
        <p>{convertedText}</p>
      </div>
    </div>
  );
}

export default App;
