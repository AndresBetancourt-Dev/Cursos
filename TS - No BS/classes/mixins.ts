/**
 *The pattern relies on using generics with class inheritance to extend a base class. TypeScript’s best mixin support is done via the class expression pattern.
 * @returns Mixin it's a Pattern
 */
const loggerFunction = () => {
  return (str: string) => {
    console.log(str);
  };
};

const logger = loggerFunction();

logger(
  "[ERROR] - Something unexpected occured during the execution of this application."
);

function createLoggerClass() {
  return class Logger {
    private completeLog: string = "";
    log(logText: string) {
      console.log(logText);
      this.completeLog += logText + "\n";
    }

    dumpLog() {
      return this.completeLog;
    }
  };
}

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};
    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}

const Logger = createLoggerClass();
const classLogger = new Logger();
classLogger.log(
  "[ERROR] - Something unexpected occured during the execution of this application."
);
classLogger.log("[SUCCESS] - The application is now listening at PORT : 3000.");
classLogger.log("[SUCCESS] - Database connection successfully.");
console.log("%c" + classLogger.dumpLog(), "background: #fff; color : #faa");

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const stringDatabase = new StringDatabase();

stringDatabase.set("name", "Andrés");
stringDatabase.set("surname", "Betancourt");
console.log(stringDatabase.getObject());

/**
 * Mixin
 */

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const stringDatabaseII = new DumpableStringDatabase();

stringDatabaseII.set("name", "Sanchéz");
stringDatabaseII.set("surname", "Yépes");
stringDatabaseII.dump();
