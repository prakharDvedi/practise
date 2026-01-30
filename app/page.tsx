import AutoComplete from "./components/searchcomplete";

export default function Home() {
  return (
    <main className="view">
      <div className="greeting">
        <h1>Welcome to the Practise Page</h1>
        <p>This is a simple Next.js page located at /practise.</p>
        <div className="button-container"></div>
        <br></br>
        <AutoComplete/>
      </div>
    </main>
  );
}
