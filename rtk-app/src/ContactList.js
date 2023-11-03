import {useGetContactQuery} from "./apiSlice";

function ContactList() {
    // const res = useGetContactQuery()
    // console.log(res)
    const {isError, isFetching, isLoading, isSuccess, data} = useGetContactQuery()
    if (!data) {
        return null;
    }
    return (
        <ul className={'todos'}>
            {data.map(contact => {
                return <li key={contact.id}>{contact.name}</li>
            })}
        </ul>
    );
}

export default ContactList;