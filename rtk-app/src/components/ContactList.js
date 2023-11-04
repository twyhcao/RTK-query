import { useGetContactsQuery } from "../redux/apiSlice";

function ContactList() {
    const { isError, isFetching, data, refetch } = useGetContactsQuery();

    if (isError) {
        return (
            <div className="api-error">
                There was a problem loading your contacts. Please check your connection and try again.
                <button onClick={refetch}>Retry</button>
            </div>
        );
    }

    if (isFetching) {
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