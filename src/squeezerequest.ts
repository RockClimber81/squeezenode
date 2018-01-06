class SqueezeRequest {
    private _address: string;
    private _port: string;
    private _username: string;
    private _password: string;

    constructor(address: string, port: string, username: string, password: string) {
        this._address = address;
        this._port = port;
        this._username = username;
        this._password = password;
    }

    get Address(): string {
        return this._address;
    }

    get Port(): string {
        return this._port;
    }

    get UserName(): string {
        return this._username;
    }

    /**
     * request
     */
    public request(player: string, params: string[]) {
        if (this._port == "aws") {
            // why should you implement Amazon Web Services here?
            // this should be done different
            // keeping it for compatibillity for now
        } else {

        }
    }

    /**
     * request_rpc
     */
    public request_rpc(player: string, params: string[]): void {

    }
}

export {SqueezeRequest};