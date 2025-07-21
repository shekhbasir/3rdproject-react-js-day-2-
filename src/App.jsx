function App() {
  let ink = document.getElementById("root");

  function red() {
    ink.style.backgroundColor = "red";
  }

  function green() {
    ink.style.backgroundColor = "green";
  }

  function black() {
    ink.style.backgroundColor = "black";
  }

  function pink() {
    ink.style.backgroundColor = "pink";
  }
  return (
    <div id="root" style={{ height: 1000, width: 1000 }}>
      <h1> this is the main code </h1>
      <br /> <br />
      <div style={{ backgroundColor: "milk" }}>
        <button
          onClick={red}
          style={{ backgroundColor: "red" }}
          className=" mr-10"
        >
          red
        </button>
        <button
          onClick={green}
          style={{ backgroundColor: "green" }}
          className="mr-10"
        >
          green
        </button>
        <button
          onClick={black}
          style={{ backgroundColor: "black" }}
          className="mr-10"
        >
          black
        </button>
        <button
          onClick={pink}
          style={{ backgroundColor: "pink" }}
          className="mr-10"
        >
          pink
        </button>
      </div>
    </div>
  );
}
export default App;
