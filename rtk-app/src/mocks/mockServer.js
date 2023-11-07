import { createServer, Factory } from "miragejs";

export const startMockServer = ({ environment = "test", timing = 0 } = {}) => {
    return createServer({
        environment,
        timing,
        factories: {
            contact: Factory.extend({
                status: "SAVED"
            })
        },
        routes() {
            this.get("https://api/contacts", (schema) => {
                return schema.db.contacts;
            })

            this.post("https://api/contact", (schema, request) => {
                const newContact = JSON.parse(request.requestBody);
                return schema.db.contacts.insert({ ...newContact, status: "SAVED" });
            })
        },
    });
};