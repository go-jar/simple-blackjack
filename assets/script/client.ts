import Axios from 'axios'

interface WinLoseCount {
    win_count: number,
    lose_count: number,
}

interface TransactionHash {
    digest: string
}

interface Outpoint {
    tx_hash: string,
    index: number,
}

interface NFT {
    nfts: Array<number>,
    outpoint: Outpoint, // 这个不用使用
}

interface NFTs {
    data: Array<NFT>
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

    // call while `claim` button clicked in achivement page
    private async claim_nfts(): Promise<any> {
        let global = await this.fetch_global();
        if (global.nfts.length > 0) {
            return await this.send_transaction('claim_nfts()');
        } else {
            return null;
        }
    }

    // call to check button status of `claim`
    private async fetch_global(): Promise<any> {
        let response = await this.request('fetch_global_data', {
            address: this.address,
        });
        if (response.status != 200) {
            throw 'bad jsonrpc call';
        }
        return JSON.parse(response.data.result.data);
    }

    // call when win the battle
    public async battle_win(): Promise<TransactionHash> {
        return await this.send_transaction('battle_win()');
    }

    // call when lose the battle
    public async battle_lose(): Promise<TransactionHash> {
        return await this.send_transaction('battle_lose()');
    }

    public async get_win_lose_count(): Promise<WinLoseCount> {
        let global = await this.fetch_global();
        let result = { win_count: 0, lose_count: 0 };
        for (let v of global.nfts) {
            result = {
                win_count: v.win_count,
                lose_count: v.lose_count
            };
        }
        return result;
    }

    // call to fetch nfts owned by player
    public async fetch_nfts(): Promise<NFTs> {
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
