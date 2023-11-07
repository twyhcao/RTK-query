import { render, screen } from "@testing-library/react";
import ContactList from "../../components/ContactList";
import * as apiSlice from "../../redux/apiSlice";

describe("ContactList test using mocked RTK Query hooks", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it("should display the list of contacts from a successful API call", async () => {
        jest.spyOn(apiSlice, 'useGetContactsQuery').mockImplementationOnce(() => {
            return {
                isLoading: false,
                isError: false,
                data: [
                    { id: "1", name: "Bob", status: "SAVED" },
                    { id: "2", name: "Jane", status: "SAVED" },
                    { id: "3", name: "Mary", status: "SAVED" },
                ]
            }
        });

        render(<ContactList />);

        const contacts = screen.getAllByRole("listitem");

        expect(contacts).toHaveLength(3);
        expect(contacts[0]).toHaveTextContent("Bob");
        expect(contacts[1]).toHaveTextContent("Jane");
        expect(contacts[2]).toHaveTextContent("Mary");
    });

    it("should display an error message after a failed API call", async () => {
        jest.spyOn(apiSlice, 'useGetContactsQuery').mockImplementationOnce(() => {
            return { isLoading: false, isError: true, data: undefined }
        });

        render(<ContactList />);

        expect(screen.getByText(/There was a problem loading your contacts/)).toBeInTheDocument();
    });
});