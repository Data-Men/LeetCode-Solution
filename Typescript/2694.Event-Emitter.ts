type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    event: { [key: string]: Callback[] } = {}
    subscribe(eventName: string, callback: Callback): Subscription {
        this.event[eventName] ||= [];
        let position = 0;
        if (callback) {
            position = this.event[eventName].push(callback);
        }
        return {
            unsubscribe: () => {
                 this.event[eventName].splice(position - 1, 1)
                return undefined;
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        if (Object.keys(this.event).includes(eventName)) {
            const result: any[] = [];
            const clbs = this.event[eventName];
            for (let i = 0; i < clbs.length; i++) {

                result.push(clbs[i](...args));

            }
            return result;
        } else
            return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */