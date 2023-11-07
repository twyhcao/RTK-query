import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import ContactList from "../../components/ContactList";
import { contactApi } from "../../redux/apiSlice";
import { store } from "../../redux/store";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("ContactList test using a mocked fetch function", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
        store.dispatch(contactApi.util.resetApiState())
    });

    it("should display the list of contacts from a successful API call", async () => {
        fetchMock.mockResponseOnce(JSON.stringify([
            { id: "1", name: "Bob", status: "SAVED" },
            { id: "2", name: "Jane", status: "SAVED" },
            { id: "3", name: "Mary", status: "SAVED" },
        ]));

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
        fetchMock.mockRejectOnce(new Error("Failed to fetch"));

        render(
            <Provider store={store}>
                <ContactList />
            </Provider>
        );

        await waitForElementToBeRemoved(() => screen.queryByText("Loading contacts..."));

        expect(screen.getByText(/There was a problem loading your contacts/)).toBeInTheDocument();
    });
});