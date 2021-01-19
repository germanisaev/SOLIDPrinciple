import { Connection } from '../interfaces/Connection';

export class Http {
    constructor(private httpConnection: Connection) {}

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET');
    }

    post(url: string) {
        this.httpConnection.request(url, 'POST');
    }
}