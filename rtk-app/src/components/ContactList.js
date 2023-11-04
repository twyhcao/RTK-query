import { useGetContactsQuery } from "../redux/apiSlice";

function ContactList() {
    const { isError, isFetching, isLoading, isSuccess, data } = useGetContactsQuery();

    if (isError) {
        return <div className="api-error">Error</div>;
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