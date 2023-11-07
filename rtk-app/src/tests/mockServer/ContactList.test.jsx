import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import ContactList from "../../components/ContactList";
import { startMockServer } from "../../mocks/mockServer";
import { contactApi } from "../../redux/apiSlice";
import { store } from "../../redux/store";
import { Response } from "miragejs";

describe("ContactList test using a mock server", () => {
    let server;

    beforeEach(() => {
        store.dispatch(contactApi.util.resetApiState());
        server = startMockServer({ environment: "test" });
    });

    afterEach(() => {
        server.shutdown();
    });

    it("should display the list of contacts from a successful API call", async () => {
        server.create("contact", { name: "Bob" });
        server.create("contact", { name: "Jane" });
        server.create("contact", { name: "Mary" });
        
        render(
            <Provider store={store}>
                <ContactList />
            </Provider>
        );

        await waitForElementToBeRemoved(() => screen.queryByText("Loading contacts..."));

        const contacts = screen.getAllByRole("listitem");

        expect(contacts).toHaveLength(3);
        expect(contacts[0]).toHaveTextContent("Bob");
        expect(contacts[1]).toHaveTextContent("Jane");
        expect(contacts[2]).toHaveTextContent("Mary");
    });

    it("should display an error message after a failed API call", async () => {
        server.get("https://api/contacts", new Response(500));
        
        render(
            <Provider store={store}>
                <ContactList />
            </Provider>
        );

        await waitForElementToBeRemoved(() => screen.queryByText("Loading contacts..."));

        expect(screen.getByText(/There was a problem loading your contacts/)).toBeInTheDocument();
    });
});