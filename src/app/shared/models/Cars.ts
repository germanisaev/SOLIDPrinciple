// Close - Open

abstract class CarPrice {
    abstract getPrice(): string;
}

class Tesla extends CarPrice {
    getPrice() {
        return 'Tesla Price: 80 000$ \n';
    }
}

class Audi extends CarPrice {
    getPrice() {
        return 'Audi Price: 50 000$ \n';
    }
}

class BMW extends CarPrice {
    getPrice() {
        return 'BMW Price: 70 000$ \n';
    }
}

class Toyota extends CarPrice {
    getPrice() {
        return 'Toyota Price: 40 000$ \n';
    }
}

export const shop: Array<CarPrice> = [
    new Tesla(),
    new Audi(),
    new BMW(),
    new Toyota()
];

export const getPrices = (auto: Array<CarPrice>): string | void => {
    let data: string = '';
    for (let i = 0; i < auto.length; i++) {
        auto[i].getPrice();
        data = data + (auto[i].getPrice());
    }
    return data;
};





