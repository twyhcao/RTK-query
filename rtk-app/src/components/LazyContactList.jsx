import { useLazyGetContactsQuery } from "../redux/apiSlice";
import Contact from "./Contact";

function LazyContactList() {
    const [getContacts, { isError, isLoading, data }] = useLazyGetContactsQuery();

    if (isError) {
        return (
            <div className="api-error">
                There was a problem loading your contacts. Please check your connection and try again.
                <button className="secondary-button" onClick={() => getContacts()}>Retry</button>
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

    if (data) {
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

    return (
        <button
            className="primary-button"
            onClick={() => getContacts()}
        >
            GET CONTACTS
        </button>
    );
}

export default LazyContactList;