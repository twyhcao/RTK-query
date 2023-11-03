import {useGetContactQuery} from "./apiSlice";

function ContactList() {
    // const  res=useGetContactQuery()
    // console.log(res)
    const {isError, isFetching, isLoading, isSuccess, data} = useGetContactQuery()
    if (!data) {
        return null;
    }
    return (
        <div>
            {data.map(contact => {
                return <div key={contact.id}>{contact.name}</div>
            })}
        </div>
    );
}

export default ContactList;