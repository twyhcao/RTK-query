import { startMockServer } from "./mocks/mockServer";
import ContactCreator from "./components/ContactCreator";
import ContactList from "./components/ContactList";

if (process.env.NODE_ENV === "development") {
    startMockServer({ environment: "development", timing: 500 });
}

function App() {
    return (
        <main>
            <h1>Redux Saga Contact List</h1>
            <ContactCreator />
            <ContactList />
        </main>
    );
}

export default App;
