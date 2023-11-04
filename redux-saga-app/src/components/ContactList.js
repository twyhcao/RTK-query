import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "../redux-saga/action";

const ContactList = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.fetch.data);
    const isError = useSelector((state) => state.fetch.isError);
    const isLoading = useSelector((state) => state.fetch.isLoading);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);
    
    if (isError) {
        return (
            <div className="api-error">
                There was a problem loading your contacts. Please check your connection and try again.
                <button onClick={() => dispatch(fetchData())}>Retry</button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="api-loading">
                Loading contacts...
            </div>
        );
    }

    return (
        <ul className="contacts">
            {data?.map(contact => {
                return <li key={contact.id}>{contact.name}</li>
            })}
        </ul>
    );
}

export default ContactList;