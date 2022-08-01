import Axios from 'axios'

export default class Client {
    url: string;
    privkey: string;
    address: string;

    constructor(url: string, privkey: string, address: string) {
        this.url = url;
        this.privkey = privkey;
        this.address = address;
    }

    private async request(method: string, param: any): Promise<any> {
        return await Axios.post(this.url, {
            jsonrpc: "2.0", 
            method, 
            params: [param],
            id: 1
        }, {
            headers: {
                'content-type': 'application/json; charset=utf-8'
            }
        });
    }

    private async send_transaction(call_func: string): Promise<any> {
        let response = await this.request('make_request_digest', {
            sender: this.address,
            contract_call: call_func,
            private_key: this.privkey
        });
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        return response.data.result.digest;
    }

    // call when win the battle
    public async battle_win(): Promise<any> {
        return await this.send_transaction('battle_win()');
    }

    // call when lose the battle
    public async battle_lose(): Promise<any> {
        return await this.send_transaction('battle_lose()');
    }

    // call while `claim` button clicked in achivement page
    public async claim_nfts(): Promise<any> {
        return await this.send_transaction('claim_nfts()');
    }

    // call to check button status of `claim`
    public async fetch_claimable(): Promise<boolean> {
        let response = await this.request('fetch_global_data', {
            address: this.address,
        });
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        let data = JSON.parse(response.data.result.data);
        return data.nfts.length > 0;
    }

    // call to fetch nfts owned by player
    public async fetch_nfts(): Promise<any> {
        let response = await this.request('fetch_personal_data', {
            address: this.address,
        });
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        return JSON.parse(response.data.result.data);
    }
}

/**
 * FOR EXAMPLES
 * 
 *  let client = new Client(
 *      'http://127.0.0.1:8090',
 *      '8d929e962f940f75aa32054f19a5ea2ce70ae30bfe4ff7cf2dbed70d556265df',
 *      'ckt1qyq93wzur9h9l6qwyk6d4dvkuufp6gvl08aszz5syl'
 *  );
 *  let tx_hash = await client.battle_win();
 */
