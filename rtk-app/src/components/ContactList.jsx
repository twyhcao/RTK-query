import { useGetContactsQuery } from "../redux/apiSlice";
import Contact from "./Contact";

function ContactList() {
    const { isError, isLoading, data, refetch } = useGetContactsQuery();

    if (isError) {
        return (
            <div className="api-error">
                There was a problem loading your contacts. Please check your connection and try again.
                <button className="secondary-button" onClick={refetch}>Retry</button>
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
            {data?.map((contact) => {
                return (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        status={contact.status}
                    />
                );
            })}
        </ul>
    );
}

export default ContactList;