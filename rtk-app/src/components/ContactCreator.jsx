import { useCreateContactMutation } from "../redux/apiSlice";
import { useState } from 'react';

function ContactCreator() {
    const [addContact] = useCreateContactMutation();

    const [contactName, setContactName] = useState("");

    const onContactNameChange = (event) => {
        setContactName(event.target.value);
    }

    const onCreateContactButtonClick = () => {
        if (contactName) {
            addContact({ name: contactName });
            setContactName("");
        }
    }

    return (
        <>
            <input
                className="search-input"
                placeholder="Enter a contact name"
                value={contactName}
                onChange={onContactNameChange}

            />
            <button
                className="create-button"
                onClick={onCreateContactButtonClick}
            >
                CREATE NEW CONTACT
            </button>
        </>
    );
}

export default ContactCreator;


