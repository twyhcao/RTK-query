import ContactList from "./components/ContactList";
import { startMockServer } from "./mocks/mockServer";
import ContactCreator from "./components/ContactCreator";

if (process.env.NODE_ENV === "development") {
    startMockServer({ environment: "development", timing: 1000 });
}

function App() {
    return (
        <main>
            <h1>RTK Query Contact List</h1>
            <ContactCreator />
            <ContactList />
        </main>
    );
}

export default App;
