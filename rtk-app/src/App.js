import ContactList from "./components/ContactList";
import { startMockServer } from "./mocks/mockServer";
import contacts from "./mocks/contacts";
import ContactCreator from "./components/ContactCreator";

if (process.env.NODE_ENV === "development") {
    const server = startMockServer({ environment: "development", timing: 1000 });
    server.db.loadData({ contacts});
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
