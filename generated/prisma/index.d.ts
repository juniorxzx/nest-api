
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Photo: 'Photo',
    Interest: 'Interest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "photo" | "interest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    photo?: PhotoOmit
    interest?: InterestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    photos: number
    interests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    name: string | null
    username: string | null
    gender: $Enums.Gender | null
    password: string | null
    phoneVerified: boolean | null
    emailVerified: boolean | null
    bio: string | null
    searchFor: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    name: string | null
    username: string | null
    gender: $Enums.Gender | null
    password: string | null
    phoneVerified: boolean | null
    emailVerified: boolean | null
    bio: string | null
    searchFor: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    name: number
    username: number
    gender: number
    password: number
    phoneVerified: number
    emailVerified: number
    bio: number
    searchFor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    username?: true
    gender?: true
    password?: true
    phoneVerified?: true
    emailVerified?: true
    bio?: true
    searchFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    username?: true
    gender?: true
    password?: true
    phoneVerified?: true
    emailVerified?: true
    bio?: true
    searchFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    username?: true
    gender?: true
    password?: true
    phoneVerified?: true
    emailVerified?: true
    bio?: true
    searchFor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    phone: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified: boolean
    emailVerified: boolean
    bio: string | null
    searchFor: $Enums.Gender
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    username?: boolean
    gender?: boolean
    password?: boolean
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: boolean
    searchFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photos?: boolean | User$photosArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    username?: boolean
    gender?: boolean
    password?: boolean
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: boolean
    searchFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "name" | "username" | "gender" | "password" | "phoneVerified" | "emailVerified" | "bio" | "searchFor" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | User$photosArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      interests: Prisma.$InterestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      phone: string | null
      name: string
      username: string
      gender: $Enums.Gender
      password: string
      phoneVerified: boolean
      emailVerified: boolean
      bio: string | null
      searchFor: $Enums.Gender
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends User$photosArgs<ExtArgs> = {}>(args?: Subset<T, User$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly bio: FieldRef<"User", 'String'>
    readonly searchFor: FieldRef<"User", 'Gender'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.photos
   */
  export type User$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    cursor?: InterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    userId: number | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    userId: number | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    userId: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    userId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    userId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    url: string
    userId: number
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>



  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    userId?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "userId", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      userId: number
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly userId: FieldRef<"Photo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InterestSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InterestMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type InterestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type InterestAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InterestSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InterestMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _avg?: InterestAvgAggregateInputType
    _sum?: InterestSumAggregateInputType
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: number
    name: string
    userId: number
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>



  export type InterestSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'Int'>
    readonly name: FieldRef<"Interest", 'String'>
    readonly userId: FieldRef<"Interest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    username: 'username',
    gender: 'gender',
    password: 'password',
    phoneVerified: 'phoneVerified',
    emailVerified: 'emailVerified',
    bio: 'bio',
    searchFor: 'searchFor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    userId: 'userId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    phone: 'phone',
    name: 'name',
    username: 'username',
    password: 'password',
    bio: 'bio'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  export const InterestOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type InterestOrderByRelevanceFieldEnum = (typeof InterestOrderByRelevanceFieldEnum)[keyof typeof InterestOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    password?: StringFilter<"User"> | string
    phoneVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    searchFor?: EnumGenderFilter<"User"> | $Enums.Gender
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    photos?: PhotoListRelationFilter
    interests?: InterestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrderInput | SortOrder
    searchFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photos?: PhotoOrderByRelationAggregateInput
    interests?: InterestOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    password?: StringFilter<"User"> | string
    phoneVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    searchFor?: EnumGenderFilter<"User"> | $Enums.Gender
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    photos?: PhotoListRelationFilter
    interests?: InterestListRelationFilter
  }, "id" | "email" | "phone" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrderInput | SortOrder
    searchFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    password?: StringWithAggregatesFilter<"User"> | string
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    searchFor?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    userId?: IntFilter<"Photo"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    userId?: IntFilter<"Photo"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    url?: StringWithAggregatesFilter<"Photo"> | string
    userId?: IntWithAggregatesFilter<"Photo"> | number
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: IntFilter<"Interest"> | number
    name?: StringFilter<"Interest"> | string
    userId?: IntFilter<"Interest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: InterestOrderByRelevanceInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    name?: StringFilter<"Interest"> | string
    userId?: IntFilter<"Interest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _avg?: InterestAvgOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
    _sum?: InterestSumOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interest"> | number
    name?: StringWithAggregatesFilter<"Interest"> | string
    userId?: IntWithAggregatesFilter<"Interest"> | number
  }

  export type UserCreateInput = {
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutUserInput
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutUserNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    url: string
    user: UserCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    url: string
    userId: number
  }

  export type PhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoCreateManyInput = {
    id?: number
    url: string
    userId: number
  }

  export type PhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutInterestsInput
  }

  export type InterestUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
  }

  export type InterestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InterestCreateManyInput = {
    id?: number
    name: string
    userId: number
  }

  export type InterestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type InterestListRelationFilter = {
    every?: InterestWhereInput
    some?: InterestWhereInput
    none?: InterestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    searchFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    searchFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    phoneVerified?: SortOrder
    emailVerified?: SortOrder
    bio?: SortOrder
    searchFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InterestOrderByRelevanceInput = {
    fields: InterestOrderByRelevanceFieldEnum | InterestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type InterestCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type InterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUserInput | PhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUserInput | PhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUserInput | PhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type InterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput> | PhotoCreateWithoutUserInput[] | PhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUserInput | PhotoCreateOrConnectWithoutUserInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUserInput | PhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoCreateManyUserInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUserInput | PhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUserInput | PhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type InterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    upsert?: UserUpsertWithoutPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotosInput, UserUpdateWithoutPhotosInput>, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PhotoCreateWithoutUserInput = {
    url: string
  }

  export type PhotoUncheckedCreateWithoutUserInput = {
    id?: number
    url: string
  }

  export type PhotoCreateOrConnectWithoutUserInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput>
  }

  export type PhotoCreateManyUserInputEnvelope = {
    data: PhotoCreateManyUserInput | PhotoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterestCreateWithoutUserInput = {
    name: string
  }

  export type InterestUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
  }

  export type InterestCreateOrConnectWithoutUserInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestCreateManyUserInputEnvelope = {
    data: InterestCreateManyUserInput | InterestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutUserInput, PhotoUncheckedUpdateWithoutUserInput>
    create: XOR<PhotoCreateWithoutUserInput, PhotoUncheckedCreateWithoutUserInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutUserInput, PhotoUncheckedUpdateWithoutUserInput>
  }

  export type PhotoUpdateManyWithWhereWithoutUserInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    userId?: IntFilter<"Photo"> | number
  }

  export type InterestUpsertWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    update: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestUpdateWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    data: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
  }

  export type InterestUpdateManyWithWhereWithoutUserInput = {
    where: InterestScalarWhereInput
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyWithoutUserInput>
  }

  export type InterestScalarWhereInput = {
    AND?: InterestScalarWhereInput | InterestScalarWhereInput[]
    OR?: InterestScalarWhereInput[]
    NOT?: InterestScalarWhereInput | InterestScalarWhereInput[]
    id?: IntFilter<"Interest"> | number
    name?: StringFilter<"Interest"> | string
    userId?: IntFilter<"Interest"> | number
  }

  export type UserCreateWithoutPhotosInput = {
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InterestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotosInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
  }

  export type UserUpsertWithoutPhotosInput = {
    update: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateWithoutPhotosInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInterestsInput = {
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id?: number
    email: string
    phone?: string | null
    name: string
    username: string
    gender: $Enums.Gender
    password: string
    phoneVerified?: boolean
    emailVerified?: boolean
    bio?: string | null
    searchFor: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    password?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    searchFor?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PhotoCreateManyUserInput = {
    id?: number
    url: string
  }

  export type InterestCreateManyUserInput = {
    id?: number
    name: string
  }

  export type PhotoUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}