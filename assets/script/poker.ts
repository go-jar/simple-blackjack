import {PokerStatus} from "./config"

export default class Poker {
    public point: number = -1;
    public status: PokerStatus = PokerStatus.CLOSE;

    constructor(point: number, status: PokerStatus) {
        this.point = point;
        this.status = status;
    }
}
