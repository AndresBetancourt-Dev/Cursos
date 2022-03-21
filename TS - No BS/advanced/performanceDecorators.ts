import { performance } from "perf_hooks";
import "reflect-metadata";

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

interface ThisWithTimings {
  __timings: unknown[];
}

export function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const out = await value.apply(this, args);
      const end = performance.now();

      const importantParams = [];

      let importantParameters: number[] = Reflect.getOwnMetadata(
        importanMetaDataKey,
        target,
        propertyKey
      );

      if (importantParameters) {
        for (let parameterIndex of importantParameters) {
          importantParams.push(args[parameterIndex]);
        }
      }

      if ((this as ThisWithTimings).__timings) {
        (this as ThisWithTimings).__timings.push({
          method: propertyKey,
          time: end - start,
          importantParams,
        });
      } else {
        console.log(end - start);
      }
      return out;
    };
  };
}

const importanMetaDataKey = Symbol("important");

export function important(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(importanMetaDataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    importanMetaDataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

export function logTimings<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    __timings = [];
  };
}
