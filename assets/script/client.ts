import Axios from 'axios'

interface Achievement {
    win_count: number,
    lose_count: number,
    nfts: Array<number>,
}

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

    private async send_transaction(call_func: string): Promise<String> {
        let response = await this.request('make_request_digest', {
            sender: this.address,
            contract_call: call_func,
            private_key: this.privkey,
            payment: String(20)
        });
        console.log(response);
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        return response.data.result;
    }

    // call while `claim` button clicked in achivement page
    private async claim_nfts(): Promise<String> {
        let global = await this.fetch_global();
        let claimable = false;
        for (let lock_hash of Object.keys(global.users)) {
            let v = global.users[lock_hash];
            claimable = v.nfts.length > 0;
        }
        if (claimable) {
            return await this.send_transaction('claim_nfts()');
        } else {
            return 'nothing';
        }
    }

    // call to check button status of `claim`
    private async fetch_global(): Promise<any> {
        let response = await this.request('fetch_global_data', {
            address: this.address,
        });
        console.log(response);
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        return JSON.parse(response.data.result);
    }

    // call when win the battle
    public async battle_win(): Promise<String> {
        return await this.send_transaction('battle_win()');
    }

    // call when lose the battle
    public async battle_lose(): Promise<String> {
        return await this.send_transaction('battle_lose()');
    }

    public async get_achievement(): Promise<Achievement> {
        let global = await this.fetch_global();
        console.log('global =', global);
        let result = { win_count: 0, lose_count: 0, nfts: [] };
        for (let lock_hash of Object.keys(global.users)) {
            result = global.users[lock_hash];
        }
        return result;
    }

    // call to fetch nfts owned by player
    // public async fetch_nfts(): Promise<Array<NFT>> {
    //     let hash = await this.claim_nfts();
    //     console.log('claim_nfts hash =', hash);
    //     let response = await this.request('fetch_personal_data', this.address);
    //     console.log(response);
    //     if (response.status != 200) {
    //         throw 'bad jsonrpc call';
    //     }
    //     return response.data.result;
    // }
}

/**
 * FOR EXAMPLES
 * 
 *  let client = new Client(
 *      'http://127.0.0.1:8090',
 *      '0x8d929e962f940f75aa32054f19a5ea2ce70ae30bfe4ff7cf2dbed70d556265df',
 *      'ckt1qyq93wzur9h9l6qwyk6d4dvkuufp6gvl08aszz5syl'
 *  );
 *  let tx_hash = await client.battle_win();
 */
