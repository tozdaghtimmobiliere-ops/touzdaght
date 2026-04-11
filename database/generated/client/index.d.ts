
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
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectImage
 * 
 */
export type ProjectImage = $Result.DefaultSelection<Prisma.$ProjectImagePayload>
/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model Apartment
 * 
 */
export type Apartment = $Result.DefaultSelection<Prisma.$ApartmentPayload>
/**
 * Model Parcel
 * 
 */
export type Parcel = $Result.DefaultSelection<Prisma.$ParcelPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model ReservationLog
 * 
 */
export type ReservationLog = $Result.DefaultSelection<Prisma.$ReservationLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
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
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.projectImage`: Exposes CRUD operations for the **ProjectImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectImages
    * const projectImages = await prisma.projectImage.findMany()
    * ```
    */
  get projectImage(): Prisma.ProjectImageDelegate<ExtArgs>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs>;

  /**
   * `prisma.apartment`: Exposes CRUD operations for the **Apartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apartments
    * const apartments = await prisma.apartment.findMany()
    * ```
    */
  get apartment(): Prisma.ApartmentDelegate<ExtArgs>;

  /**
   * `prisma.parcel`: Exposes CRUD operations for the **Parcel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcel.findMany()
    * ```
    */
  get parcel(): Prisma.ParcelDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.reservationLog`: Exposes CRUD operations for the **ReservationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationLogs
    * const reservationLogs = await prisma.reservationLog.findMany()
    * ```
    */
  get reservationLog(): Prisma.ReservationLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    City: 'City',
    Project: 'Project',
    ProjectImage: 'ProjectImage',
    Building: 'Building',
    Apartment: 'Apartment',
    Parcel: 'Parcel',
    Admin: 'Admin',
    ReservationLog: 'ReservationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "city" | "project" | "projectImage" | "building" | "apartment" | "parcel" | "admin" | "reservationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectImage: {
        payload: Prisma.$ProjectImagePayload<ExtArgs>
        fields: Prisma.ProjectImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          findFirst: {
            args: Prisma.ProjectImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          findMany: {
            args: Prisma.ProjectImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>[]
          }
          create: {
            args: Prisma.ProjectImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          createMany: {
            args: Prisma.ProjectImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>[]
          }
          delete: {
            args: Prisma.ProjectImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          update: {
            args: Prisma.ProjectImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectImagePayload>
          }
          aggregate: {
            args: Prisma.ProjectImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectImage>
          }
          groupBy: {
            args: Prisma.ProjectImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectImageCountAggregateOutputType> | number
          }
        }
      }
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      Apartment: {
        payload: Prisma.$ApartmentPayload<ExtArgs>
        fields: Prisma.ApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findFirst: {
            args: Prisma.ApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findMany: {
            args: Prisma.ApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          create: {
            args: Prisma.ApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          createMany: {
            args: Prisma.ApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          delete: {
            args: Prisma.ApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          update: {
            args: Prisma.ApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          aggregate: {
            args: Prisma.ApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartment>
          }
          groupBy: {
            args: Prisma.ApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentCountAggregateOutputType> | number
          }
        }
      }
      Parcel: {
        payload: Prisma.$ParcelPayload<ExtArgs>
        fields: Prisma.ParcelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findFirst: {
            args: Prisma.ParcelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findMany: {
            args: Prisma.ParcelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          create: {
            args: Prisma.ParcelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          createMany: {
            args: Prisma.ParcelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          delete: {
            args: Prisma.ParcelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          update: {
            args: Prisma.ParcelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          deleteMany: {
            args: Prisma.ParcelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParcelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          aggregate: {
            args: Prisma.ParcelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcel>
          }
          groupBy: {
            args: Prisma.ParcelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      ReservationLog: {
        payload: Prisma.$ReservationLogPayload<ExtArgs>
        fields: Prisma.ReservationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          findFirst: {
            args: Prisma.ReservationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          findMany: {
            args: Prisma.ReservationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>[]
          }
          create: {
            args: Prisma.ReservationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          createMany: {
            args: Prisma.ReservationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>[]
          }
          delete: {
            args: Prisma.ReservationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          update: {
            args: Prisma.ReservationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          deleteMany: {
            args: Prisma.ReservationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationLogPayload>
          }
          aggregate: {
            args: Prisma.ReservationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationLog>
          }
          groupBy: {
            args: Prisma.ReservationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationLogCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationLogCountAggregateOutputType> | number
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
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    projects: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CityCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    buildings: number
    parcels: number
    images: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buildings?: boolean | ProjectCountOutputTypeCountBuildingsArgs
    parcels?: boolean | ProjectCountOutputTypeCountParcelsArgs
    images?: boolean | ProjectCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountParcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectImageWhereInput
  }


  /**
   * Count Type BuildingCountOutputType
   */

  export type BuildingCountOutputType = {
    apartments: number
  }

  export type BuildingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartments?: boolean | BuildingCountOutputTypeCountApartmentsArgs
  }

  // Custom InputTypes
  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountApartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    heroImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    heroImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    heroImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    heroImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    heroImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    heroImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    name: string
    slug: string
    heroImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    heroImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | City$projectsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    heroImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    heroImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | City$projectsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      heroImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends City$projectsArgs<ExtArgs> = {}>(args?: Subset<T, City$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly slug: FieldRef<"City", 'String'>
    readonly heroImage: FieldRef<"City", 'String'>
    readonly createdAt: FieldRef<"City", 'DateTime'>
    readonly updatedAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }

  /**
   * City.projects
   */
  export type City$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
    totalArea: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    totalArea: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    name: string | null
    slug: string | null
    type: string | null
    status: string | null
    description: string | null
    address: string | null
    totalArea: number | null
    startDate: Date | null
    endDate: Date | null
    heroImage: string | null
    mainImage: string | null
    whatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    name: string | null
    slug: string | null
    type: string | null
    status: string | null
    description: string | null
    address: string | null
    totalArea: number | null
    startDate: Date | null
    endDate: Date | null
    heroImage: string | null
    mainImage: string | null
    whatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    cityId: number
    name: number
    slug: number
    type: number
    status: number
    description: number
    address: number
    totalArea: number
    startDate: number
    endDate: number
    heroImage: number
    mainImage: number
    whatsapp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    cityId?: true
    totalArea?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    cityId?: true
    totalArea?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    slug?: true
    type?: true
    status?: true
    description?: true
    address?: true
    totalArea?: true
    startDate?: true
    endDate?: true
    heroImage?: true
    mainImage?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    slug?: true
    type?: true
    status?: true
    description?: true
    address?: true
    totalArea?: true
    startDate?: true
    endDate?: true
    heroImage?: true
    mainImage?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    cityId?: true
    name?: true
    slug?: true
    type?: true
    status?: true
    description?: true
    address?: true
    totalArea?: true
    startDate?: true
    endDate?: true
    heroImage?: true
    mainImage?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    cityId: number
    name: string
    slug: string
    type: string
    status: string
    description: string | null
    address: string | null
    totalArea: number | null
    startDate: Date | null
    endDate: Date | null
    heroImage: string | null
    mainImage: string | null
    whatsapp: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    address?: boolean
    totalArea?: boolean
    startDate?: boolean
    endDate?: boolean
    heroImage?: boolean
    mainImage?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    buildings?: boolean | Project$buildingsArgs<ExtArgs>
    parcels?: boolean | Project$parcelsArgs<ExtArgs>
    images?: boolean | Project$imagesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    address?: boolean
    totalArea?: boolean
    startDate?: boolean
    endDate?: boolean
    heroImage?: boolean
    mainImage?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    cityId?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    address?: boolean
    totalArea?: boolean
    startDate?: boolean
    endDate?: boolean
    heroImage?: boolean
    mainImage?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    buildings?: boolean | Project$buildingsArgs<ExtArgs>
    parcels?: boolean | Project$parcelsArgs<ExtArgs>
    images?: boolean | Project$imagesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      buildings: Prisma.$BuildingPayload<ExtArgs>[]
      parcels: Prisma.$ParcelPayload<ExtArgs>[]
      images: Prisma.$ProjectImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number
      name: string
      slug: string
      type: string
      status: string
      description: string | null
      address: string | null
      totalArea: number | null
      startDate: Date | null
      endDate: Date | null
      heroImage: string | null
      mainImage: string | null
      whatsapp: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    buildings<T extends Project$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$buildingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany"> | Null>
    parcels<T extends Project$parcelsArgs<ExtArgs> = {}>(args?: Subset<T, Project$parcelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany"> | Null>
    images<T extends Project$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly cityId: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly type: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly address: FieldRef<"Project", 'String'>
    readonly totalArea: FieldRef<"Project", 'Float'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly heroImage: FieldRef<"Project", 'String'>
    readonly mainImage: FieldRef<"Project", 'String'>
    readonly whatsapp: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.buildings
   */
  export type Project$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    cursor?: BuildingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Project.parcels
   */
  export type Project$parcelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Project.images
   */
  export type Project$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    where?: ProjectImageWhereInput
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    cursor?: ProjectImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectImage
   */

  export type AggregateProjectImage = {
    _count: ProjectImageCountAggregateOutputType | null
    _avg: ProjectImageAvgAggregateOutputType | null
    _sum: ProjectImageSumAggregateOutputType | null
    _min: ProjectImageMinAggregateOutputType | null
    _max: ProjectImageMaxAggregateOutputType | null
  }

  export type ProjectImageAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
  }

  export type ProjectImageSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
  }

  export type ProjectImageMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    url: string | null
    category: string | null
    label: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ProjectImageMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    url: string | null
    category: string | null
    label: string | null
    order: number | null
    createdAt: Date | null
  }

  export type ProjectImageCountAggregateOutputType = {
    id: number
    projectId: number
    url: number
    category: number
    label: number
    order: number
    createdAt: number
    _all: number
  }


  export type ProjectImageAvgAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
  }

  export type ProjectImageSumAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
  }

  export type ProjectImageMinAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    category?: true
    label?: true
    order?: true
    createdAt?: true
  }

  export type ProjectImageMaxAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    category?: true
    label?: true
    order?: true
    createdAt?: true
  }

  export type ProjectImageCountAggregateInputType = {
    id?: true
    projectId?: true
    url?: true
    category?: true
    label?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectImage to aggregate.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectImages
    **/
    _count?: true | ProjectImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectImageMaxAggregateInputType
  }

  export type GetProjectImageAggregateType<T extends ProjectImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectImage[P]>
      : GetScalarType<T[P], AggregateProjectImage[P]>
  }




  export type ProjectImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectImageWhereInput
    orderBy?: ProjectImageOrderByWithAggregationInput | ProjectImageOrderByWithAggregationInput[]
    by: ProjectImageScalarFieldEnum[] | ProjectImageScalarFieldEnum
    having?: ProjectImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectImageCountAggregateInputType | true
    _avg?: ProjectImageAvgAggregateInputType
    _sum?: ProjectImageSumAggregateInputType
    _min?: ProjectImageMinAggregateInputType
    _max?: ProjectImageMaxAggregateInputType
  }

  export type ProjectImageGroupByOutputType = {
    id: number
    projectId: number
    url: string
    category: string
    label: string | null
    order: number
    createdAt: Date
    _count: ProjectImageCountAggregateOutputType | null
    _avg: ProjectImageAvgAggregateOutputType | null
    _sum: ProjectImageSumAggregateOutputType | null
    _min: ProjectImageMinAggregateOutputType | null
    _max: ProjectImageMaxAggregateOutputType | null
  }

  type GetProjectImageGroupByPayload<T extends ProjectImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectImageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    url?: boolean
    category?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectImage"]>

  export type ProjectImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    url?: boolean
    category?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectImage"]>

  export type ProjectImageSelectScalar = {
    id?: boolean
    projectId?: boolean
    url?: boolean
    category?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type ProjectImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectImage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      url: string
      category: string
      label: string | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["projectImage"]>
    composites: {}
  }

  type ProjectImageGetPayload<S extends boolean | null | undefined | ProjectImageDefaultArgs> = $Result.GetResult<Prisma.$ProjectImagePayload, S>

  type ProjectImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectImageCountAggregateInputType | true
    }

  export interface ProjectImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectImage'], meta: { name: 'ProjectImage' } }
    /**
     * Find zero or one ProjectImage that matches the filter.
     * @param {ProjectImageFindUniqueArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectImageFindUniqueArgs>(args: SelectSubset<T, ProjectImageFindUniqueArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectImageFindUniqueOrThrowArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindFirstArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectImageFindFirstArgs>(args?: SelectSubset<T, ProjectImageFindFirstArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindFirstOrThrowArgs} args - Arguments to find a ProjectImage
     * @example
     * // Get one ProjectImage
     * const projectImage = await prisma.projectImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectImages
     * const projectImages = await prisma.projectImage.findMany()
     * 
     * // Get first 10 ProjectImages
     * const projectImages = await prisma.projectImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectImageWithIdOnly = await prisma.projectImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectImageFindManyArgs>(args?: SelectSubset<T, ProjectImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectImage.
     * @param {ProjectImageCreateArgs} args - Arguments to create a ProjectImage.
     * @example
     * // Create one ProjectImage
     * const ProjectImage = await prisma.projectImage.create({
     *   data: {
     *     // ... data to create a ProjectImage
     *   }
     * })
     * 
     */
    create<T extends ProjectImageCreateArgs>(args: SelectSubset<T, ProjectImageCreateArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectImages.
     * @param {ProjectImageCreateManyArgs} args - Arguments to create many ProjectImages.
     * @example
     * // Create many ProjectImages
     * const projectImage = await prisma.projectImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectImageCreateManyArgs>(args?: SelectSubset<T, ProjectImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectImages and returns the data saved in the database.
     * @param {ProjectImageCreateManyAndReturnArgs} args - Arguments to create many ProjectImages.
     * @example
     * // Create many ProjectImages
     * const projectImage = await prisma.projectImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectImages and only return the `id`
     * const projectImageWithIdOnly = await prisma.projectImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectImage.
     * @param {ProjectImageDeleteArgs} args - Arguments to delete one ProjectImage.
     * @example
     * // Delete one ProjectImage
     * const ProjectImage = await prisma.projectImage.delete({
     *   where: {
     *     // ... filter to delete one ProjectImage
     *   }
     * })
     * 
     */
    delete<T extends ProjectImageDeleteArgs>(args: SelectSubset<T, ProjectImageDeleteArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectImage.
     * @param {ProjectImageUpdateArgs} args - Arguments to update one ProjectImage.
     * @example
     * // Update one ProjectImage
     * const projectImage = await prisma.projectImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectImageUpdateArgs>(args: SelectSubset<T, ProjectImageUpdateArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectImages.
     * @param {ProjectImageDeleteManyArgs} args - Arguments to filter ProjectImages to delete.
     * @example
     * // Delete a few ProjectImages
     * const { count } = await prisma.projectImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectImageDeleteManyArgs>(args?: SelectSubset<T, ProjectImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectImages
     * const projectImage = await prisma.projectImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectImageUpdateManyArgs>(args: SelectSubset<T, ProjectImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectImage.
     * @param {ProjectImageUpsertArgs} args - Arguments to update or create a ProjectImage.
     * @example
     * // Update or create a ProjectImage
     * const projectImage = await prisma.projectImage.upsert({
     *   create: {
     *     // ... data to create a ProjectImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectImage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectImageUpsertArgs>(args: SelectSubset<T, ProjectImageUpsertArgs<ExtArgs>>): Prisma__ProjectImageClient<$Result.GetResult<Prisma.$ProjectImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageCountArgs} args - Arguments to filter ProjectImages to count.
     * @example
     * // Count the number of ProjectImages
     * const count = await prisma.projectImage.count({
     *   where: {
     *     // ... the filter for the ProjectImages we want to count
     *   }
     * })
    **/
    count<T extends ProjectImageCountArgs>(
      args?: Subset<T, ProjectImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectImageAggregateArgs>(args: Subset<T, ProjectImageAggregateArgs>): Prisma.PrismaPromise<GetProjectImageAggregateType<T>>

    /**
     * Group by ProjectImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectImageGroupByArgs} args - Group by arguments.
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
      T extends ProjectImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectImageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectImage model
   */
  readonly fields: ProjectImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProjectImage model
   */ 
  interface ProjectImageFieldRefs {
    readonly id: FieldRef<"ProjectImage", 'Int'>
    readonly projectId: FieldRef<"ProjectImage", 'Int'>
    readonly url: FieldRef<"ProjectImage", 'String'>
    readonly category: FieldRef<"ProjectImage", 'String'>
    readonly label: FieldRef<"ProjectImage", 'String'>
    readonly order: FieldRef<"ProjectImage", 'Int'>
    readonly createdAt: FieldRef<"ProjectImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectImage findUnique
   */
  export type ProjectImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage findUniqueOrThrow
   */
  export type ProjectImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage findFirst
   */
  export type ProjectImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectImages.
     */
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage findFirstOrThrow
   */
  export type ProjectImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImage to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectImages.
     */
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage findMany
   */
  export type ProjectImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectImages to fetch.
     */
    where?: ProjectImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectImages to fetch.
     */
    orderBy?: ProjectImageOrderByWithRelationInput | ProjectImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectImages.
     */
    cursor?: ProjectImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectImages.
     */
    skip?: number
    distinct?: ProjectImageScalarFieldEnum | ProjectImageScalarFieldEnum[]
  }

  /**
   * ProjectImage create
   */
  export type ProjectImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectImage.
     */
    data: XOR<ProjectImageCreateInput, ProjectImageUncheckedCreateInput>
  }

  /**
   * ProjectImage createMany
   */
  export type ProjectImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectImages.
     */
    data: ProjectImageCreateManyInput | ProjectImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectImage createManyAndReturn
   */
  export type ProjectImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectImages.
     */
    data: ProjectImageCreateManyInput | ProjectImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectImage update
   */
  export type ProjectImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectImage.
     */
    data: XOR<ProjectImageUpdateInput, ProjectImageUncheckedUpdateInput>
    /**
     * Choose, which ProjectImage to update.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage updateMany
   */
  export type ProjectImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectImages.
     */
    data: XOR<ProjectImageUpdateManyMutationInput, ProjectImageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectImages to update
     */
    where?: ProjectImageWhereInput
  }

  /**
   * ProjectImage upsert
   */
  export type ProjectImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectImage to update in case it exists.
     */
    where: ProjectImageWhereUniqueInput
    /**
     * In case the ProjectImage found by the `where` argument doesn't exist, create a new ProjectImage with this data.
     */
    create: XOR<ProjectImageCreateInput, ProjectImageUncheckedCreateInput>
    /**
     * In case the ProjectImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectImageUpdateInput, ProjectImageUncheckedUpdateInput>
  }

  /**
   * ProjectImage delete
   */
  export type ProjectImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
    /**
     * Filter which ProjectImage to delete.
     */
    where: ProjectImageWhereUniqueInput
  }

  /**
   * ProjectImage deleteMany
   */
  export type ProjectImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectImages to delete
     */
    where?: ProjectImageWhereInput
  }

  /**
   * ProjectImage without action
   */
  export type ProjectImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectImage
     */
    select?: ProjectImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectImageInclude<ExtArgs> | null
  }


  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    floorsCount: number | null
    apartmentsPerFloor: number | null
    totalSurface: number | null
  }

  export type BuildingSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    floorsCount: number | null
    apartmentsPerFloor: number | null
    totalSurface: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    floorsCount: number | null
    apartmentsPerFloor: number | null
    totalSurface: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    name: string | null
    floorsCount: number | null
    apartmentsPerFloor: number | null
    totalSurface: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    id?: true
    projectId?: true
    floorsCount?: true
    apartmentsPerFloor?: true
    totalSurface?: true
  }

  export type BuildingSumAggregateInputType = {
    id?: true
    projectId?: true
    floorsCount?: true
    apartmentsPerFloor?: true
    totalSurface?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    floorsCount?: true
    apartmentsPerFloor?: true
    totalSurface?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    floorsCount?: true
    apartmentsPerFloor?: true
    totalSurface?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    floorsCount?: true
    apartmentsPerFloor?: true
    totalSurface?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: number
    projectId: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface: number | null
    createdAt: Date
    updatedAt: Date
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    floorsCount?: boolean
    apartmentsPerFloor?: boolean
    totalSurface?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    apartments?: boolean | Building$apartmentsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    floorsCount?: boolean
    apartmentsPerFloor?: boolean
    totalSurface?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    floorsCount?: boolean
    apartmentsPerFloor?: boolean
    totalSurface?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    apartments?: boolean | Building$apartmentsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      apartments: Prisma.$ApartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      name: string
      floorsCount: number
      apartmentsPerFloor: number
      totalSurface: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
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
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    apartments<T extends Building$apartmentsArgs<ExtArgs> = {}>(args?: Subset<T, Building$apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Building model
   */ 
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'Int'>
    readonly projectId: FieldRef<"Building", 'Int'>
    readonly name: FieldRef<"Building", 'String'>
    readonly floorsCount: FieldRef<"Building", 'Int'>
    readonly apartmentsPerFloor: FieldRef<"Building", 'Int'>
    readonly totalSurface: FieldRef<"Building", 'Float'>
    readonly createdAt: FieldRef<"Building", 'DateTime'>
    readonly updatedAt: FieldRef<"Building", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
  }

  /**
   * Building.apartments
   */
  export type Building$apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    cursor?: ApartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
  }


  /**
   * Model Apartment
   */

  export type AggregateApartment = {
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  export type ApartmentAvgAggregateOutputType = {
    id: number | null
    buildingId: number | null
    floor: number | null
    unitNumber: number | null
    rooms: number | null
    salons: number | null
    kitchens: number | null
    bathrooms: number | null
    surface: number | null
    price: number | null
  }

  export type ApartmentSumAggregateOutputType = {
    id: number | null
    buildingId: number | null
    floor: number | null
    unitNumber: number | null
    rooms: number | null
    salons: number | null
    kitchens: number | null
    bathrooms: number | null
    surface: number | null
    price: number | null
  }

  export type ApartmentMinAggregateOutputType = {
    id: number | null
    buildingId: number | null
    floor: number | null
    unitNumber: number | null
    rooms: number | null
    salons: number | null
    kitchens: number | null
    bathrooms: number | null
    surface: number | null
    price: number | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ApartmentMaxAggregateOutputType = {
    id: number | null
    buildingId: number | null
    floor: number | null
    unitNumber: number | null
    rooms: number | null
    salons: number | null
    kitchens: number | null
    bathrooms: number | null
    surface: number | null
    price: number | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ApartmentCountAggregateOutputType = {
    id: number
    buildingId: number
    floor: number
    unitNumber: number
    rooms: number
    salons: number
    kitchens: number
    bathrooms: number
    surface: number
    price: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ApartmentAvgAggregateInputType = {
    id?: true
    buildingId?: true
    floor?: true
    unitNumber?: true
    rooms?: true
    salons?: true
    kitchens?: true
    bathrooms?: true
    surface?: true
    price?: true
  }

  export type ApartmentSumAggregateInputType = {
    id?: true
    buildingId?: true
    floor?: true
    unitNumber?: true
    rooms?: true
    salons?: true
    kitchens?: true
    bathrooms?: true
    surface?: true
    price?: true
  }

  export type ApartmentMinAggregateInputType = {
    id?: true
    buildingId?: true
    floor?: true
    unitNumber?: true
    rooms?: true
    salons?: true
    kitchens?: true
    bathrooms?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ApartmentMaxAggregateInputType = {
    id?: true
    buildingId?: true
    floor?: true
    unitNumber?: true
    rooms?: true
    salons?: true
    kitchens?: true
    bathrooms?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ApartmentCountAggregateInputType = {
    id?: true
    buildingId?: true
    floor?: true
    unitNumber?: true
    rooms?: true
    salons?: true
    kitchens?: true
    bathrooms?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartment to aggregate.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apartments
    **/
    _count?: true | ApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentMaxAggregateInputType
  }

  export type GetApartmentAggregateType<T extends ApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartment[P]>
      : GetScalarType<T[P], AggregateApartment[P]>
  }




  export type ApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithAggregationInput | ApartmentOrderByWithAggregationInput[]
    by: ApartmentScalarFieldEnum[] | ApartmentScalarFieldEnum
    having?: ApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentCountAggregateInputType | true
    _avg?: ApartmentAvgAggregateInputType
    _sum?: ApartmentSumAggregateInputType
    _min?: ApartmentMinAggregateInputType
    _max?: ApartmentMaxAggregateInputType
  }

  export type ApartmentGroupByOutputType = {
    id: number
    buildingId: number
    floor: number
    unitNumber: number
    rooms: number | null
    salons: number | null
    kitchens: number | null
    bathrooms: number | null
    surface: number | null
    price: number | null
    status: string
    updatedAt: Date
    createdAt: Date
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  type GetApartmentGroupByPayload<T extends ApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buildingId?: boolean
    floor?: boolean
    unitNumber?: boolean
    rooms?: boolean
    salons?: boolean
    kitchens?: boolean
    bathrooms?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buildingId?: boolean
    floor?: boolean
    unitNumber?: boolean
    rooms?: boolean
    salons?: boolean
    kitchens?: boolean
    bathrooms?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectScalar = {
    id?: boolean
    buildingId?: boolean
    floor?: boolean
    unitNumber?: boolean
    rooms?: boolean
    salons?: boolean
    kitchens?: boolean
    bathrooms?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }
  export type ApartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }

  export type $ApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apartment"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buildingId: number
      floor: number
      unitNumber: number
      rooms: number | null
      salons: number | null
      kitchens: number | null
      bathrooms: number | null
      surface: number | null
      price: number | null
      status: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["apartment"]>
    composites: {}
  }

  type ApartmentGetPayload<S extends boolean | null | undefined | ApartmentDefaultArgs> = $Result.GetResult<Prisma.$ApartmentPayload, S>

  type ApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApartmentCountAggregateInputType | true
    }

  export interface ApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apartment'], meta: { name: 'Apartment' } }
    /**
     * Find zero or one Apartment that matches the filter.
     * @param {ApartmentFindUniqueArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentFindUniqueArgs>(args: SelectSubset<T, ApartmentFindUniqueArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Apartment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApartmentFindUniqueOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Apartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentFindFirstArgs>(args?: SelectSubset<T, ApartmentFindFirstArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Apartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Apartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apartments
     * const apartments = await prisma.apartment.findMany()
     * 
     * // Get first 10 Apartments
     * const apartments = await prisma.apartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentWithIdOnly = await prisma.apartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentFindManyArgs>(args?: SelectSubset<T, ApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Apartment.
     * @param {ApartmentCreateArgs} args - Arguments to create a Apartment.
     * @example
     * // Create one Apartment
     * const Apartment = await prisma.apartment.create({
     *   data: {
     *     // ... data to create a Apartment
     *   }
     * })
     * 
     */
    create<T extends ApartmentCreateArgs>(args: SelectSubset<T, ApartmentCreateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Apartments.
     * @param {ApartmentCreateManyArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentCreateManyArgs>(args?: SelectSubset<T, ApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apartments and returns the data saved in the database.
     * @param {ApartmentCreateManyAndReturnArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apartments and only return the `id`
     * const apartmentWithIdOnly = await prisma.apartment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Apartment.
     * @param {ApartmentDeleteArgs} args - Arguments to delete one Apartment.
     * @example
     * // Delete one Apartment
     * const Apartment = await prisma.apartment.delete({
     *   where: {
     *     // ... filter to delete one Apartment
     *   }
     * })
     * 
     */
    delete<T extends ApartmentDeleteArgs>(args: SelectSubset<T, ApartmentDeleteArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Apartment.
     * @param {ApartmentUpdateArgs} args - Arguments to update one Apartment.
     * @example
     * // Update one Apartment
     * const apartment = await prisma.apartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentUpdateArgs>(args: SelectSubset<T, ApartmentUpdateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Apartments.
     * @param {ApartmentDeleteManyArgs} args - Arguments to filter Apartments to delete.
     * @example
     * // Delete a few Apartments
     * const { count } = await prisma.apartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentDeleteManyArgs>(args?: SelectSubset<T, ApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentUpdateManyArgs>(args: SelectSubset<T, ApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apartment.
     * @param {ApartmentUpsertArgs} args - Arguments to update or create a Apartment.
     * @example
     * // Update or create a Apartment
     * const apartment = await prisma.apartment.upsert({
     *   create: {
     *     // ... data to create a Apartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apartment we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentUpsertArgs>(args: SelectSubset<T, ApartmentUpsertArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentCountArgs} args - Arguments to filter Apartments to count.
     * @example
     * // Count the number of Apartments
     * const count = await prisma.apartment.count({
     *   where: {
     *     // ... the filter for the Apartments we want to count
     *   }
     * })
    **/
    count<T extends ApartmentCountArgs>(
      args?: Subset<T, ApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApartmentAggregateArgs>(args: Subset<T, ApartmentAggregateArgs>): Prisma.PrismaPromise<GetApartmentAggregateType<T>>

    /**
     * Group by Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentGroupByArgs} args - Group by arguments.
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
      T extends ApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apartment model
   */
  readonly fields: ApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends BuildingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuildingDefaultArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Apartment model
   */ 
  interface ApartmentFieldRefs {
    readonly id: FieldRef<"Apartment", 'Int'>
    readonly buildingId: FieldRef<"Apartment", 'Int'>
    readonly floor: FieldRef<"Apartment", 'Int'>
    readonly unitNumber: FieldRef<"Apartment", 'Int'>
    readonly rooms: FieldRef<"Apartment", 'Int'>
    readonly salons: FieldRef<"Apartment", 'Int'>
    readonly kitchens: FieldRef<"Apartment", 'Int'>
    readonly bathrooms: FieldRef<"Apartment", 'Int'>
    readonly surface: FieldRef<"Apartment", 'Float'>
    readonly price: FieldRef<"Apartment", 'Float'>
    readonly status: FieldRef<"Apartment", 'String'>
    readonly updatedAt: FieldRef<"Apartment", 'DateTime'>
    readonly createdAt: FieldRef<"Apartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Apartment findUnique
   */
  export type ApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findUniqueOrThrow
   */
  export type ApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findFirst
   */
  export type ApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findFirstOrThrow
   */
  export type ApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findMany
   */
  export type ApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartments to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment create
   */
  export type ApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Apartment.
     */
    data: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
  }

  /**
   * Apartment createMany
   */
  export type ApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apartment createManyAndReturn
   */
  export type ApartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Apartment update
   */
  export type ApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Apartment.
     */
    data: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
    /**
     * Choose, which Apartment to update.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment updateMany
   */
  export type ApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
  }

  /**
   * Apartment upsert
   */
  export type ApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Apartment to update in case it exists.
     */
    where: ApartmentWhereUniqueInput
    /**
     * In case the Apartment found by the `where` argument doesn't exist, create a new Apartment with this data.
     */
    create: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
    /**
     * In case the Apartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
  }

  /**
   * Apartment delete
   */
  export type ApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter which Apartment to delete.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment deleteMany
   */
  export type ApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartments to delete
     */
    where?: ApartmentWhereInput
  }

  /**
   * Apartment without action
   */
  export type ApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
  }


  /**
   * Model Parcel
   */

  export type AggregateParcel = {
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  export type ParcelAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    parcelNumber: number | null
    surface: number | null
    price: number | null
  }

  export type ParcelSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    parcelNumber: number | null
    surface: number | null
    price: number | null
  }

  export type ParcelMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    parcelNumber: number | null
    parcelCode: string | null
    usageType: string | null
    zoneType: string | null
    surface: number | null
    price: number | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ParcelMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    parcelNumber: number | null
    parcelCode: string | null
    usageType: string | null
    zoneType: string | null
    surface: number | null
    price: number | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ParcelCountAggregateOutputType = {
    id: number
    projectId: number
    parcelNumber: number
    parcelCode: number
    usageType: number
    zoneType: number
    surface: number
    price: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ParcelAvgAggregateInputType = {
    id?: true
    projectId?: true
    parcelNumber?: true
    surface?: true
    price?: true
  }

  export type ParcelSumAggregateInputType = {
    id?: true
    projectId?: true
    parcelNumber?: true
    surface?: true
    price?: true
  }

  export type ParcelMinAggregateInputType = {
    id?: true
    projectId?: true
    parcelNumber?: true
    parcelCode?: true
    usageType?: true
    zoneType?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ParcelMaxAggregateInputType = {
    id?: true
    projectId?: true
    parcelNumber?: true
    parcelCode?: true
    usageType?: true
    zoneType?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ParcelCountAggregateInputType = {
    id?: true
    projectId?: true
    parcelNumber?: true
    parcelCode?: true
    usageType?: true
    zoneType?: true
    surface?: true
    price?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ParcelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcel to aggregate.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcels
    **/
    _count?: true | ParcelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelMaxAggregateInputType
  }

  export type GetParcelAggregateType<T extends ParcelAggregateArgs> = {
        [P in keyof T & keyof AggregateParcel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcel[P]>
      : GetScalarType<T[P], AggregateParcel[P]>
  }




  export type ParcelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithAggregationInput | ParcelOrderByWithAggregationInput[]
    by: ParcelScalarFieldEnum[] | ParcelScalarFieldEnum
    having?: ParcelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelCountAggregateInputType | true
    _avg?: ParcelAvgAggregateInputType
    _sum?: ParcelSumAggregateInputType
    _min?: ParcelMinAggregateInputType
    _max?: ParcelMaxAggregateInputType
  }

  export type ParcelGroupByOutputType = {
    id: number
    projectId: number
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface: number | null
    price: number | null
    status: string
    updatedAt: Date
    createdAt: Date
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  type GetParcelGroupByPayload<T extends ParcelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelGroupByOutputType[P]>
        }
      >
    >


  export type ParcelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    parcelNumber?: boolean
    parcelCode?: boolean
    usageType?: boolean
    zoneType?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    parcelNumber?: boolean
    parcelCode?: boolean
    usageType?: boolean
    zoneType?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectScalar = {
    id?: boolean
    projectId?: boolean
    parcelNumber?: boolean
    parcelCode?: boolean
    usageType?: boolean
    zoneType?: boolean
    surface?: boolean
    price?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ParcelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ParcelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ParcelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcel"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      parcelNumber: number
      parcelCode: string
      usageType: string
      zoneType: string
      surface: number | null
      price: number | null
      status: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["parcel"]>
    composites: {}
  }

  type ParcelGetPayload<S extends boolean | null | undefined | ParcelDefaultArgs> = $Result.GetResult<Prisma.$ParcelPayload, S>

  type ParcelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParcelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParcelCountAggregateInputType | true
    }

  export interface ParcelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcel'], meta: { name: 'Parcel' } }
    /**
     * Find zero or one Parcel that matches the filter.
     * @param {ParcelFindUniqueArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelFindUniqueArgs>(args: SelectSubset<T, ParcelFindUniqueArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Parcel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParcelFindUniqueOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Parcel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelFindFirstArgs>(args?: SelectSubset<T, ParcelFindFirstArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Parcel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcel.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelWithIdOnly = await prisma.parcel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelFindManyArgs>(args?: SelectSubset<T, ParcelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Parcel.
     * @param {ParcelCreateArgs} args - Arguments to create a Parcel.
     * @example
     * // Create one Parcel
     * const Parcel = await prisma.parcel.create({
     *   data: {
     *     // ... data to create a Parcel
     *   }
     * })
     * 
     */
    create<T extends ParcelCreateArgs>(args: SelectSubset<T, ParcelCreateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Parcels.
     * @param {ParcelCreateManyArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelCreateManyArgs>(args?: SelectSubset<T, ParcelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcels and returns the data saved in the database.
     * @param {ParcelCreateManyAndReturnArgs} args - Arguments to create many Parcels.
     * @example
     * // Create many Parcels
     * const parcel = await prisma.parcel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcels and only return the `id`
     * const parcelWithIdOnly = await prisma.parcel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Parcel.
     * @param {ParcelDeleteArgs} args - Arguments to delete one Parcel.
     * @example
     * // Delete one Parcel
     * const Parcel = await prisma.parcel.delete({
     *   where: {
     *     // ... filter to delete one Parcel
     *   }
     * })
     * 
     */
    delete<T extends ParcelDeleteArgs>(args: SelectSubset<T, ParcelDeleteArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Parcel.
     * @param {ParcelUpdateArgs} args - Arguments to update one Parcel.
     * @example
     * // Update one Parcel
     * const parcel = await prisma.parcel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelUpdateArgs>(args: SelectSubset<T, ParcelUpdateArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Parcels.
     * @param {ParcelDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelDeleteManyArgs>(args?: SelectSubset<T, ParcelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelUpdateManyArgs>(args: SelectSubset<T, ParcelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parcel.
     * @param {ParcelUpsertArgs} args - Arguments to update or create a Parcel.
     * @example
     * // Update or create a Parcel
     * const parcel = await prisma.parcel.upsert({
     *   create: {
     *     // ... data to create a Parcel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcel we want to update
     *   }
     * })
     */
    upsert<T extends ParcelUpsertArgs>(args: SelectSubset<T, ParcelUpsertArgs<ExtArgs>>): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcel.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends ParcelCountArgs>(
      args?: Subset<T, ParcelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParcelAggregateArgs>(args: Subset<T, ParcelAggregateArgs>): Prisma.PrismaPromise<GetParcelAggregateType<T>>

    /**
     * Group by Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelGroupByArgs} args - Group by arguments.
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
      T extends ParcelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelGroupByArgs['orderBy'] }
        : { orderBy?: ParcelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParcelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcel model
   */
  readonly fields: ParcelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Parcel model
   */ 
  interface ParcelFieldRefs {
    readonly id: FieldRef<"Parcel", 'Int'>
    readonly projectId: FieldRef<"Parcel", 'Int'>
    readonly parcelNumber: FieldRef<"Parcel", 'Int'>
    readonly parcelCode: FieldRef<"Parcel", 'String'>
    readonly usageType: FieldRef<"Parcel", 'String'>
    readonly zoneType: FieldRef<"Parcel", 'String'>
    readonly surface: FieldRef<"Parcel", 'Float'>
    readonly price: FieldRef<"Parcel", 'Float'>
    readonly status: FieldRef<"Parcel", 'String'>
    readonly updatedAt: FieldRef<"Parcel", 'DateTime'>
    readonly createdAt: FieldRef<"Parcel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcel findUnique
   */
  export type ParcelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findUniqueOrThrow
   */
  export type ParcelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel findFirst
   */
  export type ParcelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findFirstOrThrow
   */
  export type ParcelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel findMany
   */
  export type ParcelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcels to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }

  /**
   * Parcel create
   */
  export type ParcelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcel.
     */
    data: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
  }

  /**
   * Parcel createMany
   */
  export type ParcelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parcel createManyAndReturn
   */
  export type ParcelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcel update
   */
  export type ParcelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcel.
     */
    data: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
    /**
     * Choose, which Parcel to update.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel updateMany
   */
  export type ParcelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
  }

  /**
   * Parcel upsert
   */
  export type ParcelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcel to update in case it exists.
     */
    where: ParcelWhereUniqueInput
    /**
     * In case the Parcel found by the `where` argument doesn't exist, create a new Parcel with this data.
     */
    create: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
    /**
     * In case the Parcel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
  }

  /**
   * Parcel delete
   */
  export type ParcelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter which Parcel to delete.
     */
    where: ParcelWhereUniqueInput
  }

  /**
   * Parcel deleteMany
   */
  export type ParcelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcels to delete
     */
    where?: ParcelWhereInput
  }

  /**
   * Parcel without action
   */
  export type ParcelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model ReservationLog
   */

  export type AggregateReservationLog = {
    _count: ReservationLogCountAggregateOutputType | null
    _avg: ReservationLogAvgAggregateOutputType | null
    _sum: ReservationLogSumAggregateOutputType | null
    _min: ReservationLogMinAggregateOutputType | null
    _max: ReservationLogMaxAggregateOutputType | null
  }

  export type ReservationLogAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    unitId: number | null
  }

  export type ReservationLogSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    unitId: number | null
  }

  export type ReservationLogMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    unitType: string | null
    unitId: number | null
    oldStatus: string | null
    newStatus: string | null
    messageSent: string | null
    createdAt: Date | null
  }

  export type ReservationLogMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    unitType: string | null
    unitId: number | null
    oldStatus: string | null
    newStatus: string | null
    messageSent: string | null
    createdAt: Date | null
  }

  export type ReservationLogCountAggregateOutputType = {
    id: number
    adminId: number
    unitType: number
    unitId: number
    oldStatus: number
    newStatus: number
    messageSent: number
    createdAt: number
    _all: number
  }


  export type ReservationLogAvgAggregateInputType = {
    id?: true
    adminId?: true
    unitId?: true
  }

  export type ReservationLogSumAggregateInputType = {
    id?: true
    adminId?: true
    unitId?: true
  }

  export type ReservationLogMinAggregateInputType = {
    id?: true
    adminId?: true
    unitType?: true
    unitId?: true
    oldStatus?: true
    newStatus?: true
    messageSent?: true
    createdAt?: true
  }

  export type ReservationLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    unitType?: true
    unitId?: true
    oldStatus?: true
    newStatus?: true
    messageSent?: true
    createdAt?: true
  }

  export type ReservationLogCountAggregateInputType = {
    id?: true
    adminId?: true
    unitType?: true
    unitId?: true
    oldStatus?: true
    newStatus?: true
    messageSent?: true
    createdAt?: true
    _all?: true
  }

  export type ReservationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationLog to aggregate.
     */
    where?: ReservationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationLogs to fetch.
     */
    orderBy?: ReservationLogOrderByWithRelationInput | ReservationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationLogs
    **/
    _count?: true | ReservationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationLogMaxAggregateInputType
  }

  export type GetReservationLogAggregateType<T extends ReservationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationLog[P]>
      : GetScalarType<T[P], AggregateReservationLog[P]>
  }




  export type ReservationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationLogWhereInput
    orderBy?: ReservationLogOrderByWithAggregationInput | ReservationLogOrderByWithAggregationInput[]
    by: ReservationLogScalarFieldEnum[] | ReservationLogScalarFieldEnum
    having?: ReservationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationLogCountAggregateInputType | true
    _avg?: ReservationLogAvgAggregateInputType
    _sum?: ReservationLogSumAggregateInputType
    _min?: ReservationLogMinAggregateInputType
    _max?: ReservationLogMaxAggregateInputType
  }

  export type ReservationLogGroupByOutputType = {
    id: number
    adminId: number
    unitType: string
    unitId: number
    oldStatus: string
    newStatus: string
    messageSent: string | null
    createdAt: Date
    _count: ReservationLogCountAggregateOutputType | null
    _avg: ReservationLogAvgAggregateOutputType | null
    _sum: ReservationLogSumAggregateOutputType | null
    _min: ReservationLogMinAggregateOutputType | null
    _max: ReservationLogMaxAggregateOutputType | null
  }

  type GetReservationLogGroupByPayload<T extends ReservationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationLogGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationLogGroupByOutputType[P]>
        }
      >
    >


  export type ReservationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    unitType?: boolean
    unitId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    messageSent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reservationLog"]>

  export type ReservationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    unitType?: boolean
    unitId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    messageSent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reservationLog"]>

  export type ReservationLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    unitType?: boolean
    unitId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    messageSent?: boolean
    createdAt?: boolean
  }


  export type $ReservationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      unitType: string
      unitId: number
      oldStatus: string
      newStatus: string
      messageSent: string | null
      createdAt: Date
    }, ExtArgs["result"]["reservationLog"]>
    composites: {}
  }

  type ReservationLogGetPayload<S extends boolean | null | undefined | ReservationLogDefaultArgs> = $Result.GetResult<Prisma.$ReservationLogPayload, S>

  type ReservationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationLogCountAggregateInputType | true
    }

  export interface ReservationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationLog'], meta: { name: 'ReservationLog' } }
    /**
     * Find zero or one ReservationLog that matches the filter.
     * @param {ReservationLogFindUniqueArgs} args - Arguments to find a ReservationLog
     * @example
     * // Get one ReservationLog
     * const reservationLog = await prisma.reservationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationLogFindUniqueArgs>(args: SelectSubset<T, ReservationLogFindUniqueArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationLogFindUniqueOrThrowArgs} args - Arguments to find a ReservationLog
     * @example
     * // Get one ReservationLog
     * const reservationLog = await prisma.reservationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogFindFirstArgs} args - Arguments to find a ReservationLog
     * @example
     * // Get one ReservationLog
     * const reservationLog = await prisma.reservationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationLogFindFirstArgs>(args?: SelectSubset<T, ReservationLogFindFirstArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogFindFirstOrThrowArgs} args - Arguments to find a ReservationLog
     * @example
     * // Get one ReservationLog
     * const reservationLog = await prisma.reservationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationLogs
     * const reservationLogs = await prisma.reservationLog.findMany()
     * 
     * // Get first 10 ReservationLogs
     * const reservationLogs = await prisma.reservationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationLogWithIdOnly = await prisma.reservationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationLogFindManyArgs>(args?: SelectSubset<T, ReservationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservationLog.
     * @param {ReservationLogCreateArgs} args - Arguments to create a ReservationLog.
     * @example
     * // Create one ReservationLog
     * const ReservationLog = await prisma.reservationLog.create({
     *   data: {
     *     // ... data to create a ReservationLog
     *   }
     * })
     * 
     */
    create<T extends ReservationLogCreateArgs>(args: SelectSubset<T, ReservationLogCreateArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservationLogs.
     * @param {ReservationLogCreateManyArgs} args - Arguments to create many ReservationLogs.
     * @example
     * // Create many ReservationLogs
     * const reservationLog = await prisma.reservationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationLogCreateManyArgs>(args?: SelectSubset<T, ReservationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationLogs and returns the data saved in the database.
     * @param {ReservationLogCreateManyAndReturnArgs} args - Arguments to create many ReservationLogs.
     * @example
     * // Create many ReservationLogs
     * const reservationLog = await prisma.reservationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationLogs and only return the `id`
     * const reservationLogWithIdOnly = await prisma.reservationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservationLog.
     * @param {ReservationLogDeleteArgs} args - Arguments to delete one ReservationLog.
     * @example
     * // Delete one ReservationLog
     * const ReservationLog = await prisma.reservationLog.delete({
     *   where: {
     *     // ... filter to delete one ReservationLog
     *   }
     * })
     * 
     */
    delete<T extends ReservationLogDeleteArgs>(args: SelectSubset<T, ReservationLogDeleteArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservationLog.
     * @param {ReservationLogUpdateArgs} args - Arguments to update one ReservationLog.
     * @example
     * // Update one ReservationLog
     * const reservationLog = await prisma.reservationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationLogUpdateArgs>(args: SelectSubset<T, ReservationLogUpdateArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservationLogs.
     * @param {ReservationLogDeleteManyArgs} args - Arguments to filter ReservationLogs to delete.
     * @example
     * // Delete a few ReservationLogs
     * const { count } = await prisma.reservationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationLogDeleteManyArgs>(args?: SelectSubset<T, ReservationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationLogs
     * const reservationLog = await prisma.reservationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationLogUpdateManyArgs>(args: SelectSubset<T, ReservationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationLog.
     * @param {ReservationLogUpsertArgs} args - Arguments to update or create a ReservationLog.
     * @example
     * // Update or create a ReservationLog
     * const reservationLog = await prisma.reservationLog.upsert({
     *   create: {
     *     // ... data to create a ReservationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationLog we want to update
     *   }
     * })
     */
    upsert<T extends ReservationLogUpsertArgs>(args: SelectSubset<T, ReservationLogUpsertArgs<ExtArgs>>): Prisma__ReservationLogClient<$Result.GetResult<Prisma.$ReservationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogCountArgs} args - Arguments to filter ReservationLogs to count.
     * @example
     * // Count the number of ReservationLogs
     * const count = await prisma.reservationLog.count({
     *   where: {
     *     // ... the filter for the ReservationLogs we want to count
     *   }
     * })
    **/
    count<T extends ReservationLogCountArgs>(
      args?: Subset<T, ReservationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationLogAggregateArgs>(args: Subset<T, ReservationLogAggregateArgs>): Prisma.PrismaPromise<GetReservationLogAggregateType<T>>

    /**
     * Group by ReservationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationLogGroupByArgs} args - Group by arguments.
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
      T extends ReservationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationLogGroupByArgs['orderBy'] }
        : { orderBy?: ReservationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationLog model
   */
  readonly fields: ReservationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ReservationLog model
   */ 
  interface ReservationLogFieldRefs {
    readonly id: FieldRef<"ReservationLog", 'Int'>
    readonly adminId: FieldRef<"ReservationLog", 'Int'>
    readonly unitType: FieldRef<"ReservationLog", 'String'>
    readonly unitId: FieldRef<"ReservationLog", 'Int'>
    readonly oldStatus: FieldRef<"ReservationLog", 'String'>
    readonly newStatus: FieldRef<"ReservationLog", 'String'>
    readonly messageSent: FieldRef<"ReservationLog", 'String'>
    readonly createdAt: FieldRef<"ReservationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservationLog findUnique
   */
  export type ReservationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter, which ReservationLog to fetch.
     */
    where: ReservationLogWhereUniqueInput
  }

  /**
   * ReservationLog findUniqueOrThrow
   */
  export type ReservationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter, which ReservationLog to fetch.
     */
    where: ReservationLogWhereUniqueInput
  }

  /**
   * ReservationLog findFirst
   */
  export type ReservationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter, which ReservationLog to fetch.
     */
    where?: ReservationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationLogs to fetch.
     */
    orderBy?: ReservationLogOrderByWithRelationInput | ReservationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationLogs.
     */
    cursor?: ReservationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationLogs.
     */
    distinct?: ReservationLogScalarFieldEnum | ReservationLogScalarFieldEnum[]
  }

  /**
   * ReservationLog findFirstOrThrow
   */
  export type ReservationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter, which ReservationLog to fetch.
     */
    where?: ReservationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationLogs to fetch.
     */
    orderBy?: ReservationLogOrderByWithRelationInput | ReservationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationLogs.
     */
    cursor?: ReservationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationLogs.
     */
    distinct?: ReservationLogScalarFieldEnum | ReservationLogScalarFieldEnum[]
  }

  /**
   * ReservationLog findMany
   */
  export type ReservationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter, which ReservationLogs to fetch.
     */
    where?: ReservationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationLogs to fetch.
     */
    orderBy?: ReservationLogOrderByWithRelationInput | ReservationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationLogs.
     */
    cursor?: ReservationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationLogs.
     */
    skip?: number
    distinct?: ReservationLogScalarFieldEnum | ReservationLogScalarFieldEnum[]
  }

  /**
   * ReservationLog create
   */
  export type ReservationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ReservationLog.
     */
    data: XOR<ReservationLogCreateInput, ReservationLogUncheckedCreateInput>
  }

  /**
   * ReservationLog createMany
   */
  export type ReservationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationLogs.
     */
    data: ReservationLogCreateManyInput | ReservationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationLog createManyAndReturn
   */
  export type ReservationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservationLogs.
     */
    data: ReservationLogCreateManyInput | ReservationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationLog update
   */
  export type ReservationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ReservationLog.
     */
    data: XOR<ReservationLogUpdateInput, ReservationLogUncheckedUpdateInput>
    /**
     * Choose, which ReservationLog to update.
     */
    where: ReservationLogWhereUniqueInput
  }

  /**
   * ReservationLog updateMany
   */
  export type ReservationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationLogs.
     */
    data: XOR<ReservationLogUpdateManyMutationInput, ReservationLogUncheckedUpdateManyInput>
    /**
     * Filter which ReservationLogs to update
     */
    where?: ReservationLogWhereInput
  }

  /**
   * ReservationLog upsert
   */
  export type ReservationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ReservationLog to update in case it exists.
     */
    where: ReservationLogWhereUniqueInput
    /**
     * In case the ReservationLog found by the `where` argument doesn't exist, create a new ReservationLog with this data.
     */
    create: XOR<ReservationLogCreateInput, ReservationLogUncheckedCreateInput>
    /**
     * In case the ReservationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationLogUpdateInput, ReservationLogUncheckedUpdateInput>
  }

  /**
   * ReservationLog delete
   */
  export type ReservationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
    /**
     * Filter which ReservationLog to delete.
     */
    where: ReservationLogWhereUniqueInput
  }

  /**
   * ReservationLog deleteMany
   */
  export type ReservationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationLogs to delete
     */
    where?: ReservationLogWhereInput
  }

  /**
   * ReservationLog without action
   */
  export type ReservationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationLog
     */
    select?: ReservationLogSelect<ExtArgs> | null
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


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    heroImage: 'heroImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    name: 'name',
    slug: 'slug',
    type: 'type',
    status: 'status',
    description: 'description',
    address: 'address',
    totalArea: 'totalArea',
    startDate: 'startDate',
    endDate: 'endDate',
    heroImage: 'heroImage',
    mainImage: 'mainImage',
    whatsapp: 'whatsapp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectImageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    url: 'url',
    category: 'category',
    label: 'label',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type ProjectImageScalarFieldEnum = (typeof ProjectImageScalarFieldEnum)[keyof typeof ProjectImageScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    floorsCount: 'floorsCount',
    apartmentsPerFloor: 'apartmentsPerFloor',
    totalSurface: 'totalSurface',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const ApartmentScalarFieldEnum: {
    id: 'id',
    buildingId: 'buildingId',
    floor: 'floor',
    unitNumber: 'unitNumber',
    rooms: 'rooms',
    salons: 'salons',
    kitchens: 'kitchens',
    bathrooms: 'bathrooms',
    surface: 'surface',
    price: 'price',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum]


  export const ParcelScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    parcelNumber: 'parcelNumber',
    parcelCode: 'parcelCode',
    usageType: 'usageType',
    zoneType: 'zoneType',
    surface: 'surface',
    price: 'price',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ParcelScalarFieldEnum = (typeof ParcelScalarFieldEnum)[keyof typeof ParcelScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ReservationLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    unitType: 'unitType',
    unitId: 'unitId',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    messageSent: 'messageSent',
    createdAt: 'createdAt'
  };

  export type ReservationLogScalarFieldEnum = (typeof ReservationLogScalarFieldEnum)[keyof typeof ReservationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    slug?: StringFilter<"City"> | string
    heroImage?: StringNullableFilter<"City"> | string | null
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    heroImage?: StringNullableFilter<"City"> | string | null
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "slug">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    heroImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    slug?: StringWithAggregatesFilter<"City"> | string
    heroImage?: StringNullableWithAggregatesFilter<"City"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    cityId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    type?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    address?: StringNullableFilter<"Project"> | string | null
    totalArea?: FloatNullableFilter<"Project"> | number | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    heroImage?: StringNullableFilter<"Project"> | string | null
    mainImage?: StringNullableFilter<"Project"> | string | null
    whatsapp?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    buildings?: BuildingListRelationFilter
    parcels?: ParcelListRelationFilter
    images?: ProjectImageListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    buildings?: BuildingOrderByRelationAggregateInput
    parcels?: ParcelOrderByRelationAggregateInput
    images?: ProjectImageOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    cityId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    type?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    address?: StringNullableFilter<"Project"> | string | null
    totalArea?: FloatNullableFilter<"Project"> | number | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    heroImage?: StringNullableFilter<"Project"> | string | null
    mainImage?: StringNullableFilter<"Project"> | string | null
    whatsapp?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    buildings?: BuildingListRelationFilter
    parcels?: ParcelListRelationFilter
    images?: ProjectImageListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    totalArea?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    cityId?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    type?: StringWithAggregatesFilter<"Project"> | string
    status?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    address?: StringNullableWithAggregatesFilter<"Project"> | string | null
    totalArea?: FloatNullableWithAggregatesFilter<"Project"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    heroImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    mainImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    whatsapp?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectImageWhereInput = {
    AND?: ProjectImageWhereInput | ProjectImageWhereInput[]
    OR?: ProjectImageWhereInput[]
    NOT?: ProjectImageWhereInput | ProjectImageWhereInput[]
    id?: IntFilter<"ProjectImage"> | number
    projectId?: IntFilter<"ProjectImage"> | number
    url?: StringFilter<"ProjectImage"> | string
    category?: StringFilter<"ProjectImage"> | string
    label?: StringNullableFilter<"ProjectImage"> | string | null
    order?: IntFilter<"ProjectImage"> | number
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ProjectImageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    label?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectImageWhereInput | ProjectImageWhereInput[]
    OR?: ProjectImageWhereInput[]
    NOT?: ProjectImageWhereInput | ProjectImageWhereInput[]
    projectId?: IntFilter<"ProjectImage"> | number
    url?: StringFilter<"ProjectImage"> | string
    category?: StringFilter<"ProjectImage"> | string
    label?: StringNullableFilter<"ProjectImage"> | string | null
    order?: IntFilter<"ProjectImage"> | number
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectImageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    label?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectImageCountOrderByAggregateInput
    _avg?: ProjectImageAvgOrderByAggregateInput
    _max?: ProjectImageMaxOrderByAggregateInput
    _min?: ProjectImageMinOrderByAggregateInput
    _sum?: ProjectImageSumOrderByAggregateInput
  }

  export type ProjectImageScalarWhereWithAggregatesInput = {
    AND?: ProjectImageScalarWhereWithAggregatesInput | ProjectImageScalarWhereWithAggregatesInput[]
    OR?: ProjectImageScalarWhereWithAggregatesInput[]
    NOT?: ProjectImageScalarWhereWithAggregatesInput | ProjectImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectImage"> | number
    projectId?: IntWithAggregatesFilter<"ProjectImage"> | number
    url?: StringWithAggregatesFilter<"ProjectImage"> | string
    category?: StringWithAggregatesFilter<"ProjectImage"> | string
    label?: StringNullableWithAggregatesFilter<"ProjectImage"> | string | null
    order?: IntWithAggregatesFilter<"ProjectImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectImage"> | Date | string
  }

  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: IntFilter<"Building"> | number
    projectId?: IntFilter<"Building"> | number
    name?: StringFilter<"Building"> | string
    floorsCount?: IntFilter<"Building"> | number
    apartmentsPerFloor?: IntFilter<"Building"> | number
    totalSurface?: FloatNullableFilter<"Building"> | number | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    apartments?: ApartmentListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    apartments?: ApartmentOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    projectId?: IntFilter<"Building"> | number
    name?: StringFilter<"Building"> | string
    floorsCount?: IntFilter<"Building"> | number
    apartmentsPerFloor?: IntFilter<"Building"> | number
    totalSurface?: FloatNullableFilter<"Building"> | number | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    apartments?: ApartmentListRelationFilter
  }, "id">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Building"> | number
    projectId?: IntWithAggregatesFilter<"Building"> | number
    name?: StringWithAggregatesFilter<"Building"> | string
    floorsCount?: IntWithAggregatesFilter<"Building"> | number
    apartmentsPerFloor?: IntWithAggregatesFilter<"Building"> | number
    totalSurface?: FloatNullableWithAggregatesFilter<"Building"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Building"> | Date | string
  }

  export type ApartmentWhereInput = {
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    id?: IntFilter<"Apartment"> | number
    buildingId?: IntFilter<"Apartment"> | number
    floor?: IntFilter<"Apartment"> | number
    unitNumber?: IntFilter<"Apartment"> | number
    rooms?: IntNullableFilter<"Apartment"> | number | null
    salons?: IntNullableFilter<"Apartment"> | number | null
    kitchens?: IntNullableFilter<"Apartment"> | number | null
    bathrooms?: IntNullableFilter<"Apartment"> | number | null
    surface?: FloatNullableFilter<"Apartment"> | number | null
    price?: FloatNullableFilter<"Apartment"> | number | null
    status?: StringFilter<"Apartment"> | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
  }

  export type ApartmentOrderByWithRelationInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrderInput | SortOrder
    salons?: SortOrderInput | SortOrder
    kitchens?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    building?: BuildingOrderByWithRelationInput
  }

  export type ApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    buildingId_floor_unitNumber?: ApartmentBuildingIdFloorUnitNumberCompoundUniqueInput
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    buildingId?: IntFilter<"Apartment"> | number
    floor?: IntFilter<"Apartment"> | number
    unitNumber?: IntFilter<"Apartment"> | number
    rooms?: IntNullableFilter<"Apartment"> | number | null
    salons?: IntNullableFilter<"Apartment"> | number | null
    kitchens?: IntNullableFilter<"Apartment"> | number | null
    bathrooms?: IntNullableFilter<"Apartment"> | number | null
    surface?: FloatNullableFilter<"Apartment"> | number | null
    price?: FloatNullableFilter<"Apartment"> | number | null
    status?: StringFilter<"Apartment"> | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
  }, "id" | "buildingId_floor_unitNumber">

  export type ApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrderInput | SortOrder
    salons?: SortOrderInput | SortOrder
    kitchens?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ApartmentCountOrderByAggregateInput
    _avg?: ApartmentAvgOrderByAggregateInput
    _max?: ApartmentMaxOrderByAggregateInput
    _min?: ApartmentMinOrderByAggregateInput
    _sum?: ApartmentSumOrderByAggregateInput
  }

  export type ApartmentScalarWhereWithAggregatesInput = {
    AND?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    OR?: ApartmentScalarWhereWithAggregatesInput[]
    NOT?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Apartment"> | number
    buildingId?: IntWithAggregatesFilter<"Apartment"> | number
    floor?: IntWithAggregatesFilter<"Apartment"> | number
    unitNumber?: IntWithAggregatesFilter<"Apartment"> | number
    rooms?: IntNullableWithAggregatesFilter<"Apartment"> | number | null
    salons?: IntNullableWithAggregatesFilter<"Apartment"> | number | null
    kitchens?: IntNullableWithAggregatesFilter<"Apartment"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Apartment"> | number | null
    surface?: FloatNullableWithAggregatesFilter<"Apartment"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Apartment"> | number | null
    status?: StringWithAggregatesFilter<"Apartment"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
  }

  export type ParcelWhereInput = {
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    id?: IntFilter<"Parcel"> | number
    projectId?: IntFilter<"Parcel"> | number
    parcelNumber?: IntFilter<"Parcel"> | number
    parcelCode?: StringFilter<"Parcel"> | string
    usageType?: StringFilter<"Parcel"> | string
    zoneType?: StringFilter<"Parcel"> | string
    surface?: FloatNullableFilter<"Parcel"> | number | null
    price?: FloatNullableFilter<"Parcel"> | number | null
    status?: StringFilter<"Parcel"> | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ParcelOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    parcelCode?: SortOrder
    usageType?: SortOrder
    zoneType?: SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ParcelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_parcelNumber_parcelCode?: ParcelProjectIdParcelNumberParcelCodeCompoundUniqueInput
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    projectId?: IntFilter<"Parcel"> | number
    parcelNumber?: IntFilter<"Parcel"> | number
    parcelCode?: StringFilter<"Parcel"> | string
    usageType?: StringFilter<"Parcel"> | string
    zoneType?: StringFilter<"Parcel"> | string
    surface?: FloatNullableFilter<"Parcel"> | number | null
    price?: FloatNullableFilter<"Parcel"> | number | null
    status?: StringFilter<"Parcel"> | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_parcelNumber_parcelCode">

  export type ParcelOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    parcelCode?: SortOrder
    usageType?: SortOrder
    zoneType?: SortOrder
    surface?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ParcelCountOrderByAggregateInput
    _avg?: ParcelAvgOrderByAggregateInput
    _max?: ParcelMaxOrderByAggregateInput
    _min?: ParcelMinOrderByAggregateInput
    _sum?: ParcelSumOrderByAggregateInput
  }

  export type ParcelScalarWhereWithAggregatesInput = {
    AND?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    OR?: ParcelScalarWhereWithAggregatesInput[]
    NOT?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parcel"> | number
    projectId?: IntWithAggregatesFilter<"Parcel"> | number
    parcelNumber?: IntWithAggregatesFilter<"Parcel"> | number
    parcelCode?: StringWithAggregatesFilter<"Parcel"> | string
    usageType?: StringWithAggregatesFilter<"Parcel"> | string
    zoneType?: StringWithAggregatesFilter<"Parcel"> | string
    surface?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    status?: StringWithAggregatesFilter<"Parcel"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    username?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    passwordHash?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ReservationLogWhereInput = {
    AND?: ReservationLogWhereInput | ReservationLogWhereInput[]
    OR?: ReservationLogWhereInput[]
    NOT?: ReservationLogWhereInput | ReservationLogWhereInput[]
    id?: IntFilter<"ReservationLog"> | number
    adminId?: IntFilter<"ReservationLog"> | number
    unitType?: StringFilter<"ReservationLog"> | string
    unitId?: IntFilter<"ReservationLog"> | number
    oldStatus?: StringFilter<"ReservationLog"> | string
    newStatus?: StringFilter<"ReservationLog"> | string
    messageSent?: StringNullableFilter<"ReservationLog"> | string | null
    createdAt?: DateTimeFilter<"ReservationLog"> | Date | string
  }

  export type ReservationLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitType?: SortOrder
    unitId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    messageSent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ReservationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationLogWhereInput | ReservationLogWhereInput[]
    OR?: ReservationLogWhereInput[]
    NOT?: ReservationLogWhereInput | ReservationLogWhereInput[]
    adminId?: IntFilter<"ReservationLog"> | number
    unitType?: StringFilter<"ReservationLog"> | string
    unitId?: IntFilter<"ReservationLog"> | number
    oldStatus?: StringFilter<"ReservationLog"> | string
    newStatus?: StringFilter<"ReservationLog"> | string
    messageSent?: StringNullableFilter<"ReservationLog"> | string | null
    createdAt?: DateTimeFilter<"ReservationLog"> | Date | string
  }, "id">

  export type ReservationLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitType?: SortOrder
    unitId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    messageSent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReservationLogCountOrderByAggregateInput
    _avg?: ReservationLogAvgOrderByAggregateInput
    _max?: ReservationLogMaxOrderByAggregateInput
    _min?: ReservationLogMinOrderByAggregateInput
    _sum?: ReservationLogSumOrderByAggregateInput
  }

  export type ReservationLogScalarWhereWithAggregatesInput = {
    AND?: ReservationLogScalarWhereWithAggregatesInput | ReservationLogScalarWhereWithAggregatesInput[]
    OR?: ReservationLogScalarWhereWithAggregatesInput[]
    NOT?: ReservationLogScalarWhereWithAggregatesInput | ReservationLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReservationLog"> | number
    adminId?: IntWithAggregatesFilter<"ReservationLog"> | number
    unitType?: StringWithAggregatesFilter<"ReservationLog"> | string
    unitId?: IntWithAggregatesFilter<"ReservationLog"> | number
    oldStatus?: StringWithAggregatesFilter<"ReservationLog"> | string
    newStatus?: StringWithAggregatesFilter<"ReservationLog"> | string
    messageSent?: StringNullableWithAggregatesFilter<"ReservationLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReservationLog"> | Date | string
  }

  export type CityCreateInput = {
    name: string
    slug: string
    heroImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    heroImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    name: string
    slug: string
    heroImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutProjectsInput
    buildings?: BuildingCreateNestedManyWithoutProjectInput
    parcels?: ParcelCreateNestedManyWithoutProjectInput
    images?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    cityId: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutProjectInput
    parcels?: ParcelUncheckedCreateNestedManyWithoutProjectInput
    images?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutProjectsNestedInput
    buildings?: BuildingUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUncheckedUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    cityId: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageCreateInput = {
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutImagesInput
  }

  export type ProjectImageUncheckedCreateInput = {
    id?: number
    projectId: number
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ProjectImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProjectImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageCreateManyInput = {
    id?: number
    projectId: number
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ProjectImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateInput = {
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBuildingsInput
    apartments?: ApartmentCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: number
    projectId: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apartments?: ApartmentUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBuildingsNestedInput
    apartments?: ApartmentUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apartments?: ApartmentUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    id?: number
    projectId: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentCreateInput = {
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    building: BuildingCreateNestedOneWithoutApartmentsInput
  }

  export type ApartmentUncheckedCreateInput = {
    id?: number
    buildingId: number
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ApartmentUpdateInput = {
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    building?: BuildingUpdateOneRequiredWithoutApartmentsNestedInput
  }

  export type ApartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentCreateManyInput = {
    id?: number
    buildingId: number
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ApartmentUpdateManyMutationInput = {
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buildingId?: IntFieldUpdateOperationsInput | number
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateInput = {
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutParcelsInput
  }

  export type ParcelUncheckedCreateInput = {
    id?: number
    projectId: number
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ParcelUpdateInput = {
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutParcelsNestedInput
  }

  export type ParcelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateManyInput = {
    id?: number
    projectId: number
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ParcelUpdateManyMutationInput = {
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationLogCreateInput = {
    adminId: number
    unitType: string
    unitId: number
    oldStatus: string
    newStatus: string
    messageSent?: string | null
    createdAt?: Date | string
  }

  export type ReservationLogUncheckedCreateInput = {
    id?: number
    adminId: number
    unitType: string
    unitId: number
    oldStatus: string
    newStatus: string
    messageSent?: string | null
    createdAt?: Date | string
  }

  export type ReservationLogUpdateInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    unitType?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    messageSent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    unitType?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    messageSent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationLogCreateManyInput = {
    id?: number
    adminId: number
    unitType: string
    unitId: number
    oldStatus: string
    newStatus: string
    messageSent?: string | null
    createdAt?: Date | string
  }

  export type ReservationLogUpdateManyMutationInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    unitType?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    messageSent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    unitType?: StringFieldUpdateOperationsInput | string
    unitId?: IntFieldUpdateOperationsInput | number
    oldStatus?: StringFieldUpdateOperationsInput | string
    newStatus?: StringFieldUpdateOperationsInput | string
    messageSent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    heroImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    heroImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    heroImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type BuildingListRelationFilter = {
    every?: BuildingWhereInput
    some?: BuildingWhereInput
    none?: BuildingWhereInput
  }

  export type ParcelListRelationFilter = {
    every?: ParcelWhereInput
    some?: ParcelWhereInput
    none?: ParcelWhereInput
  }

  export type ProjectImageListRelationFilter = {
    every?: ProjectImageWhereInput
    some?: ProjectImageWhereInput
    none?: ProjectImageWhereInput
  }

  export type BuildingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParcelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    address?: SortOrder
    totalArea?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    heroImage?: SortOrder
    mainImage?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    totalArea?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    address?: SortOrder
    totalArea?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    heroImage?: SortOrder
    mainImage?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    address?: SortOrder
    totalArea?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    heroImage?: SortOrder
    mainImage?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    totalArea?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectImageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectImageAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
  }

  export type ProjectImageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectImageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    url?: SortOrder
    category?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectImageSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
  }

  export type ApartmentListRelationFilter = {
    every?: ApartmentWhereInput
    some?: ApartmentWhereInput
    none?: ApartmentWhereInput
  }

  export type ApartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    floorsCount?: SortOrder
    apartmentsPerFloor?: SortOrder
    totalSurface?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BuildingRelationFilter = {
    is?: BuildingWhereInput
    isNot?: BuildingWhereInput
  }

  export type ApartmentBuildingIdFloorUnitNumberCompoundUniqueInput = {
    buildingId: number
    floor: number
    unitNumber: number
  }

  export type ApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrder
    salons?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrder
    salons?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    surface?: SortOrder
    price?: SortOrder
  }

  export type ApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrder
    salons?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrder
    salons?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApartmentSumOrderByAggregateInput = {
    id?: SortOrder
    buildingId?: SortOrder
    floor?: SortOrder
    unitNumber?: SortOrder
    rooms?: SortOrder
    salons?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    surface?: SortOrder
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ParcelProjectIdParcelNumberParcelCodeCompoundUniqueInput = {
    projectId: number
    parcelNumber: number
    parcelCode: string
  }

  export type ParcelCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    parcelCode?: SortOrder
    usageType?: SortOrder
    zoneType?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParcelAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    surface?: SortOrder
    price?: SortOrder
  }

  export type ParcelMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    parcelCode?: SortOrder
    usageType?: SortOrder
    zoneType?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParcelMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    parcelCode?: SortOrder
    usageType?: SortOrder
    zoneType?: SortOrder
    surface?: SortOrder
    price?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParcelSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    parcelNumber?: SortOrder
    surface?: SortOrder
    price?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReservationLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitType?: SortOrder
    unitId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    messageSent?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationLogAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitId?: SortOrder
  }

  export type ReservationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitType?: SortOrder
    unitId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    messageSent?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitType?: SortOrder
    unitId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    messageSent?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationLogSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    unitId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutCityInput = {
    create?: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput> | ProjectCreateWithoutCityInput[] | ProjectUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCityInput | ProjectCreateOrConnectWithoutCityInput[]
    createMany?: ProjectCreateManyCityInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput> | ProjectCreateWithoutCityInput[] | ProjectUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCityInput | ProjectCreateOrConnectWithoutCityInput[]
    createMany?: ProjectCreateManyCityInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutCityNestedInput = {
    create?: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput> | ProjectCreateWithoutCityInput[] | ProjectUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCityInput | ProjectCreateOrConnectWithoutCityInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCityInput | ProjectUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ProjectCreateManyCityInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCityInput | ProjectUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCityInput | ProjectUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput> | ProjectCreateWithoutCityInput[] | ProjectUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCityInput | ProjectCreateOrConnectWithoutCityInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCityInput | ProjectUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ProjectCreateManyCityInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCityInput | ProjectUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCityInput | ProjectUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CityCreateWithoutProjectsInput, CityUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CityCreateOrConnectWithoutProjectsInput
    connect?: CityWhereUniqueInput
  }

  export type BuildingCreateNestedManyWithoutProjectInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput> | BuildingCreateWithoutProjectInput[] | BuildingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput | BuildingCreateOrConnectWithoutProjectInput[]
    createMany?: BuildingCreateManyProjectInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type ParcelCreateNestedManyWithoutProjectInput = {
    create?: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput> | ParcelCreateWithoutProjectInput[] | ParcelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutProjectInput | ParcelCreateOrConnectWithoutProjectInput[]
    createMany?: ParcelCreateManyProjectInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ProjectImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput> | BuildingCreateWithoutProjectInput[] | BuildingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput | BuildingCreateOrConnectWithoutProjectInput[]
    createMany?: BuildingCreateManyProjectInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput> | ParcelCreateWithoutProjectInput[] | ParcelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutProjectInput | ParcelCreateOrConnectWithoutProjectInput[]
    createMany?: ParcelCreateManyProjectInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ProjectImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CityUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CityCreateWithoutProjectsInput, CityUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CityCreateOrConnectWithoutProjectsInput
    upsert?: CityUpsertWithoutProjectsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutProjectsInput, CityUpdateWithoutProjectsInput>, CityUncheckedUpdateWithoutProjectsInput>
  }

  export type BuildingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput> | BuildingCreateWithoutProjectInput[] | BuildingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput | BuildingCreateOrConnectWithoutProjectInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutProjectInput | BuildingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BuildingCreateManyProjectInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutProjectInput | BuildingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutProjectInput | BuildingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type ParcelUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput> | ParcelCreateWithoutProjectInput[] | ParcelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutProjectInput | ParcelCreateOrConnectWithoutProjectInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutProjectInput | ParcelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ParcelCreateManyProjectInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutProjectInput | ParcelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutProjectInput | ParcelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ProjectImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectImageUpsertWithWhereUniqueWithoutProjectInput | ProjectImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    set?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    disconnect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    delete?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    update?: ProjectImageUpdateWithWhereUniqueWithoutProjectInput | ProjectImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectImageUpdateManyWithWhereWithoutProjectInput | ProjectImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput> | BuildingCreateWithoutProjectInput[] | BuildingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutProjectInput | BuildingCreateOrConnectWithoutProjectInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutProjectInput | BuildingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BuildingCreateManyProjectInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutProjectInput | BuildingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutProjectInput | BuildingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput> | ParcelCreateWithoutProjectInput[] | ParcelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutProjectInput | ParcelCreateOrConnectWithoutProjectInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutProjectInput | ParcelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ParcelCreateManyProjectInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutProjectInput | ParcelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutProjectInput | ParcelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ProjectImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput> | ProjectImageCreateWithoutProjectInput[] | ProjectImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectImageCreateOrConnectWithoutProjectInput | ProjectImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectImageUpsertWithWhereUniqueWithoutProjectInput | ProjectImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectImageCreateManyProjectInputEnvelope
    set?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    disconnect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    delete?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    connect?: ProjectImageWhereUniqueInput | ProjectImageWhereUniqueInput[]
    update?: ProjectImageUpdateWithWhereUniqueWithoutProjectInput | ProjectImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectImageUpdateManyWithWhereWithoutProjectInput | ProjectImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutImagesInput
    upsert?: ProjectUpsertWithoutImagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutImagesInput, ProjectUpdateWithoutImagesInput>, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectCreateNestedOneWithoutBuildingsInput = {
    create?: XOR<ProjectCreateWithoutBuildingsInput, ProjectUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApartmentCreateNestedManyWithoutBuildingInput = {
    create?: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput> | ApartmentCreateWithoutBuildingInput[] | ApartmentUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutBuildingInput | ApartmentCreateOrConnectWithoutBuildingInput[]
    createMany?: ApartmentCreateManyBuildingInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type ApartmentUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput> | ApartmentCreateWithoutBuildingInput[] | ApartmentUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutBuildingInput | ApartmentCreateOrConnectWithoutBuildingInput[]
    createMany?: ApartmentCreateManyBuildingInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutBuildingsNestedInput = {
    create?: XOR<ProjectCreateWithoutBuildingsInput, ProjectUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBuildingsInput
    upsert?: ProjectUpsertWithoutBuildingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBuildingsInput, ProjectUpdateWithoutBuildingsInput>, ProjectUncheckedUpdateWithoutBuildingsInput>
  }

  export type ApartmentUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput> | ApartmentCreateWithoutBuildingInput[] | ApartmentUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutBuildingInput | ApartmentCreateOrConnectWithoutBuildingInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutBuildingInput | ApartmentUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: ApartmentCreateManyBuildingInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutBuildingInput | ApartmentUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutBuildingInput | ApartmentUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type ApartmentUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput> | ApartmentCreateWithoutBuildingInput[] | ApartmentUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutBuildingInput | ApartmentCreateOrConnectWithoutBuildingInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutBuildingInput | ApartmentUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: ApartmentCreateManyBuildingInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutBuildingInput | ApartmentUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutBuildingInput | ApartmentUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type BuildingCreateNestedOneWithoutApartmentsInput = {
    create?: XOR<BuildingCreateWithoutApartmentsInput, BuildingUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutApartmentsInput
    connect?: BuildingWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildingUpdateOneRequiredWithoutApartmentsNestedInput = {
    create?: XOR<BuildingCreateWithoutApartmentsInput, BuildingUncheckedCreateWithoutApartmentsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutApartmentsInput
    upsert?: BuildingUpsertWithoutApartmentsInput
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutApartmentsInput, BuildingUpdateWithoutApartmentsInput>, BuildingUncheckedUpdateWithoutApartmentsInput>
  }

  export type ProjectCreateNestedOneWithoutParcelsInput = {
    create?: XOR<ProjectCreateWithoutParcelsInput, ProjectUncheckedCreateWithoutParcelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutParcelsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutParcelsNestedInput = {
    create?: XOR<ProjectCreateWithoutParcelsInput, ProjectUncheckedCreateWithoutParcelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutParcelsInput
    upsert?: ProjectUpsertWithoutParcelsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutParcelsInput, ProjectUpdateWithoutParcelsInput>, ProjectUncheckedUpdateWithoutParcelsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutCityInput = {
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingCreateNestedManyWithoutProjectInput
    parcels?: ParcelCreateNestedManyWithoutProjectInput
    images?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutProjectInput
    parcels?: ParcelUncheckedCreateNestedManyWithoutProjectInput
    images?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCityInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput>
  }

  export type ProjectCreateManyCityInputEnvelope = {
    data: ProjectCreateManyCityInput | ProjectCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCityInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCityInput, ProjectUncheckedUpdateWithoutCityInput>
    create: XOR<ProjectCreateWithoutCityInput, ProjectUncheckedCreateWithoutCityInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCityInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCityInput, ProjectUncheckedUpdateWithoutCityInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCityInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCityInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    cityId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    type?: StringFilter<"Project"> | string
    status?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    address?: StringNullableFilter<"Project"> | string | null
    totalArea?: FloatNullableFilter<"Project"> | number | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    heroImage?: StringNullableFilter<"Project"> | string | null
    mainImage?: StringNullableFilter<"Project"> | string | null
    whatsapp?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type CityCreateWithoutProjectsInput = {
    name: string
    slug: string
    heroImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    slug: string
    heroImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityCreateOrConnectWithoutProjectsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutProjectsInput, CityUncheckedCreateWithoutProjectsInput>
  }

  export type BuildingCreateWithoutProjectInput = {
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apartments?: ApartmentCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apartments?: ApartmentUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutProjectInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
  }

  export type BuildingCreateManyProjectInputEnvelope = {
    data: BuildingCreateManyProjectInput | BuildingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ParcelCreateWithoutProjectInput = {
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ParcelUncheckedCreateWithoutProjectInput = {
    id?: number
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ParcelCreateOrConnectWithoutProjectInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput>
  }

  export type ParcelCreateManyProjectInputEnvelope = {
    data: ParcelCreateManyProjectInput | ParcelCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectImageCreateWithoutProjectInput = {
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ProjectImageUncheckedCreateWithoutProjectInput = {
    id?: number
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type ProjectImageCreateOrConnectWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    create: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectImageCreateManyProjectInputEnvelope = {
    data: ProjectImageCreateManyProjectInput | ProjectImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutProjectsInput = {
    update: XOR<CityUpdateWithoutProjectsInput, CityUncheckedUpdateWithoutProjectsInput>
    create: XOR<CityCreateWithoutProjectsInput, CityUncheckedCreateWithoutProjectsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutProjectsInput, CityUncheckedUpdateWithoutProjectsInput>
  }

  export type CityUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUpsertWithWhereUniqueWithoutProjectInput = {
    where: BuildingWhereUniqueInput
    update: XOR<BuildingUpdateWithoutProjectInput, BuildingUncheckedUpdateWithoutProjectInput>
    create: XOR<BuildingCreateWithoutProjectInput, BuildingUncheckedCreateWithoutProjectInput>
  }

  export type BuildingUpdateWithWhereUniqueWithoutProjectInput = {
    where: BuildingWhereUniqueInput
    data: XOR<BuildingUpdateWithoutProjectInput, BuildingUncheckedUpdateWithoutProjectInput>
  }

  export type BuildingUpdateManyWithWhereWithoutProjectInput = {
    where: BuildingScalarWhereInput
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyWithoutProjectInput>
  }

  export type BuildingScalarWhereInput = {
    AND?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    OR?: BuildingScalarWhereInput[]
    NOT?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    id?: IntFilter<"Building"> | number
    projectId?: IntFilter<"Building"> | number
    name?: StringFilter<"Building"> | string
    floorsCount?: IntFilter<"Building"> | number
    apartmentsPerFloor?: IntFilter<"Building"> | number
    totalSurface?: FloatNullableFilter<"Building"> | number | null
    createdAt?: DateTimeFilter<"Building"> | Date | string
    updatedAt?: DateTimeFilter<"Building"> | Date | string
  }

  export type ParcelUpsertWithWhereUniqueWithoutProjectInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutProjectInput, ParcelUncheckedUpdateWithoutProjectInput>
    create: XOR<ParcelCreateWithoutProjectInput, ParcelUncheckedCreateWithoutProjectInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutProjectInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutProjectInput, ParcelUncheckedUpdateWithoutProjectInput>
  }

  export type ParcelUpdateManyWithWhereWithoutProjectInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutProjectInput>
  }

  export type ParcelScalarWhereInput = {
    AND?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    OR?: ParcelScalarWhereInput[]
    NOT?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    id?: IntFilter<"Parcel"> | number
    projectId?: IntFilter<"Parcel"> | number
    parcelNumber?: IntFilter<"Parcel"> | number
    parcelCode?: StringFilter<"Parcel"> | string
    usageType?: StringFilter<"Parcel"> | string
    zoneType?: StringFilter<"Parcel"> | string
    surface?: FloatNullableFilter<"Parcel"> | number | null
    price?: FloatNullableFilter<"Parcel"> | number | null
    status?: StringFilter<"Parcel"> | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
  }

  export type ProjectImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    update: XOR<ProjectImageUpdateWithoutProjectInput, ProjectImageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectImageCreateWithoutProjectInput, ProjectImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectImageWhereUniqueInput
    data: XOR<ProjectImageUpdateWithoutProjectInput, ProjectImageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectImageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectImageScalarWhereInput
    data: XOR<ProjectImageUpdateManyMutationInput, ProjectImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectImageScalarWhereInput = {
    AND?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
    OR?: ProjectImageScalarWhereInput[]
    NOT?: ProjectImageScalarWhereInput | ProjectImageScalarWhereInput[]
    id?: IntFilter<"ProjectImage"> | number
    projectId?: IntFilter<"ProjectImage"> | number
    url?: StringFilter<"ProjectImage"> | string
    category?: StringFilter<"ProjectImage"> | string
    label?: StringNullableFilter<"ProjectImage"> | string | null
    order?: IntFilter<"ProjectImage"> | number
    createdAt?: DateTimeFilter<"ProjectImage"> | Date | string
  }

  export type ProjectCreateWithoutImagesInput = {
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutProjectsInput
    buildings?: BuildingCreateNestedManyWithoutProjectInput
    parcels?: ParcelCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutImagesInput = {
    id?: number
    cityId: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutProjectInput
    parcels?: ParcelUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutImagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
  }

  export type ProjectUpsertWithoutImagesInput = {
    update: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
    create: XOR<ProjectCreateWithoutImagesInput, ProjectUncheckedCreateWithoutImagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutImagesInput, ProjectUncheckedUpdateWithoutImagesInput>
  }

  export type ProjectUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutProjectsNestedInput
    buildings?: BuildingUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutBuildingsInput = {
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutProjectsInput
    parcels?: ParcelCreateNestedManyWithoutProjectInput
    images?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBuildingsInput = {
    id?: number
    cityId: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parcels?: ParcelUncheckedCreateNestedManyWithoutProjectInput
    images?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBuildingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBuildingsInput, ProjectUncheckedCreateWithoutBuildingsInput>
  }

  export type ApartmentCreateWithoutBuildingInput = {
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ApartmentUncheckedCreateWithoutBuildingInput = {
    id?: number
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ApartmentCreateOrConnectWithoutBuildingInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput>
  }

  export type ApartmentCreateManyBuildingInputEnvelope = {
    data: ApartmentCreateManyBuildingInput | ApartmentCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutBuildingsInput = {
    update: XOR<ProjectUpdateWithoutBuildingsInput, ProjectUncheckedUpdateWithoutBuildingsInput>
    create: XOR<ProjectCreateWithoutBuildingsInput, ProjectUncheckedCreateWithoutBuildingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBuildingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBuildingsInput, ProjectUncheckedUpdateWithoutBuildingsInput>
  }

  export type ProjectUpdateWithoutBuildingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutProjectsNestedInput
    parcels?: ParcelUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBuildingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcels?: ParcelUncheckedUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApartmentUpsertWithWhereUniqueWithoutBuildingInput = {
    where: ApartmentWhereUniqueInput
    update: XOR<ApartmentUpdateWithoutBuildingInput, ApartmentUncheckedUpdateWithoutBuildingInput>
    create: XOR<ApartmentCreateWithoutBuildingInput, ApartmentUncheckedCreateWithoutBuildingInput>
  }

  export type ApartmentUpdateWithWhereUniqueWithoutBuildingInput = {
    where: ApartmentWhereUniqueInput
    data: XOR<ApartmentUpdateWithoutBuildingInput, ApartmentUncheckedUpdateWithoutBuildingInput>
  }

  export type ApartmentUpdateManyWithWhereWithoutBuildingInput = {
    where: ApartmentScalarWhereInput
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyWithoutBuildingInput>
  }

  export type ApartmentScalarWhereInput = {
    AND?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    OR?: ApartmentScalarWhereInput[]
    NOT?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    id?: IntFilter<"Apartment"> | number
    buildingId?: IntFilter<"Apartment"> | number
    floor?: IntFilter<"Apartment"> | number
    unitNumber?: IntFilter<"Apartment"> | number
    rooms?: IntNullableFilter<"Apartment"> | number | null
    salons?: IntNullableFilter<"Apartment"> | number | null
    kitchens?: IntNullableFilter<"Apartment"> | number | null
    bathrooms?: IntNullableFilter<"Apartment"> | number | null
    surface?: FloatNullableFilter<"Apartment"> | number | null
    price?: FloatNullableFilter<"Apartment"> | number | null
    status?: StringFilter<"Apartment"> | string
    updatedAt?: DateTimeFilter<"Apartment"> | Date | string
    createdAt?: DateTimeFilter<"Apartment"> | Date | string
  }

  export type BuildingCreateWithoutApartmentsInput = {
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBuildingsInput
  }

  export type BuildingUncheckedCreateWithoutApartmentsInput = {
    id?: number
    projectId: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildingCreateOrConnectWithoutApartmentsInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutApartmentsInput, BuildingUncheckedCreateWithoutApartmentsInput>
  }

  export type BuildingUpsertWithoutApartmentsInput = {
    update: XOR<BuildingUpdateWithoutApartmentsInput, BuildingUncheckedUpdateWithoutApartmentsInput>
    create: XOR<BuildingCreateWithoutApartmentsInput, BuildingUncheckedCreateWithoutApartmentsInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutApartmentsInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutApartmentsInput, BuildingUncheckedUpdateWithoutApartmentsInput>
  }

  export type BuildingUpdateWithoutApartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBuildingsNestedInput
  }

  export type BuildingUncheckedUpdateWithoutApartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutParcelsInput = {
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutProjectsInput
    buildings?: BuildingCreateNestedManyWithoutProjectInput
    images?: ProjectImageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutParcelsInput = {
    id?: number
    cityId: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buildings?: BuildingUncheckedCreateNestedManyWithoutProjectInput
    images?: ProjectImageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutParcelsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutParcelsInput, ProjectUncheckedCreateWithoutParcelsInput>
  }

  export type ProjectUpsertWithoutParcelsInput = {
    update: XOR<ProjectUpdateWithoutParcelsInput, ProjectUncheckedUpdateWithoutParcelsInput>
    create: XOR<ProjectCreateWithoutParcelsInput, ProjectUncheckedCreateWithoutParcelsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutParcelsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutParcelsInput, ProjectUncheckedUpdateWithoutParcelsInput>
  }

  export type ProjectUpdateWithoutParcelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutProjectsNestedInput
    buildings?: BuildingUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutParcelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyCityInput = {
    id?: number
    name: string
    slug: string
    type: string
    status?: string
    description?: string | null
    address?: string | null
    totalArea?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    heroImage?: string | null
    mainImage?: string | null
    whatsapp?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buildings?: BuildingUncheckedUpdateManyWithoutProjectNestedInput
    parcels?: ParcelUncheckedUpdateManyWithoutProjectNestedInput
    images?: ProjectImageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    totalArea?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateManyProjectInput = {
    id?: number
    name: string
    floorsCount: number
    apartmentsPerFloor: number
    totalSurface?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelCreateManyProjectInput = {
    id?: number
    parcelNumber: number
    parcelCode: string
    usageType: string
    zoneType: string
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ProjectImageCreateManyProjectInput = {
    id?: number
    url: string
    category: string
    label?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type BuildingUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apartments?: ApartmentUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apartments?: ApartmentUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    floorsCount?: IntFieldUpdateOperationsInput | number
    apartmentsPerFloor?: IntFieldUpdateOperationsInput | number
    totalSurface?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUpdateWithoutProjectInput = {
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    parcelNumber?: IntFieldUpdateOperationsInput | number
    parcelCode?: StringFieldUpdateOperationsInput | string
    usageType?: StringFieldUpdateOperationsInput | string
    zoneType?: StringFieldUpdateOperationsInput | string
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUpdateWithoutProjectInput = {
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectImageUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentCreateManyBuildingInput = {
    id?: number
    floor: number
    unitNumber: number
    rooms?: number | null
    salons?: number | null
    kitchens?: number | null
    bathrooms?: number | null
    surface?: number | null
    price?: number | null
    status?: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ApartmentUpdateWithoutBuildingInput = {
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentUncheckedUpdateWithoutBuildingInput = {
    id?: IntFieldUpdateOperationsInput | number
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentUncheckedUpdateManyWithoutBuildingInput = {
    id?: IntFieldUpdateOperationsInput | number
    floor?: IntFieldUpdateOperationsInput | number
    unitNumber?: IntFieldUpdateOperationsInput | number
    rooms?: NullableIntFieldUpdateOperationsInput | number | null
    salons?: NullableIntFieldUpdateOperationsInput | number | null
    kitchens?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildingCountOutputTypeDefaultArgs instead
     */
    export type BuildingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectImageDefaultArgs instead
     */
    export type ProjectImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildingDefaultArgs instead
     */
    export type BuildingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApartmentDefaultArgs instead
     */
    export type ApartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParcelDefaultArgs instead
     */
    export type ParcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParcelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationLogDefaultArgs instead
     */
    export type ReservationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationLogDefaultArgs<ExtArgs>

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