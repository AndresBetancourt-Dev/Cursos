interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DatabaseKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DatabaseKeyType> implements Database<T, K> {
  /**
   * Member visibility
   * protected accesible from child clasess that extend from it
   * private need to use getSetMethods
   * public, default behaviour
   */
  protected database: Record<K, T> = {} as Record<K, T>;
  private privateRecord: Record<string, string> = {};
  public genericMessage: string = "Databse connection successful";

  getPrivateRecord() {
    return this.privateRecord;
  }

  setPrivateRecord(privateRecord = {}) {
    this.privateRecord = privateRecord;
  }

  get(id: K): T {
    return this.database[id];
  }
  set(id: K, value: T): void {
    this.database[id] = value;
  }
}

class PersistantMemoryDatabase<T, K extends DatabaseKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.database);
  }
  restoreFromString(storedState: string): void {
    this.database = JSON.parse(storedState);
  }
}

const myDB = new InMemoryDatabase<string, number>();
myDB.set(1, "bar");
//Overrida value without inmemorydatabase
//Member disibility
//myDB.database["foo"] = "baz";
console.log(myDB.get(1));
console.log(myDB.genericMessage);
console.log(myDB.getPrivateRecord());
const record: Record<string, string> = {
  hasbullah: "god",
  abdu: "devil",
};

myDB.setPrivateRecord(record);
console.log(myDB.getPrivateRecord());

const persistentDatabase = new PersistantMemoryDatabase<number, string>();
persistentDatabase.set("foo", 20);
const persisted = persistentDatabase.saveToString();
persistentDatabase.set("foo", 15);
console.log(persistentDatabase.saveToString());

const persistentDatabase2 = new PersistantMemoryDatabase();
persistentDatabase2.restoreFromString(persisted);
console.log(persistentDatabase2.saveToString());
