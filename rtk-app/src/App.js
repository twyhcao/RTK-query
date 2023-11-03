import ContactList from "./ContactList";
import {createServer} from "miragejs"
import {useCreateContactMutation} from "./apiSlice";

let server = createServer({
    fixtures: {
        contacts: [
            {id: 1, name: "Bob"},
            {id: 2, name: "Thiago"},
            {id: 3, name: "Alan"},
        ],
    },
    routes() {
        this.get("https://api/contacts", (schema, request) => {
            return schema.db.contacts;
        }, {timing: 200})

        this.post("https://api/contact", (schema, request) => {
            schema.db.contacts.insert(JSON.parse(request.requestBody))
        }, {timing: 2000})
    },
})

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
