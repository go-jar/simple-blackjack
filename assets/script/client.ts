import { JSONRPCClient, JSONRPCRequest } from "json-rpc-2.0";
const URL = 'http://aaa';

export default class Client {
    client: JSONRPCClient;

    constructor() {
        this.client = new JSONRPCClient((jsonRPCRequest: JSONRPCRequest) =>
            fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(jsonRPCRequest),
            }).then((response) => {
                if (response.status === 200) {
                    // Use client.receive when you received a JSON-RPC response.
                    return response.json().then((jsonRPCResponse) => this.client.receive(jsonRPCResponse));
                } else if (jsonRPCRequest.id !== undefined) {
                    return Promise.reject(new Error(response.statusText));
                } else {
                    return Promise.reject(new Error('request id undefined'));
                }
            }),
        );
    }

    public async getScore(userId: string) {
        let param = { userId: userId };
        return this.client.request('getScore', param);
    }
}
