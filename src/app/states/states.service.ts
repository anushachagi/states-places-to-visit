import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SelectStateService {

    constructor (private readonly http: HttpClient) {}

    public getStates() {
        return this.http.get("https://603073d5a1e9d20017af1b9b.mockapi.io/states");
    }

    public getStateInfo(stateId: number) {
        return this.http.get(`https://603073d5a1e9d20017af1b9b.mockapi.io/states/${stateId}`);
    }
}