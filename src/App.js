import "./styles.css";

export default function App() {

  fetch('/login').then((response) => {
    return response.json();
  }).then((body) => {
    console.log('res', body)

  });
    
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
