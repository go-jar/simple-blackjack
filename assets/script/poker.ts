export class Poker {
    public point: number = -1;
    public status: PokerStatus = PokerStatus.CLOSE;

    constructor(point: number, status: PokerStatus) {
        this.point = point;
        this.status = status;
    }
};

export enum PokerStatus {
    CLOSE = 0,
    OPEN = 1,
};
