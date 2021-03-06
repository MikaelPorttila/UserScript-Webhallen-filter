import { Sub, Subscription } from './sub';
export class Memory {

    private sub: Sub = new Sub();
    private memorySpacePrefix = Object.freeze("whusf"); 
  
    private getKey(key: string): string {
        return this.memorySpacePrefix + key;
    }

    public track<T>(key: string, action: (key: string, value: T) => void): Subscription<T> {
        key = this.getKey(key);
        return this.sub.subscribe<T>(key, action);
    }

    public set(key: string, value: {}) {
        key = this.getKey(key);
        localStorage.setItem(key, JSON.stringify(value));
        this.sub.trigger(key, value);
    }

    public get<T>(key: string): T | null {
        key = this.getKey(key);
        const serializedItem = localStorage.getItem(key);
        if (!!serializedItem){
            return <T>JSON.parse(<string>serializedItem);
        }
        return null;
    }

}

