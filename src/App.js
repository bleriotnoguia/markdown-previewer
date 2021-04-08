import { useState } from 'react'
import marked from "marked"
import './App.css';

function App() {

  const defaultText = "# Welcome to my React Markdown Previewer! \n\n ## This is a sub-heading... \n\n ### And here's some other cool stuff: \n\n ``` \n\n // this is multi-line code: \n\n function anotherExample(firstLine, lastLine) { \n\n if (firstLine == '```' && lastLine == '```') { \n\n return multiLineCode; \n\n } \n\n } ``` \n\n You can also make text **bold**... whoa! \n Or _italic_. \n\n Or... wait for it... **_both!_** \n\n And feel free to go crazy ~~crossing stuff out~~. \n There's also [links](https://www.freecodecamp.com), and \n > Block Quotes! \n 1. And there are numbererd lists too. \n 1. Use just 1s if you want! \n 1. And last but not least, let's not forget embedded images: \n\n ![React Logo w/ Text](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png)";

  const [text, setText] = useState(defaultText)
  const getMarkdownText = (mytext) => {
    return {
      __html: marked(mytext)
    }
  }
  const handleEditor = (element) => {
    setText(element.target.value)
  }

  return (
    <div className="App">
      <div id="editor-container">
        <textarea name="editor" value={text} id="editor" rows="15" onChange={elt => handleEditor(elt)}>

        </textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText(text)}>

      </div>
    </div>
  );
}

export default App;
