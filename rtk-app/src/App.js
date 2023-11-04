import ContactList from "./components/ContactList";
import { startMockServer } from "./mocks/mockServer";
import ContactCreator from "./components/ContactCreator";

if (process.env.NODE_ENV === "development") {
    startMockServer({ environment: "development", timing: 300 });
}

function App() {
    return (
        <div className="container">
            <h1>RTK Query Contact List</h1>
            <ContactCreator />
            <ContactList />
        </div>
    );
}

export default App;
