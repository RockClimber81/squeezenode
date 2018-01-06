import { SqueezePlayer } from "./squeezeplayer";
import { SqueezeRequest } from "./squeezerequest";

class SqueezeServer extends SqueezeRequest {
    private players: Array<SqueezePlayer>;
    private defaultPlayer: string = "00:00:00:00:00:00";

    constructor(address: string, port: string, username: string, password: string) {
        super(address, port, username, password);
    }

    /**
     * getPlayerCount
     */
    public getPlayerCount() {
        this.request(this.defaultPlayer, ["player", "count", "?"]);
    }
}