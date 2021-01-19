import { Connection } from '../interfaces/Connection';

export class xmlHttpRequestService {
    open() {}
    send() {}
}

export class xmlHttpService implements Connection {
    xhr = new xmlHttpRequestService();

    request(url: string, type: string) {
        this.xhr.open();
        this.xhr.send();
    }
}