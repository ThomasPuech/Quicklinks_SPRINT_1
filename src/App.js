import "./styles.css";
import LinkEl from "./Components/Link_Hover";

export default function App() {
  return (
    <div className="App">
      <h1>Link</h1>
      <div className="flex-container">
        <LinkEl />
        <LinkEl />
        <LinkEl />
        <LinkEl />
        <LinkEl />
        <LinkEl />
      </div>
      <h2>Testing the link hover component animation</h2>
    </div>
  );
}
