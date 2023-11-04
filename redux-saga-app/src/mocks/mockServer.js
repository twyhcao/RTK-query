import { createServer } from "miragejs";

export const startMockServer = ({ environment = "test", timing = 0 } = {}) => {
    return createServer({
        environment,
        timing,
        fixtures: {
            contacts: [
                { id: 1, name: "Bob" },
                { id: 2, name: "Thiago" },
                { id: 3, name: "Alan" },
            ],
        },
        routes() {
            this.get("https://api/contacts", (schema) => {
                return schema.db.contacts;
            })

            this.post("https://api/contact", (schema, request) => {
                const newContact = JSON.parse(request.requestBody);
                return schema.db.contacts.insert(newContact);
            })
        },
    });
};