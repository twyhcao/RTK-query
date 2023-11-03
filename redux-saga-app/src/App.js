import ContactList from "./ContactList";
import {createServer} from "miragejs"
import {fetchData, postData} from "./redux-saga/action";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

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
    const data = useSelector((state) => state.fetch.data);
    const isError = useSelector((state) => state.fetch.isError);
    const isLoading = useSelector((state) => state.fetch.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (isError) {
        return <div>Error</div>;
    }

    const onClick = () => {
        const name = names[Math.floor(Math.random() * names.length)];
        dispatch(postData({name}))
    }

    return (
        <div className={'container'}>
            <h1>Redux Saga Contact List</h1>
            <ContactList contactList={data}/>
            <button className={'btn'} onClick={onClick}>CREATE NEW CONTACT</button>
        </div>
    );
}

export default App;
