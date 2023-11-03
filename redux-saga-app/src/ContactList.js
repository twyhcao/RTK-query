const ContactList = (props) => {
    const {contactList} = props
    if (!contactList) {
        return null
    }
    return (
        <ul className={'todos'}>
            {contactList.map(contact => {
                return <li key={contact.id}>{contact.name}</li>
            })}
        </ul>
    );
}

export default ContactList;