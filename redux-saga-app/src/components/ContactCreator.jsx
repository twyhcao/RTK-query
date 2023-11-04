import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postData } from "../redux/action";

function ContactCreator() {
    const dispatch = useDispatch();
    const [contactName, setContactName] = useState("");

    const onContactNameChange = (event) => {
        setContactName(event.target.value);
    }

    const onCreateContactButtonClick = () => {
        if (contactName) {
            dispatch(postData({ name: contactName }));
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


