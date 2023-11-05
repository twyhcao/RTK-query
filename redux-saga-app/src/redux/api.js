export const api = {
    fetchData: async () => {
        const response = await fetch('https://api/contacts');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error(response.statusText);
    },
    postData: async (contact) => {
        const response = await fetch('https://api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error(response.statusText);
    },
};