// Single Responsibility

export class Auto {
    constructor(public model: string) {}
    getCarModel() {}
    setCarModel() {}
}

export class CustomerAuto {
    saveCustomerOrder(o: Auto) {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
}

export class AutoDB {
    updateCarSet(set: object) {}
} 

const shop: Array<Auto> = [
    new Auto('Tesla'),
    new Auto('Audi')
];