import ContactList from "./ContactList";
import {useCreateContactMutation} from "./apiSlice";
import { startMockServer } from "./mocks/mockServer";

if (process.env.NODE_ENV === "development") {
    startMockServer({ environment: "development", timing: 300 });
}

const names = ["Emily", "Benjamin", "Maya", "Liam", "Olivia", "Ethan", "Ava", "Noah", "Mia", "Alexander"];

function App() {
    const [trigger] = useCreateContactMutation()
    const onClick = () => {
        const name = names[Math.floor(Math.random() * names.length)];
        trigger({name})
    }

    return (
        <div className={'container'}>
            <h1>RTK Query Contact List</h1>
            <ContactList/>
            <button className={'btn'} onClick={onClick}>CREATE NEW CONTACT</button>
        </div>
    );
}

export default App;
