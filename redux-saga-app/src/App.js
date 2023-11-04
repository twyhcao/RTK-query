import ContactList from "./ContactList";
import { fetchData, postData } from "./redux-saga/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startMockServer } from "./mocks/mockServer";

if (process.env.NODE_ENV === "development") {
    startMockServer({ environment: "development", timing: 300 });
}

const names = ["Emily", "Benjamin", "Maya", "Liam", "Olivia", "Ethan", "Ava", "Noah", "Mia", "Alexander"];

function App() {
    const data = useSelector((state) => state.fetch.data);
    const isError = useSelector((state) => state.fetch.isError);
    const isLoading = useSelector((state) => state.fetch.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    const onClick = () => {
        const name = names[Math.floor(Math.random() * names.length)];
        dispatch(postData({ name }))
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className={'container'}>
            <h1>Redux Saga Contact List</h1>
            <ContactList contactList={data} />
            <button className={'btn'} onClick={onClick}>CREATE NEW CONTACT</button>
        </div>
    );
}

export default App;
