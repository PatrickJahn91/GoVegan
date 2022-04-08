/**
 * 1) Erstelle die clickHandler Funktion und den Button mit onClick Event.
 */
function FunctionClick() {
  function clickHandler() {
    return alert("Du hast auf mich geklickt!");
  }

  return(
    <div>
      <button onClick={clickHandler}>Alarm</button>
    </div>
  )
}

const element =<FunctionClick />;
ReactDOM.render(
  element,
  document.getElementById(`root`)
)


/**
 * 2) Sorge dafür, dass der Code die aktuelle Anzahl von Clicks bekommt und nutze dies in deinem Event!
 */
class Counter extends React.Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({counter:
        this.state.counter+1});
  }
  render() {
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Anzahl Klicks!</button>
    </div>;
  }
}

const element4 = <Counter />;
ReactDOM.render(
  element4,
  document.getElementById(`Aufgabe4`)
);