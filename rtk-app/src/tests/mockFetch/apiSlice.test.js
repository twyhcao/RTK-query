import { contactApi } from "../../redux/apiSlice";
import { store } from "../../redux/store";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("apiSlice test using mocked fetch", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("getContacts endpoint should make a GET request to 'https://api/contacts' when called", async () => {
        await store.dispatch(contactApi.endpoints.getContacts.initiate(undefined));

        const request = fetchMock.mock.calls[0][0];

        expect(request.method).toBe("GET");
        expect(request.url).toBe("https://api/contacts");
    });

    it("createContact endpoint should make a POST request 'https://api/contact' when called", async () => {
        await store.dispatch(contactApi.endpoints.createContact.initiate({ name: 'Test Contact'}));

        const request = fetchMock.mock.calls[0][0];

        const method = request.method;
        const url = request.url;
        const body = await request.json();
        
        expect(method).toBe("POST");
        expect(url).toBe("https://api/contact");
        expect(body).toStrictEqual({ name: 'Test Contact'});
    });
});