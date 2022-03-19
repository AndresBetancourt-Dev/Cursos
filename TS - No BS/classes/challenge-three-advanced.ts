type Handler<T> = {
  [Property in keyof T as `map${Capitalize<string & Property>}`]?: (
    data: T[Property]
  ) => T[Property];
} & {
  [Property in keyof T as `filter${Capitalize<string & Property>}`]?: (
    data: T[Property]
  ) => boolean;
};

type ProcessedEvent2<T> = {
  eventName: keyof T | string;
  data: T[keyof T];
};
class EventProcessor2<T extends {}> {
  private handlers: Handler<T>[] = [];
  private processed: ProcessedEvent2<T>[] = [];

  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    let allowEvent = true;

    const capitalize = (s: string) =>
      `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

    for (const handler of this.handlers) {
      const filterFunc =
        handler[`filter${capitalize(eventName as string)}` as string];
      if (filterFunc && !filterFunc(data)) {
        allowEvent = false;
        break;
      }

      if (allowEvent) {
        let mappedData = { ...data };
        for (const handler of this.handlers) {
          const mapFunc =
            handler[`map${capitalize(eventName as string)}` as string];
          if (mapFunc) {
            mappedData = <T[K]>mapFunc(mappedData);
          }
        }
      }
    }
  }
  addHandler(handler: Handler<T>): void {
    this.handlers.push(handler);
  }
  getProcessedEvents() {
    return this.processed;
  }
}

interface UserProcessed {
  user?: string;
  name?: string;
  hasSession?: boolean;
}

interface EventMap {
  login: { user?: string; name?: string; hasSession?: boolean };
  logout: { user?: string };
}

class UserEventProcessor2 extends EventProcessor2<EventMap> {}

const uep2 = new UserEventProcessor2();
uep2.addHandler({
  filterLogin: ({ user }) => Boolean(user),
  mapLogin: (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name),
  }),
});

uep2.handleEvent("login", {
  user: undefined,
  name: "jack",
});
uep2.handleEvent("login", {
  user: "tom",
  name: "tomas",
});
uep2.handleEvent("logout", {
  user: "tom",
});

console.log(uep2.getProcessedEvents());

/*
Result:
[
  {
    eventName: 'login',
    data: { user: 'tom', name: 'tomas', hasSession: true }
  },
  { eventName: 'logout', data: { user: 'tom' } }
]
*/
