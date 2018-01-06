class SqueezePlayer {
    private _playerId: string;
    private _name: string;
    private _address: string;
    private _port: number;
    private _username: string;
    private _password: string;
    constructor(playerId: string, name: string, address: string, port: number, username: string, password: string) {
        this._playerId = playerId;
        this._name = name;
        this._address = address;
        this._port = port;
        this._username = username;
        this._password = password;
    }
}

export {SqueezePlayer};