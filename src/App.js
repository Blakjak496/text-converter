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
      const paras = text.split(/\n/);
      const convertedParas = [];
      paras.forEach((para, index) => {
        if (para) {
          const convertedWords = [];
          const words = para.split(" ");
          words.forEach((word, index) => {
            const letters = word.split("");
            if(index === 0) letters[0] = letters[0].toUpperCase();
            else {
              const previousWord = words[index-1];
              const lastChar = previousWord[previousWord.length-1];
              if (lastChar === "." || lastChar === "!" || lastChar === "?") letters[0] = letters[0].toUpperCase();
            }
            convertedWords.push(letters.join(""));
          })
          convertedParas.push(convertedWords.join(" "));
        } 
      })
      setConvertedText(convertedParas);
    }
    else setConvertedText("<add some text to the input>");
  }

  const clearInput = () => {
    setInputText("");
    setConvertedText("<add some text to the input>");
  }

  return (
    <div className="App">
      <div className="app_header">
        <h1>Text Converter</h1>
        <h3>Convert text into standard formatting<br/>(i.e Capital letters at the start of sentences.)</h3>
        <h3>To use:</h3>
        <p className="app_header-instructions">
          Copy/paste the text into the box below and click the button.
          <br/>
          The correctly formatted text will appear underneath the converter.
          <br/><br/>
          *note - other formatting such as bold and italic will not be maintained.
          </p>
      </div>
      <div className="app_converter">
        <textarea className="app_converter-input" onChange={handleChange} value={inputText}></textarea>
        <div className="app_converter-btn-box">
          <button className="app_converter-btn" onClick={convertText}>Format</button>
          <button className="app_converter-btn" onClick={clearInput}>Clear</button>
        </div>
      </div>
      <div className="app_output">
        <h3>Output</h3>
          { convertedText === "<add some text to the input>" ? <p>{convertedText}</p>
           : convertedText.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
