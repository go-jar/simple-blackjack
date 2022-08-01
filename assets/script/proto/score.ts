export interface ReqGetScore {
    userId: string,
}

export interface ResGetScore {
    score: {
        userId: string,
        score: number,
    }
}

export interface ReqSetScore {
    userId: string,
    score: number,
}
