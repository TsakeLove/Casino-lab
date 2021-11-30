const fetch = require("node-fetch");

export interface Account {
    id: string;
    money: number;
    deletionTime: Date;
}

export interface BetResponse {
    message: string;
    account: Account;
    realNumber: number;
}
export class CasinoRoyale {
    private host = "http://95.217.177.249/casino/";
    private id = "";
    public async registerUser(id: string) {
        this.id = id;
        return await this.sendRequest<Account>(
            `${this.host}createacc?id=${id}`
        );
    }
    public async makeBet(
        gameMode: "Lcg" | "MT" | "BetterMT",
        bet = 1,
        number = 0
    ) {
        return await this.sendRequest<BetResponse>(
            `${this.host}play${gameMode}?id=${this.id}&bet=${bet}&number=${number}`)
    }
    private async sendRequest<RType>(url: string): Promise<RType | Error> {
        try {
            return await (await fetch(url)).json() as RType;
        } catch (error: any) {
            //<eat error>
            console.log(error);

        }
    }
}
