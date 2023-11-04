import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "../redux-saga/action";

const ContactList = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.fetch.data);
    const isError = useSelector((state) => state.fetch.isError);
    const isLoading = useSelector((state) => state.fetch.isLoading);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    
    if (isError) {
        return <div className="api-error">Error</div>
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