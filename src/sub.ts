export class Sub {

    private static idCounter = 0;
    public subscriptions: Subscription<any>[] = [];

    public trigger(key: string, value: {}){
        for (var i = 0; i < this.subscriptions.length; i++) {
            const subscription = this.subscriptions[i];
            if(subscription.key == key && subscription.invoke){
                subscription.invoke(key, value);
            }
        }
    }

    public subscribe<T>(key: string, action: (key: string, value: {}) => void): Subscription<T>{
        const subscription = new Subscription<T>(++Sub.idCounter);
        subscription.invoke = action;
        subscription.key = key;
        subscription.unsubscribe = () => {

            for (var i = 0; i < this.subscriptions.length; i++) {
                const sub = this.subscriptions[i];
                if (sub.id === subscription.id){
                    this.subscriptions.splice(i, 1); 
                    break;
                }
            }
             
        }
        this.subscriptions.push(subscription);
        return subscription;
    }
}

export class Subscription<T> {

    constructor(public id: number){}

    public key: string;
    public invoke: (key: string, value: T) => void;
    public unsubscribe: () => void;
}