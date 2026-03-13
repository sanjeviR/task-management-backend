
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskComment
 * 
 */
export type TaskComment = $Result.DefaultSelection<Prisma.$TaskCommentPayload>

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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskComment`: Exposes CRUD operations for the **TaskComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskComments
    * const taskComments = await prisma.taskComment.findMany()
    * ```
    */
  get taskComment(): Prisma.TaskCommentDelegate<ExtArgs, ClientOptions>;
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
    Project: 'Project',
    Task: 'Task',
    TaskComment: 'TaskComment'
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
      modelProps: "user" | "project" | "task" | "taskComment"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
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
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskComment: {
        payload: Prisma.$TaskCommentPayload<ExtArgs>
        fields: Prisma.TaskCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          findFirst: {
            args: Prisma.TaskCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          findMany: {
            args: Prisma.TaskCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>[]
          }
          create: {
            args: Prisma.TaskCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          createMany: {
            args: Prisma.TaskCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>[]
          }
          delete: {
            args: Prisma.TaskCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          update: {
            args: Prisma.TaskCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          deleteMany: {
            args: Prisma.TaskCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>[]
          }
          upsert: {
            args: Prisma.TaskCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskCommentPayload>
          }
          aggregate: {
            args: Prisma.TaskCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskComment>
          }
          groupBy: {
            args: Prisma.TaskCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCommentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCommentCountAggregateOutputType> | number
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
    project?: ProjectOmit
    task?: TaskOmit
    taskComment?: TaskCommentOmit
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
    created_user: number
    updated_user: number
    deleted_user: number
    managed_projects: number
    created_projects: number
    updated_projects: number
    deleted_projects: number
    assigned_tasks: number
    created_tasks: number
    updated_tasks: number
    deleted_tasks: number
    task_comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_user?: boolean | UserCountOutputTypeCountCreated_userArgs
    updated_user?: boolean | UserCountOutputTypeCountUpdated_userArgs
    deleted_user?: boolean | UserCountOutputTypeCountDeleted_userArgs
    managed_projects?: boolean | UserCountOutputTypeCountManaged_projectsArgs
    created_projects?: boolean | UserCountOutputTypeCountCreated_projectsArgs
    updated_projects?: boolean | UserCountOutputTypeCountUpdated_projectsArgs
    deleted_projects?: boolean | UserCountOutputTypeCountDeleted_projectsArgs
    assigned_tasks?: boolean | UserCountOutputTypeCountAssigned_tasksArgs
    created_tasks?: boolean | UserCountOutputTypeCountCreated_tasksArgs
    updated_tasks?: boolean | UserCountOutputTypeCountUpdated_tasksArgs
    deleted_tasks?: boolean | UserCountOutputTypeCountDeleted_tasksArgs
    task_comments?: boolean | UserCountOutputTypeCountTask_commentsArgs
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
  export type UserCountOutputTypeCountCreated_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeleted_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManaged_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeleted_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigned_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdated_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeleted_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTask_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCommentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
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
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    comments: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCommentWhereInput
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
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    role: string | null
    deleted_at: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    activation_token: string | null
    is_active: boolean | null
    activated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    role: string | null
    deleted_at: Date | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    activation_token: string | null
    is_active: boolean | null
    activated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified_at: number
    password: number
    role: number
    deleted_at: number
    remember_token: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_by: number
    activation_token: number
    is_active: number
    activated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    deleted_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    activation_token?: true
    is_active?: true
    activated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    deleted_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    activation_token?: true
    is_active?: true
    activated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    role?: true
    deleted_at?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    activation_token?: true
    is_active?: true
    activated_at?: true
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
    name: string
    email: string
    email_verified_at: Date | null
    password: string
    role: string
    deleted_at: Date | null
    remember_token: string | null
    created_at: Date
    updated_at: Date
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    activation_token: string | null
    is_active: boolean
    activated_at: Date | null
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
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    activation_token?: boolean
    is_active?: boolean
    activated_at?: boolean
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
    created_user?: boolean | User$created_userArgs<ExtArgs>
    updated_user?: boolean | User$updated_userArgs<ExtArgs>
    deleted_user?: boolean | User$deleted_userArgs<ExtArgs>
    managed_projects?: boolean | User$managed_projectsArgs<ExtArgs>
    created_projects?: boolean | User$created_projectsArgs<ExtArgs>
    updated_projects?: boolean | User$updated_projectsArgs<ExtArgs>
    deleted_projects?: boolean | User$deleted_projectsArgs<ExtArgs>
    assigned_tasks?: boolean | User$assigned_tasksArgs<ExtArgs>
    created_tasks?: boolean | User$created_tasksArgs<ExtArgs>
    updated_tasks?: boolean | User$updated_tasksArgs<ExtArgs>
    deleted_tasks?: boolean | User$deleted_tasksArgs<ExtArgs>
    task_comments?: boolean | User$task_commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    activation_token?: boolean
    is_active?: boolean
    activated_at?: boolean
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    activation_token?: boolean
    is_active?: boolean
    activated_at?: boolean
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    role?: boolean
    deleted_at?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    activation_token?: boolean
    is_active?: boolean
    activated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified_at" | "password" | "role" | "deleted_at" | "remember_token" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_by" | "activation_token" | "is_active" | "activated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
    created_user?: boolean | User$created_userArgs<ExtArgs>
    updated_user?: boolean | User$updated_userArgs<ExtArgs>
    deleted_user?: boolean | User$deleted_userArgs<ExtArgs>
    managed_projects?: boolean | User$managed_projectsArgs<ExtArgs>
    created_projects?: boolean | User$created_projectsArgs<ExtArgs>
    updated_projects?: boolean | User$updated_projectsArgs<ExtArgs>
    deleted_projects?: boolean | User$deleted_projectsArgs<ExtArgs>
    assigned_tasks?: boolean | User$assigned_tasksArgs<ExtArgs>
    created_tasks?: boolean | User$created_tasksArgs<ExtArgs>
    updated_tasks?: boolean | User$updated_tasksArgs<ExtArgs>
    deleted_tasks?: boolean | User$deleted_tasksArgs<ExtArgs>
    task_comments?: boolean | User$task_commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | User$creatorArgs<ExtArgs>
    updater?: boolean | User$updaterArgs<ExtArgs>
    deleter?: boolean | User$deleterArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs> | null
      updater: Prisma.$UserPayload<ExtArgs> | null
      deleter: Prisma.$UserPayload<ExtArgs> | null
      created_user: Prisma.$UserPayload<ExtArgs>[]
      updated_user: Prisma.$UserPayload<ExtArgs>[]
      deleted_user: Prisma.$UserPayload<ExtArgs>[]
      managed_projects: Prisma.$ProjectPayload<ExtArgs>[]
      created_projects: Prisma.$ProjectPayload<ExtArgs>[]
      updated_projects: Prisma.$ProjectPayload<ExtArgs>[]
      deleted_projects: Prisma.$ProjectPayload<ExtArgs>[]
      assigned_tasks: Prisma.$TaskPayload<ExtArgs>[]
      created_tasks: Prisma.$TaskPayload<ExtArgs>[]
      updated_tasks: Prisma.$TaskPayload<ExtArgs>[]
      deleted_tasks: Prisma.$TaskPayload<ExtArgs>[]
      task_comments: Prisma.$TaskCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      email_verified_at: Date | null
      password: string
      role: string
      deleted_at: Date | null
      remember_token: string | null
      created_at: Date
      updated_at: Date
      created_by: number | null
      updated_by: number | null
      deleted_by: number | null
      activation_token: string | null
      is_active: boolean
      activated_at: Date | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    creator<T extends User$creatorArgs<ExtArgs> = {}>(args?: Subset<T, User$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updater<T extends User$updaterArgs<ExtArgs> = {}>(args?: Subset<T, User$updaterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deleter<T extends User$deleterArgs<ExtArgs> = {}>(args?: Subset<T, User$deleterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    created_user<T extends User$created_userArgs<ExtArgs> = {}>(args?: Subset<T, User$created_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_user<T extends User$updated_userArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_user<T extends User$deleted_userArgs<ExtArgs> = {}>(args?: Subset<T, User$deleted_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managed_projects<T extends User$managed_projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$managed_projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_projects<T extends User$created_projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_projects<T extends User$updated_projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_projects<T extends User$deleted_projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$deleted_projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_tasks<T extends User$assigned_tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assigned_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_tasks<T extends User$created_tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$created_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_tasks<T extends User$updated_tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$updated_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_tasks<T extends User$deleted_tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$deleted_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_comments<T extends User$task_commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$task_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly email_verified_at: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
    readonly remember_token: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly created_by: FieldRef<"User", 'Int'>
    readonly updated_by: FieldRef<"User", 'Int'>
    readonly deleted_by: FieldRef<"User", 'Int'>
    readonly activation_token: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly activated_at: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.creator
   */
  export type User$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.updater
   */
  export type User$updaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.deleter
   */
  export type User$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.created_user
   */
  export type User$created_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.updated_user
   */
  export type User$updated_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.deleted_user
   */
  export type User$deleted_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.managed_projects
   */
  export type User$managed_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
   * User.created_projects
   */
  export type User$created_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
   * User.updated_projects
   */
  export type User$updated_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
   * User.deleted_projects
   */
  export type User$deleted_projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
   * User.assigned_tasks
   */
  export type User$assigned_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.created_tasks
   */
  export type User$created_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.updated_tasks
   */
  export type User$updated_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.deleted_tasks
   */
  export type User$deleted_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.task_comments
   */
  export type User$task_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    where?: TaskCommentWhereInput
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    cursor?: TaskCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
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
    manager_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    task_count: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    manager_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    task_count: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    manager_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    abbreviation: string | null
    task_count: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    manager_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    abbreviation: string | null
    task_count: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    manager_id: number
    created_by: number
    updated_by: number
    deleted_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    abbreviation: number
    task_count: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    manager_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    task_count?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    manager_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    task_count?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    manager_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    abbreviation?: true
    task_count?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    manager_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    abbreviation?: true
    task_count?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    manager_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    abbreviation?: true
    task_count?: true
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
    title: string
    description: string | null
    manager_id: number
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    abbreviation: string
    task_count: number
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
    title?: boolean
    description?: boolean
    manager_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    abbreviation?: boolean
    task_count?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    manager_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    abbreviation?: boolean
    task_count?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    manager_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    abbreviation?: boolean
    task_count?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    manager_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    abbreviation?: boolean
    task_count?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "manager_id" | "created_by" | "updated_by" | "deleted_by" | "created_at" | "updated_at" | "deleted_at" | "abbreviation" | "task_count", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | Project$creatorArgs<ExtArgs>
    updater?: boolean | Project$updaterArgs<ExtArgs>
    deleter?: boolean | Project$deleterArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs> | null
      updater: Prisma.$UserPayload<ExtArgs> | null
      deleter: Prisma.$UserPayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      manager_id: number
      created_by: number | null
      updated_by: number | null
      deleted_by: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      abbreviation: string
      task_count: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends Project$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Project$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updater<T extends Project$updaterArgs<ExtArgs> = {}>(args?: Subset<T, Project$updaterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deleter<T extends Project$deleterArgs<ExtArgs> = {}>(args?: Subset<T, Project$deleterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly manager_id: FieldRef<"Project", 'Int'>
    readonly created_by: FieldRef<"Project", 'Int'>
    readonly updated_by: FieldRef<"Project", 'Int'>
    readonly deleted_by: FieldRef<"Project", 'Int'>
    readonly created_at: FieldRef<"Project", 'DateTime'>
    readonly updated_at: FieldRef<"Project", 'DateTime'>
    readonly deleted_at: FieldRef<"Project", 'DateTime'>
    readonly abbreviation: FieldRef<"Project", 'String'>
    readonly task_count: FieldRef<"Project", 'Int'>
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
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
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.creator
   */
  export type Project$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Project.updater
   */
  export type Project$updaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Project.deleter
   */
  export type Project$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    assigned_to: number | null
    project_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    assigned_to: number | null
    project_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    due_date: Date | null
    assigned_to: number | null
    project_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    ticket_no: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: string | null
    status: string | null
    due_date: Date | null
    assigned_to: number | null
    project_id: number | null
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    ticket_no: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    status: number
    due_date: number
    attachments: number
    assigned_to: number
    project_id: number
    created_by: number
    updated_by: number
    deleted_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    ticket_no: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    assigned_to?: true
    project_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    assigned_to?: true
    project_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    due_date?: true
    assigned_to?: true
    project_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    ticket_no?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    due_date?: true
    assigned_to?: true
    project_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    ticket_no?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    due_date?: true
    attachments?: true
    assigned_to?: true
    project_id?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    ticket_no?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    priority: string
    status: string
    due_date: Date | null
    attachments: JsonValue | null
    assigned_to: number
    project_id: number
    created_by: number | null
    updated_by: number | null
    deleted_by: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    ticket_no: string
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    due_date?: boolean
    attachments?: boolean
    assigned_to?: boolean
    project_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ticket_no?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    due_date?: boolean
    attachments?: boolean
    assigned_to?: boolean
    project_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ticket_no?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    due_date?: boolean
    attachments?: boolean
    assigned_to?: boolean
    project_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ticket_no?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    due_date?: boolean
    attachments?: boolean
    assigned_to?: boolean
    project_id?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    ticket_no?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "status" | "due_date" | "attachments" | "assigned_to" | "project_id" | "created_by" | "updated_by" | "deleted_by" | "created_at" | "updated_at" | "deleted_at" | "ticket_no", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | Task$creatorArgs<ExtArgs>
    updater?: boolean | Task$updaterArgs<ExtArgs>
    deleter?: boolean | Task$deleterArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs> | null
      updater: Prisma.$UserPayload<ExtArgs> | null
      deleter: Prisma.$UserPayload<ExtArgs> | null
      comments: Prisma.$TaskCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      priority: string
      status: string
      due_date: Date | null
      attachments: Prisma.JsonValue | null
      assigned_to: number
      project_id: number
      created_by: number | null
      updated_by: number | null
      deleted_by: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      ticket_no: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends Task$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Task$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updater<T extends Task$updaterArgs<ExtArgs> = {}>(args?: Subset<T, Task$updaterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deleter<T extends Task$deleterArgs<ExtArgs> = {}>(args?: Subset<T, Task$deleterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly due_date: FieldRef<"Task", 'DateTime'>
    readonly attachments: FieldRef<"Task", 'Json'>
    readonly assigned_to: FieldRef<"Task", 'Int'>
    readonly project_id: FieldRef<"Task", 'Int'>
    readonly created_by: FieldRef<"Task", 'Int'>
    readonly updated_by: FieldRef<"Task", 'Int'>
    readonly deleted_by: FieldRef<"Task", 'Int'>
    readonly created_at: FieldRef<"Task", 'DateTime'>
    readonly updated_at: FieldRef<"Task", 'DateTime'>
    readonly deleted_at: FieldRef<"Task", 'DateTime'>
    readonly ticket_no: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Task.creator
   */
  export type Task$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Task.updater
   */
  export type Task$updaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Task.deleter
   */
  export type Task$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    where?: TaskCommentWhereInput
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    cursor?: TaskCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskComment
   */

  export type AggregateTaskComment = {
    _count: TaskCommentCountAggregateOutputType | null
    _avg: TaskCommentAvgAggregateOutputType | null
    _sum: TaskCommentSumAggregateOutputType | null
    _min: TaskCommentMinAggregateOutputType | null
    _max: TaskCommentMaxAggregateOutputType | null
  }

  export type TaskCommentAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
    created_by: number | null
  }

  export type TaskCommentSumAggregateOutputType = {
    id: number | null
    task_id: number | null
    created_by: number | null
  }

  export type TaskCommentMinAggregateOutputType = {
    id: number | null
    task_id: number | null
    created_by: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TaskCommentMaxAggregateOutputType = {
    id: number | null
    task_id: number | null
    created_by: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TaskCommentCountAggregateOutputType = {
    id: number
    task_id: number
    created_by: number
    comment: number
    attachment: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type TaskCommentAvgAggregateInputType = {
    id?: true
    task_id?: true
    created_by?: true
  }

  export type TaskCommentSumAggregateInputType = {
    id?: true
    task_id?: true
    created_by?: true
  }

  export type TaskCommentMinAggregateInputType = {
    id?: true
    task_id?: true
    created_by?: true
    comment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TaskCommentMaxAggregateInputType = {
    id?: true
    task_id?: true
    created_by?: true
    comment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TaskCommentCountAggregateInputType = {
    id?: true
    task_id?: true
    created_by?: true
    comment?: true
    attachment?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TaskCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskComment to aggregate.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskComments
    **/
    _count?: true | TaskCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskCommentMaxAggregateInputType
  }

  export type GetTaskCommentAggregateType<T extends TaskCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskComment[P]>
      : GetScalarType<T[P], AggregateTaskComment[P]>
  }




  export type TaskCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskCommentWhereInput
    orderBy?: TaskCommentOrderByWithAggregationInput | TaskCommentOrderByWithAggregationInput[]
    by: TaskCommentScalarFieldEnum[] | TaskCommentScalarFieldEnum
    having?: TaskCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCommentCountAggregateInputType | true
    _avg?: TaskCommentAvgAggregateInputType
    _sum?: TaskCommentSumAggregateInputType
    _min?: TaskCommentMinAggregateInputType
    _max?: TaskCommentMaxAggregateInputType
  }

  export type TaskCommentGroupByOutputType = {
    id: number
    task_id: number
    created_by: number
    comment: string
    attachment: JsonValue | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: TaskCommentCountAggregateOutputType | null
    _avg: TaskCommentAvgAggregateOutputType | null
    _sum: TaskCommentSumAggregateOutputType | null
    _min: TaskCommentMinAggregateOutputType | null
    _max: TaskCommentMaxAggregateOutputType | null
  }

  type GetTaskCommentGroupByPayload<T extends TaskCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskCommentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskCommentGroupByOutputType[P]>
        }
      >
    >


  export type TaskCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    created_by?: boolean
    comment?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskComment"]>

  export type TaskCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    created_by?: boolean
    comment?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskComment"]>

  export type TaskCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    created_by?: boolean
    comment?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskComment"]>

  export type TaskCommentSelectScalar = {
    id?: boolean
    task_id?: boolean
    created_by?: boolean
    comment?: boolean
    attachment?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type TaskCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "created_by" | "comment" | "attachment" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["taskComment"]>
  export type TaskCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskComment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: number
      created_by: number
      comment: string
      attachment: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["taskComment"]>
    composites: {}
  }

  type TaskCommentGetPayload<S extends boolean | null | undefined | TaskCommentDefaultArgs> = $Result.GetResult<Prisma.$TaskCommentPayload, S>

  type TaskCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCommentCountAggregateInputType | true
    }

  export interface TaskCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskComment'], meta: { name: 'TaskComment' } }
    /**
     * Find zero or one TaskComment that matches the filter.
     * @param {TaskCommentFindUniqueArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskCommentFindUniqueArgs>(args: SelectSubset<T, TaskCommentFindUniqueArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskCommentFindUniqueOrThrowArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindFirstArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskCommentFindFirstArgs>(args?: SelectSubset<T, TaskCommentFindFirstArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindFirstOrThrowArgs} args - Arguments to find a TaskComment
     * @example
     * // Get one TaskComment
     * const taskComment = await prisma.taskComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskComments
     * const taskComments = await prisma.taskComment.findMany()
     * 
     * // Get first 10 TaskComments
     * const taskComments = await prisma.taskComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskCommentWithIdOnly = await prisma.taskComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskCommentFindManyArgs>(args?: SelectSubset<T, TaskCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskComment.
     * @param {TaskCommentCreateArgs} args - Arguments to create a TaskComment.
     * @example
     * // Create one TaskComment
     * const TaskComment = await prisma.taskComment.create({
     *   data: {
     *     // ... data to create a TaskComment
     *   }
     * })
     * 
     */
    create<T extends TaskCommentCreateArgs>(args: SelectSubset<T, TaskCommentCreateArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskComments.
     * @param {TaskCommentCreateManyArgs} args - Arguments to create many TaskComments.
     * @example
     * // Create many TaskComments
     * const taskComment = await prisma.taskComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCommentCreateManyArgs>(args?: SelectSubset<T, TaskCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskComments and returns the data saved in the database.
     * @param {TaskCommentCreateManyAndReturnArgs} args - Arguments to create many TaskComments.
     * @example
     * // Create many TaskComments
     * const taskComment = await prisma.taskComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskComments and only return the `id`
     * const taskCommentWithIdOnly = await prisma.taskComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskComment.
     * @param {TaskCommentDeleteArgs} args - Arguments to delete one TaskComment.
     * @example
     * // Delete one TaskComment
     * const TaskComment = await prisma.taskComment.delete({
     *   where: {
     *     // ... filter to delete one TaskComment
     *   }
     * })
     * 
     */
    delete<T extends TaskCommentDeleteArgs>(args: SelectSubset<T, TaskCommentDeleteArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskComment.
     * @param {TaskCommentUpdateArgs} args - Arguments to update one TaskComment.
     * @example
     * // Update one TaskComment
     * const taskComment = await prisma.taskComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskCommentUpdateArgs>(args: SelectSubset<T, TaskCommentUpdateArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskComments.
     * @param {TaskCommentDeleteManyArgs} args - Arguments to filter TaskComments to delete.
     * @example
     * // Delete a few TaskComments
     * const { count } = await prisma.taskComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskCommentDeleteManyArgs>(args?: SelectSubset<T, TaskCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskComments
     * const taskComment = await prisma.taskComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskCommentUpdateManyArgs>(args: SelectSubset<T, TaskCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskComments and returns the data updated in the database.
     * @param {TaskCommentUpdateManyAndReturnArgs} args - Arguments to update many TaskComments.
     * @example
     * // Update many TaskComments
     * const taskComment = await prisma.taskComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskComments and only return the `id`
     * const taskCommentWithIdOnly = await prisma.taskComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskComment.
     * @param {TaskCommentUpsertArgs} args - Arguments to update or create a TaskComment.
     * @example
     * // Update or create a TaskComment
     * const taskComment = await prisma.taskComment.upsert({
     *   create: {
     *     // ... data to create a TaskComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskComment we want to update
     *   }
     * })
     */
    upsert<T extends TaskCommentUpsertArgs>(args: SelectSubset<T, TaskCommentUpsertArgs<ExtArgs>>): Prisma__TaskCommentClient<$Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentCountArgs} args - Arguments to filter TaskComments to count.
     * @example
     * // Count the number of TaskComments
     * const count = await prisma.taskComment.count({
     *   where: {
     *     // ... the filter for the TaskComments we want to count
     *   }
     * })
    **/
    count<T extends TaskCommentCountArgs>(
      args?: Subset<T, TaskCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskCommentAggregateArgs>(args: Subset<T, TaskCommentAggregateArgs>): Prisma.PrismaPromise<GetTaskCommentAggregateType<T>>

    /**
     * Group by TaskComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCommentGroupByArgs} args - Group by arguments.
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
      T extends TaskCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskCommentGroupByArgs['orderBy'] }
        : { orderBy?: TaskCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskComment model
   */
  readonly fields: TaskCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskComment model
   */
  interface TaskCommentFieldRefs {
    readonly id: FieldRef<"TaskComment", 'Int'>
    readonly task_id: FieldRef<"TaskComment", 'Int'>
    readonly created_by: FieldRef<"TaskComment", 'Int'>
    readonly comment: FieldRef<"TaskComment", 'String'>
    readonly attachment: FieldRef<"TaskComment", 'Json'>
    readonly created_at: FieldRef<"TaskComment", 'DateTime'>
    readonly updated_at: FieldRef<"TaskComment", 'DateTime'>
    readonly deleted_at: FieldRef<"TaskComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskComment findUnique
   */
  export type TaskCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment findUniqueOrThrow
   */
  export type TaskCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment findFirst
   */
  export type TaskCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskComments.
     */
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment findFirstOrThrow
   */
  export type TaskCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComment to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskComments.
     */
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment findMany
   */
  export type TaskCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter, which TaskComments to fetch.
     */
    where?: TaskCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskComments to fetch.
     */
    orderBy?: TaskCommentOrderByWithRelationInput | TaskCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskComments.
     */
    cursor?: TaskCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskComments.
     */
    skip?: number
    distinct?: TaskCommentScalarFieldEnum | TaskCommentScalarFieldEnum[]
  }

  /**
   * TaskComment create
   */
  export type TaskCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskComment.
     */
    data: XOR<TaskCommentCreateInput, TaskCommentUncheckedCreateInput>
  }

  /**
   * TaskComment createMany
   */
  export type TaskCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskComments.
     */
    data: TaskCommentCreateManyInput | TaskCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskComment createManyAndReturn
   */
  export type TaskCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * The data used to create many TaskComments.
     */
    data: TaskCommentCreateManyInput | TaskCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskComment update
   */
  export type TaskCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskComment.
     */
    data: XOR<TaskCommentUpdateInput, TaskCommentUncheckedUpdateInput>
    /**
     * Choose, which TaskComment to update.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment updateMany
   */
  export type TaskCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskComments.
     */
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyInput>
    /**
     * Filter which TaskComments to update
     */
    where?: TaskCommentWhereInput
    /**
     * Limit how many TaskComments to update.
     */
    limit?: number
  }

  /**
   * TaskComment updateManyAndReturn
   */
  export type TaskCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * The data used to update TaskComments.
     */
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyInput>
    /**
     * Filter which TaskComments to update
     */
    where?: TaskCommentWhereInput
    /**
     * Limit how many TaskComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskComment upsert
   */
  export type TaskCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskComment to update in case it exists.
     */
    where: TaskCommentWhereUniqueInput
    /**
     * In case the TaskComment found by the `where` argument doesn't exist, create a new TaskComment with this data.
     */
    create: XOR<TaskCommentCreateInput, TaskCommentUncheckedCreateInput>
    /**
     * In case the TaskComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskCommentUpdateInput, TaskCommentUncheckedUpdateInput>
  }

  /**
   * TaskComment delete
   */
  export type TaskCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
    /**
     * Filter which TaskComment to delete.
     */
    where: TaskCommentWhereUniqueInput
  }

  /**
   * TaskComment deleteMany
   */
  export type TaskCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskComments to delete
     */
    where?: TaskCommentWhereInput
    /**
     * Limit how many TaskComments to delete.
     */
    limit?: number
  }

  /**
   * TaskComment without action
   */
  export type TaskCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskComment
     */
    select?: TaskCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskComment
     */
    omit?: TaskCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskCommentInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    email_verified_at: 'email_verified_at',
    password: 'password',
    role: 'role',
    deleted_at: 'deleted_at',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by',
    activation_token: 'activation_token',
    is_active: 'is_active',
    activated_at: 'activated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    manager_id: 'manager_id',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    abbreviation: 'abbreviation',
    task_count: 'task_count'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    due_date: 'due_date',
    attachments: 'attachments',
    assigned_to: 'assigned_to',
    project_id: 'project_id',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    ticket_no: 'ticket_no'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskCommentScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    created_by: 'created_by',
    comment: 'comment',
    attachment: 'attachment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type TaskCommentScalarFieldEnum = (typeof TaskCommentScalarFieldEnum)[keyof typeof TaskCommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified_at?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    remember_token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_by?: IntNullableFilter<"User"> | number | null
    updated_by?: IntNullableFilter<"User"> | number | null
    deleted_by?: IntNullableFilter<"User"> | number | null
    activation_token?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    activated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    created_user?: UserListRelationFilter
    updated_user?: UserListRelationFilter
    deleted_user?: UserListRelationFilter
    managed_projects?: ProjectListRelationFilter
    created_projects?: ProjectListRelationFilter
    updated_projects?: ProjectListRelationFilter
    deleted_projects?: ProjectListRelationFilter
    assigned_tasks?: TaskListRelationFilter
    created_tasks?: TaskListRelationFilter
    updated_tasks?: TaskListRelationFilter
    deleted_tasks?: TaskListRelationFilter
    task_comments?: TaskCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    activation_token?: SortOrderInput | SortOrder
    is_active?: SortOrder
    activated_at?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    updater?: UserOrderByWithRelationInput
    deleter?: UserOrderByWithRelationInput
    created_user?: UserOrderByRelationAggregateInput
    updated_user?: UserOrderByRelationAggregateInput
    deleted_user?: UserOrderByRelationAggregateInput
    managed_projects?: ProjectOrderByRelationAggregateInput
    created_projects?: ProjectOrderByRelationAggregateInput
    updated_projects?: ProjectOrderByRelationAggregateInput
    deleted_projects?: ProjectOrderByRelationAggregateInput
    assigned_tasks?: TaskOrderByRelationAggregateInput
    created_tasks?: TaskOrderByRelationAggregateInput
    updated_tasks?: TaskOrderByRelationAggregateInput
    deleted_tasks?: TaskOrderByRelationAggregateInput
    task_comments?: TaskCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email_verified_at?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    remember_token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_by?: IntNullableFilter<"User"> | number | null
    updated_by?: IntNullableFilter<"User"> | number | null
    deleted_by?: IntNullableFilter<"User"> | number | null
    activation_token?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    activated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    created_user?: UserListRelationFilter
    updated_user?: UserListRelationFilter
    deleted_user?: UserListRelationFilter
    managed_projects?: ProjectListRelationFilter
    created_projects?: ProjectListRelationFilter
    updated_projects?: ProjectListRelationFilter
    deleted_projects?: ProjectListRelationFilter
    assigned_tasks?: TaskListRelationFilter
    created_tasks?: TaskListRelationFilter
    updated_tasks?: TaskListRelationFilter
    deleted_tasks?: TaskListRelationFilter
    task_comments?: TaskCommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    activation_token?: SortOrderInput | SortOrder
    is_active?: SortOrder
    activated_at?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    remember_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    deleted_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    activation_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    activated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    manager_id?: IntFilter<"Project"> | number
    created_by?: IntNullableFilter<"Project"> | number | null
    updated_by?: IntNullableFilter<"Project"> | number | null
    deleted_by?: IntNullableFilter<"Project"> | number | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    abbreviation?: StringFilter<"Project"> | string
    task_count?: IntFilter<"Project"> | number
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    manager_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    abbreviation?: SortOrder
    task_count?: SortOrder
    manager?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    updater?: UserOrderByWithRelationInput
    deleter?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    manager_id?: IntFilter<"Project"> | number
    created_by?: IntNullableFilter<"Project"> | number | null
    updated_by?: IntNullableFilter<"Project"> | number | null
    deleted_by?: IntNullableFilter<"Project"> | number | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    abbreviation?: StringFilter<"Project"> | string
    task_count?: IntFilter<"Project"> | number
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    manager_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    abbreviation?: SortOrder
    task_count?: SortOrder
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
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    manager_id?: IntWithAggregatesFilter<"Project"> | number
    created_by?: IntNullableWithAggregatesFilter<"Project"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"Project"> | number | null
    deleted_by?: IntNullableWithAggregatesFilter<"Project"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    abbreviation?: StringWithAggregatesFilter<"Project"> | string
    task_count?: IntWithAggregatesFilter<"Project"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachments?: JsonNullableFilter<"Task">
    assigned_to?: IntFilter<"Task"> | number
    project_id?: IntFilter<"Task"> | number
    created_by?: IntNullableFilter<"Task"> | number | null
    updated_by?: IntNullableFilter<"Task"> | number | null
    deleted_by?: IntNullableFilter<"Task"> | number | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    ticket_no?: StringFilter<"Task"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: TaskCommentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    due_date?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ticket_no?: SortOrder
    project?: ProjectOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    updater?: UserOrderByWithRelationInput
    deleter?: UserOrderByWithRelationInput
    comments?: TaskCommentOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_no?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachments?: JsonNullableFilter<"Task">
    assigned_to?: IntFilter<"Task"> | number
    project_id?: IntFilter<"Task"> | number
    created_by?: IntNullableFilter<"Task"> | number | null
    updated_by?: IntNullableFilter<"Task"> | number | null
    deleted_by?: IntNullableFilter<"Task"> | number | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updater?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deleter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: TaskCommentListRelationFilter
  }, "id" | "ticket_no">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    due_date?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    ticket_no?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    priority?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    due_date?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    attachments?: JsonNullableWithAggregatesFilter<"Task">
    assigned_to?: IntWithAggregatesFilter<"Task"> | number
    project_id?: IntWithAggregatesFilter<"Task"> | number
    created_by?: IntNullableWithAggregatesFilter<"Task"> | number | null
    updated_by?: IntNullableWithAggregatesFilter<"Task"> | number | null
    deleted_by?: IntNullableWithAggregatesFilter<"Task"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    ticket_no?: StringWithAggregatesFilter<"Task"> | string
  }

  export type TaskCommentWhereInput = {
    AND?: TaskCommentWhereInput | TaskCommentWhereInput[]
    OR?: TaskCommentWhereInput[]
    NOT?: TaskCommentWhereInput | TaskCommentWhereInput[]
    id?: IntFilter<"TaskComment"> | number
    task_id?: IntFilter<"TaskComment"> | number
    created_by?: IntFilter<"TaskComment"> | number
    comment?: StringFilter<"TaskComment"> | string
    attachment?: JsonNullableFilter<"TaskComment">
    created_at?: DateTimeFilter<"TaskComment"> | Date | string
    updated_at?: DateTimeFilter<"TaskComment"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TaskComment"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskCommentOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
    comment?: SortOrder
    attachment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type TaskCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskCommentWhereInput | TaskCommentWhereInput[]
    OR?: TaskCommentWhereInput[]
    NOT?: TaskCommentWhereInput | TaskCommentWhereInput[]
    task_id?: IntFilter<"TaskComment"> | number
    created_by?: IntFilter<"TaskComment"> | number
    comment?: StringFilter<"TaskComment"> | string
    attachment?: JsonNullableFilter<"TaskComment">
    created_at?: DateTimeFilter<"TaskComment"> | Date | string
    updated_at?: DateTimeFilter<"TaskComment"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TaskComment"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskCommentOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
    comment?: SortOrder
    attachment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: TaskCommentCountOrderByAggregateInput
    _avg?: TaskCommentAvgOrderByAggregateInput
    _max?: TaskCommentMaxOrderByAggregateInput
    _min?: TaskCommentMinOrderByAggregateInput
    _sum?: TaskCommentSumOrderByAggregateInput
  }

  export type TaskCommentScalarWhereWithAggregatesInput = {
    AND?: TaskCommentScalarWhereWithAggregatesInput | TaskCommentScalarWhereWithAggregatesInput[]
    OR?: TaskCommentScalarWhereWithAggregatesInput[]
    NOT?: TaskCommentScalarWhereWithAggregatesInput | TaskCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskComment"> | number
    task_id?: IntWithAggregatesFilter<"TaskComment"> | number
    created_by?: IntWithAggregatesFilter<"TaskComment"> | number
    comment?: StringWithAggregatesFilter<"TaskComment"> | string
    attachment?: JsonNullableWithAggregatesFilter<"TaskComment">
    created_at?: DateTimeWithAggregatesFilter<"TaskComment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TaskComment"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"TaskComment"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    manager: UserCreateNestedOneWithoutManaged_projectsInput
    creator?: UserCreateNestedOneWithoutCreated_projectsInput
    updater?: UserCreateNestedOneWithoutUpdated_projectsInput
    deleter?: UserCreateNestedOneWithoutDeleted_projectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    manager?: UserUpdateOneRequiredWithoutManaged_projectsNestedInput
    creator?: UserUpdateOneWithoutCreated_projectsNestedInput
    updater?: UserUpdateOneWithoutUpdated_projectsNestedInput
    deleter?: UserUpdateOneWithoutDeleted_projectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCommentCreateInput = {
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutCommentsInput
    creator: UserCreateNestedOneWithoutTask_commentsInput
  }

  export type TaskCommentUncheckedCreateInput = {
    id?: number
    task_id: number
    created_by: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TaskCommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    creator?: UserUpdateOneRequiredWithoutTask_commentsNestedInput
  }

  export type TaskCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCommentCreateManyInput = {
    id?: number
    task_id: number
    created_by: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TaskCommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskCommentListRelationFilter = {
    every?: TaskCommentWhereInput
    some?: TaskCommentWhereInput
    none?: TaskCommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    activation_token?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    activation_token?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
    deleted_at?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    activation_token?: SortOrder
    is_active?: SortOrder
    activated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    manager_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    abbreviation?: SortOrder
    task_count?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    task_count?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    manager_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    abbreviation?: SortOrder
    task_count?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    manager_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    abbreviation?: SortOrder
    task_count?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    task_count?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    attachments?: SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    ticket_no?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    ticket_no?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    due_date?: SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    ticket_no?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    assigned_to?: SortOrder
    project_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskCommentCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
    comment?: SortOrder
    attachment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
  }

  export type TaskCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskCommentMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskCommentSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    created_by?: SortOrder
  }

  export type UserCreateNestedOneWithoutCreated_userInput = {
    create?: XOR<UserCreateWithoutCreated_userInput, UserUncheckedCreateWithoutCreated_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_userInput = {
    create?: XOR<UserCreateWithoutUpdated_userInput, UserUncheckedCreateWithoutUpdated_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeleted_userInput = {
    create?: XOR<UserCreateWithoutDeleted_userInput, UserUncheckedCreateWithoutDeleted_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDeleterInput = {
    create?: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput> | UserCreateWithoutDeleterInput[] | UserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeleterInput | UserCreateOrConnectWithoutDeleterInput[]
    createMany?: UserCreateManyDeleterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput> | ProjectCreateWithoutUpdaterInput[] | ProjectUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUpdaterInput | ProjectCreateOrConnectWithoutUpdaterInput[]
    createMany?: ProjectCreateManyUpdaterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutDeleterInput = {
    create?: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput> | ProjectCreateWithoutDeleterInput[] | ProjectUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutDeleterInput | ProjectCreateOrConnectWithoutDeleterInput[]
    createMany?: ProjectCreateManyDeleterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput> | TaskCreateWithoutUpdaterInput[] | TaskUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdaterInput | TaskCreateOrConnectWithoutUpdaterInput[]
    createMany?: TaskCreateManyUpdaterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutDeleterInput = {
    create?: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput> | TaskCreateWithoutDeleterInput[] | TaskUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeleterInput | TaskCreateOrConnectWithoutDeleterInput[]
    createMany?: TaskCreateManyDeleterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCommentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput> | TaskCommentCreateWithoutCreatorInput[] | TaskCommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutCreatorInput | TaskCommentCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCommentCreateManyCreatorInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput> | UserCreateWithoutDeleterInput[] | UserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeleterInput | UserCreateOrConnectWithoutDeleterInput[]
    createMany?: UserCreateManyDeleterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput> | ProjectCreateWithoutUpdaterInput[] | ProjectUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUpdaterInput | ProjectCreateOrConnectWithoutUpdaterInput[]
    createMany?: ProjectCreateManyUpdaterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput> | ProjectCreateWithoutDeleterInput[] | ProjectUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutDeleterInput | ProjectCreateOrConnectWithoutDeleterInput[]
    createMany?: ProjectCreateManyDeleterInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput> | TaskCreateWithoutUpdaterInput[] | TaskUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdaterInput | TaskCreateOrConnectWithoutUpdaterInput[]
    createMany?: TaskCreateManyUpdaterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput> | TaskCreateWithoutDeleterInput[] | TaskUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeleterInput | TaskCreateOrConnectWithoutDeleterInput[]
    createMany?: TaskCreateManyDeleterInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCommentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput> | TaskCommentCreateWithoutCreatorInput[] | TaskCommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutCreatorInput | TaskCommentCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCommentCreateManyCreatorInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutCreated_userNestedInput = {
    create?: XOR<UserCreateWithoutCreated_userInput, UserUncheckedCreateWithoutCreated_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_userInput
    upsert?: UserUpsertWithoutCreated_userInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_userInput, UserUpdateWithoutCreated_userInput>, UserUncheckedUpdateWithoutCreated_userInput>
  }

  export type UserUpdateOneWithoutUpdated_userNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_userInput, UserUncheckedCreateWithoutUpdated_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_userInput
    upsert?: UserUpsertWithoutUpdated_userInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_userInput, UserUpdateWithoutUpdated_userInput>, UserUncheckedUpdateWithoutUpdated_userInput>
  }

  export type UserUpdateOneWithoutDeleted_userNestedInput = {
    create?: XOR<UserCreateWithoutDeleted_userInput, UserUncheckedCreateWithoutDeleted_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_userInput
    upsert?: UserUpsertWithoutDeleted_userInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeleted_userInput, UserUpdateWithoutDeleted_userInput>, UserUncheckedUpdateWithoutDeleted_userInput>
  }

  export type UserUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdaterInput | UserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdaterInput | UserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdaterInput | UserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput> | UserCreateWithoutDeleterInput[] | UserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeleterInput | UserCreateOrConnectWithoutDeleterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeleterInput | UserUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: UserCreateManyDeleterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeleterInput | UserUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeleterInput | UserUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput> | ProjectCreateWithoutUpdaterInput[] | ProjectUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUpdaterInput | ProjectCreateOrConnectWithoutUpdaterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUpdaterInput | ProjectUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ProjectCreateManyUpdaterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUpdaterInput | ProjectUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUpdaterInput | ProjectUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput> | ProjectCreateWithoutDeleterInput[] | ProjectUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutDeleterInput | ProjectCreateOrConnectWithoutDeleterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutDeleterInput | ProjectUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: ProjectCreateManyDeleterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutDeleterInput | ProjectUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutDeleterInput | ProjectUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput> | TaskCreateWithoutUpdaterInput[] | TaskUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdaterInput | TaskCreateOrConnectWithoutUpdaterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdaterInput | TaskUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: TaskCreateManyUpdaterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdaterInput | TaskUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdaterInput | TaskUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput> | TaskCreateWithoutDeleterInput[] | TaskUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeleterInput | TaskCreateOrConnectWithoutDeleterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeleterInput | TaskUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: TaskCreateManyDeleterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeleterInput | TaskUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeleterInput | TaskUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCommentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput> | TaskCommentCreateWithoutCreatorInput[] | TaskCommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutCreatorInput | TaskCommentCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutCreatorInput | TaskCommentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCommentCreateManyCreatorInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutCreatorInput | TaskCommentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutCreatorInput | TaskCommentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput> | UserCreateWithoutUpdaterInput[] | UserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdaterInput | UserCreateOrConnectWithoutUpdaterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdaterInput | UserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: UserCreateManyUpdaterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdaterInput | UserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdaterInput | UserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput> | UserCreateWithoutDeleterInput[] | UserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeleterInput | UserCreateOrConnectWithoutDeleterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeleterInput | UserUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: UserCreateManyDeleterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeleterInput | UserUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeleterInput | UserUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput> | ProjectCreateWithoutManagerInput[] | ProjectUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerInput | ProjectCreateOrConnectWithoutManagerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutManagerInput | ProjectUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProjectCreateManyManagerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutManagerInput | ProjectUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutManagerInput | ProjectUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput> | ProjectCreateWithoutUpdaterInput[] | ProjectUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUpdaterInput | ProjectCreateOrConnectWithoutUpdaterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUpdaterInput | ProjectUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: ProjectCreateManyUpdaterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUpdaterInput | ProjectUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUpdaterInput | ProjectUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput> | ProjectCreateWithoutDeleterInput[] | ProjectUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutDeleterInput | ProjectCreateOrConnectWithoutDeleterInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutDeleterInput | ProjectUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: ProjectCreateManyDeleterInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutDeleterInput | ProjectUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutDeleterInput | ProjectUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput> | TaskCreateWithoutUpdaterInput[] | TaskUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdaterInput | TaskCreateOrConnectWithoutUpdaterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdaterInput | TaskUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: TaskCreateManyUpdaterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdaterInput | TaskUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdaterInput | TaskUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput> | TaskCreateWithoutDeleterInput[] | TaskUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDeleterInput | TaskCreateOrConnectWithoutDeleterInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDeleterInput | TaskUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: TaskCreateManyDeleterInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDeleterInput | TaskUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDeleterInput | TaskUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput> | TaskCommentCreateWithoutCreatorInput[] | TaskCommentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutCreatorInput | TaskCommentCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutCreatorInput | TaskCommentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCommentCreateManyCreatorInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutCreatorInput | TaskCommentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutCreatorInput | TaskCommentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutManaged_projectsInput = {
    create?: XOR<UserCreateWithoutManaged_projectsInput, UserUncheckedCreateWithoutManaged_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManaged_projectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreated_projectsInput = {
    create?: XOR<UserCreateWithoutCreated_projectsInput, UserUncheckedCreateWithoutCreated_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_projectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_projectsInput = {
    create?: XOR<UserCreateWithoutUpdated_projectsInput, UserUncheckedCreateWithoutUpdated_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_projectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeleted_projectsInput = {
    create?: XOR<UserCreateWithoutDeleted_projectsInput, UserUncheckedCreateWithoutDeleted_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_projectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutManaged_projectsNestedInput = {
    create?: XOR<UserCreateWithoutManaged_projectsInput, UserUncheckedCreateWithoutManaged_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManaged_projectsInput
    upsert?: UserUpsertWithoutManaged_projectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManaged_projectsInput, UserUpdateWithoutManaged_projectsInput>, UserUncheckedUpdateWithoutManaged_projectsInput>
  }

  export type UserUpdateOneWithoutCreated_projectsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_projectsInput, UserUncheckedCreateWithoutCreated_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_projectsInput
    upsert?: UserUpsertWithoutCreated_projectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_projectsInput, UserUpdateWithoutCreated_projectsInput>, UserUncheckedUpdateWithoutCreated_projectsInput>
  }

  export type UserUpdateOneWithoutUpdated_projectsNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_projectsInput, UserUncheckedCreateWithoutUpdated_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_projectsInput
    upsert?: UserUpsertWithoutUpdated_projectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_projectsInput, UserUpdateWithoutUpdated_projectsInput>, UserUncheckedUpdateWithoutUpdated_projectsInput>
  }

  export type UserUpdateOneWithoutDeleted_projectsNestedInput = {
    create?: XOR<UserCreateWithoutDeleted_projectsInput, UserUncheckedCreateWithoutDeleted_projectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_projectsInput
    upsert?: UserUpsertWithoutDeleted_projectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeleted_projectsInput, UserUpdateWithoutDeleted_projectsInput>, UserUncheckedUpdateWithoutDeleted_projectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigned_tasksInput = {
    create?: XOR<UserCreateWithoutAssigned_tasksInput, UserUncheckedCreateWithoutAssigned_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_tasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreated_tasksInput = {
    create?: XOR<UserCreateWithoutCreated_tasksInput, UserUncheckedCreateWithoutCreated_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_tasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdated_tasksInput = {
    create?: XOR<UserCreateWithoutUpdated_tasksInput, UserUncheckedCreateWithoutUpdated_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_tasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeleted_tasksInput = {
    create?: XOR<UserCreateWithoutDeleted_tasksInput, UserUncheckedCreateWithoutDeleted_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_tasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type TaskCommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutAssigned_tasksNestedInput = {
    create?: XOR<UserCreateWithoutAssigned_tasksInput, UserUncheckedCreateWithoutAssigned_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_tasksInput
    upsert?: UserUpsertWithoutAssigned_tasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigned_tasksInput, UserUpdateWithoutAssigned_tasksInput>, UserUncheckedUpdateWithoutAssigned_tasksInput>
  }

  export type UserUpdateOneWithoutCreated_tasksNestedInput = {
    create?: XOR<UserCreateWithoutCreated_tasksInput, UserUncheckedCreateWithoutCreated_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_tasksInput
    upsert?: UserUpsertWithoutCreated_tasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_tasksInput, UserUpdateWithoutCreated_tasksInput>, UserUncheckedUpdateWithoutCreated_tasksInput>
  }

  export type UserUpdateOneWithoutUpdated_tasksNestedInput = {
    create?: XOR<UserCreateWithoutUpdated_tasksInput, UserUncheckedCreateWithoutUpdated_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdated_tasksInput
    upsert?: UserUpsertWithoutUpdated_tasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdated_tasksInput, UserUpdateWithoutUpdated_tasksInput>, UserUncheckedUpdateWithoutUpdated_tasksInput>
  }

  export type UserUpdateOneWithoutDeleted_tasksNestedInput = {
    create?: XOR<UserCreateWithoutDeleted_tasksInput, UserUncheckedCreateWithoutDeleted_tasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleted_tasksInput
    upsert?: UserUpsertWithoutDeleted_tasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeleted_tasksInput, UserUpdateWithoutDeleted_tasksInput>, UserUncheckedUpdateWithoutDeleted_tasksInput>
  }

  export type TaskCommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutTaskInput | TaskCommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutTaskInput | TaskCommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutTaskInput | TaskCommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type TaskCommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput> | TaskCommentCreateWithoutTaskInput[] | TaskCommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskCommentCreateOrConnectWithoutTaskInput | TaskCommentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskCommentUpsertWithWhereUniqueWithoutTaskInput | TaskCommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskCommentCreateManyTaskInputEnvelope
    set?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    disconnect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    delete?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    connect?: TaskCommentWhereUniqueInput | TaskCommentWhereUniqueInput[]
    update?: TaskCommentUpdateWithWhereUniqueWithoutTaskInput | TaskCommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskCommentUpdateManyWithWhereWithoutTaskInput | TaskCommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTask_commentsInput = {
    create?: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutTask_commentsNestedInput = {
    create?: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTask_commentsInput
    upsert?: UserUpsertWithoutTask_commentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTask_commentsInput, UserUpdateWithoutTask_commentsInput>, UserUncheckedUpdateWithoutTask_commentsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutCreated_userInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreated_userInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreated_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_userInput, UserUncheckedCreateWithoutCreated_userInput>
  }

  export type UserCreateWithoutUpdated_userInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUpdated_userInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUpdated_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_userInput, UserUncheckedCreateWithoutUpdated_userInput>
  }

  export type UserCreateWithoutDeleted_userInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeleted_userInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeleted_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeleted_userInput, UserUncheckedCreateWithoutDeleted_userInput>
  }

  export type UserCreateWithoutCreatorInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserCreateManyCreatorInputEnvelope = {
    data: UserCreateManyCreatorInput | UserCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUpdaterInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUpdaterInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput>
  }

  export type UserCreateManyUpdaterInputEnvelope = {
    data: UserCreateManyUpdaterInput | UserCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDeleterInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeleterInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeleterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput>
  }

  export type UserCreateManyDeleterInputEnvelope = {
    data: UserCreateManyDeleterInput | UserCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutManagerInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    creator?: UserCreateNestedOneWithoutCreated_projectsInput
    updater?: UserCreateNestedOneWithoutUpdated_projectsInput
    deleter?: UserCreateNestedOneWithoutDeleted_projectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutManagerInput = {
    id?: number
    title: string
    description?: string | null
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectCreateManyManagerInputEnvelope = {
    data: ProjectCreateManyManagerInput | ProjectCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCreatorInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    manager: UserCreateNestedOneWithoutManaged_projectsInput
    updater?: UserCreateNestedOneWithoutUpdated_projectsInput
    deleter?: UserCreateNestedOneWithoutDeleted_projectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUpdaterInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    manager: UserCreateNestedOneWithoutManaged_projectsInput
    creator?: UserCreateNestedOneWithoutCreated_projectsInput
    deleter?: UserCreateNestedOneWithoutDeleted_projectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUpdaterInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUpdaterInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput>
  }

  export type ProjectCreateManyUpdaterInputEnvelope = {
    data: ProjectCreateManyUpdaterInput | ProjectCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutDeleterInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    manager: UserCreateNestedOneWithoutManaged_projectsInput
    creator?: UserCreateNestedOneWithoutCreated_projectsInput
    updater?: UserCreateNestedOneWithoutUpdated_projectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDeleterInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDeleterInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput>
  }

  export type ProjectCreateManyDeleterInputEnvelope = {
    data: ProjectCreateManyDeleterInput | ProjectCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssigneeInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatorInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskCreateManyCreatorInputEnvelope = {
    data: TaskCreateManyCreatorInput | TaskCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUpdaterInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUpdaterInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUpdaterInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput>
  }

  export type TaskCreateManyUpdaterInputEnvelope = {
    data: TaskCreateManyUpdaterInput | TaskCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutDeleterInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDeleterInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDeleterInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput>
  }

  export type TaskCreateManyDeleterInputEnvelope = {
    data: TaskCreateManyDeleterInput | TaskCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type TaskCommentCreateWithoutCreatorInput = {
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutCommentsInput
  }

  export type TaskCommentUncheckedCreateWithoutCreatorInput = {
    id?: number
    task_id: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TaskCommentCreateOrConnectWithoutCreatorInput = {
    where: TaskCommentWhereUniqueInput
    create: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput>
  }

  export type TaskCommentCreateManyCreatorInputEnvelope = {
    data: TaskCommentCreateManyCreatorInput | TaskCommentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_userInput = {
    update: XOR<UserUpdateWithoutCreated_userInput, UserUncheckedUpdateWithoutCreated_userInput>
    create: XOR<UserCreateWithoutCreated_userInput, UserUncheckedCreateWithoutCreated_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_userInput, UserUncheckedUpdateWithoutCreated_userInput>
  }

  export type UserUpdateWithoutCreated_userInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutUpdated_userInput = {
    update: XOR<UserUpdateWithoutUpdated_userInput, UserUncheckedUpdateWithoutUpdated_userInput>
    create: XOR<UserCreateWithoutUpdated_userInput, UserUncheckedCreateWithoutUpdated_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_userInput, UserUncheckedUpdateWithoutUpdated_userInput>
  }

  export type UserUpdateWithoutUpdated_userInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutDeleted_userInput = {
    update: XOR<UserUpdateWithoutDeleted_userInput, UserUncheckedUpdateWithoutDeleted_userInput>
    create: XOR<UserCreateWithoutDeleted_userInput, UserUncheckedCreateWithoutDeleted_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeleted_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeleted_userInput, UserUncheckedUpdateWithoutDeleted_userInput>
  }

  export type UserUpdateWithoutDeleted_userInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeleted_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatorInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified_at?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    remember_token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_by?: IntNullableFilter<"User"> | number | null
    updated_by?: IntNullableFilter<"User"> | number | null
    deleted_by?: IntNullableFilter<"User"> | number | null
    activation_token?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    activated_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUpdaterInput, UserUncheckedUpdateWithoutUpdaterInput>
    create: XOR<UserCreateWithoutUpdaterInput, UserUncheckedCreateWithoutUpdaterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUpdaterInput, UserUncheckedUpdateWithoutUpdaterInput>
  }

  export type UserUpdateManyWithWhereWithoutUpdaterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDeleterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDeleterInput, UserUncheckedUpdateWithoutDeleterInput>
    create: XOR<UserCreateWithoutDeleterInput, UserUncheckedCreateWithoutDeleterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDeleterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDeleterInput, UserUncheckedUpdateWithoutDeleterInput>
  }

  export type UserUpdateManyWithWhereWithoutDeleterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDeleterInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
    create: XOR<ProjectCreateWithoutManagerInput, ProjectUncheckedCreateWithoutManagerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutManagerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutManagerInput, ProjectUncheckedUpdateWithoutManagerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutManagerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutManagerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    manager_id?: IntFilter<"Project"> | number
    created_by?: IntNullableFilter<"Project"> | number | null
    updated_by?: IntNullableFilter<"Project"> | number | null
    deleted_by?: IntNullableFilter<"Project"> | number | null
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Project"> | Date | string | null
    abbreviation?: StringFilter<"Project"> | string
    task_count?: IntFilter<"Project"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUpdaterInput, ProjectUncheckedUpdateWithoutUpdaterInput>
    create: XOR<ProjectCreateWithoutUpdaterInput, ProjectUncheckedCreateWithoutUpdaterInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUpdaterInput, ProjectUncheckedUpdateWithoutUpdaterInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUpdaterInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutDeleterInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutDeleterInput, ProjectUncheckedUpdateWithoutDeleterInput>
    create: XOR<ProjectCreateWithoutDeleterInput, ProjectUncheckedCreateWithoutDeleterInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutDeleterInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutDeleterInput, ProjectUncheckedUpdateWithoutDeleterInput>
  }

  export type ProjectUpdateManyWithWhereWithoutDeleterInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutDeleterInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    attachments?: JsonNullableFilter<"Task">
    assigned_to?: IntFilter<"Task"> | number
    project_id?: IntFilter<"Task"> | number
    created_by?: IntNullableFilter<"Task"> | number | null
    updated_by?: IntNullableFilter<"Task"> | number | null
    deleted_by?: IntNullableFilter<"Task"> | number | null
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeFilter<"Task"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    ticket_no?: StringFilter<"Task"> | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUpdaterInput, TaskUncheckedUpdateWithoutUpdaterInput>
    create: XOR<TaskCreateWithoutUpdaterInput, TaskUncheckedCreateWithoutUpdaterInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUpdaterInput, TaskUncheckedUpdateWithoutUpdaterInput>
  }

  export type TaskUpdateManyWithWhereWithoutUpdaterInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutDeleterInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutDeleterInput, TaskUncheckedUpdateWithoutDeleterInput>
    create: XOR<TaskCreateWithoutDeleterInput, TaskUncheckedCreateWithoutDeleterInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutDeleterInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutDeleterInput, TaskUncheckedUpdateWithoutDeleterInput>
  }

  export type TaskUpdateManyWithWhereWithoutDeleterInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutDeleterInput>
  }

  export type TaskCommentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TaskCommentWhereUniqueInput
    update: XOR<TaskCommentUpdateWithoutCreatorInput, TaskCommentUncheckedUpdateWithoutCreatorInput>
    create: XOR<TaskCommentCreateWithoutCreatorInput, TaskCommentUncheckedCreateWithoutCreatorInput>
  }

  export type TaskCommentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TaskCommentWhereUniqueInput
    data: XOR<TaskCommentUpdateWithoutCreatorInput, TaskCommentUncheckedUpdateWithoutCreatorInput>
  }

  export type TaskCommentUpdateManyWithWhereWithoutCreatorInput = {
    where: TaskCommentScalarWhereInput
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TaskCommentScalarWhereInput = {
    AND?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
    OR?: TaskCommentScalarWhereInput[]
    NOT?: TaskCommentScalarWhereInput | TaskCommentScalarWhereInput[]
    id?: IntFilter<"TaskComment"> | number
    task_id?: IntFilter<"TaskComment"> | number
    created_by?: IntFilter<"TaskComment"> | number
    comment?: StringFilter<"TaskComment"> | string
    attachment?: JsonNullableFilter<"TaskComment">
    created_at?: DateTimeFilter<"TaskComment"> | Date | string
    updated_at?: DateTimeFilter<"TaskComment"> | Date | string
    deleted_at?: DateTimeNullableFilter<"TaskComment"> | Date | string | null
  }

  export type UserCreateWithoutManaged_projectsInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutManaged_projectsInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutManaged_projectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManaged_projectsInput, UserUncheckedCreateWithoutManaged_projectsInput>
  }

  export type UserCreateWithoutCreated_projectsInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreated_projectsInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreated_projectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_projectsInput, UserUncheckedCreateWithoutCreated_projectsInput>
  }

  export type UserCreateWithoutUpdated_projectsInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUpdated_projectsInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUpdated_projectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_projectsInput, UserUncheckedCreateWithoutUpdated_projectsInput>
  }

  export type UserCreateWithoutDeleted_projectsInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeleted_projectsInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeleted_projectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeleted_projectsInput, UserUncheckedCreateWithoutDeleted_projectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
    comments?: TaskCommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    comments?: TaskCommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutManaged_projectsInput = {
    update: XOR<UserUpdateWithoutManaged_projectsInput, UserUncheckedUpdateWithoutManaged_projectsInput>
    create: XOR<UserCreateWithoutManaged_projectsInput, UserUncheckedCreateWithoutManaged_projectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManaged_projectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManaged_projectsInput, UserUncheckedUpdateWithoutManaged_projectsInput>
  }

  export type UserUpdateWithoutManaged_projectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutManaged_projectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreated_projectsInput = {
    update: XOR<UserUpdateWithoutCreated_projectsInput, UserUncheckedUpdateWithoutCreated_projectsInput>
    create: XOR<UserCreateWithoutCreated_projectsInput, UserUncheckedCreateWithoutCreated_projectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_projectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_projectsInput, UserUncheckedUpdateWithoutCreated_projectsInput>
  }

  export type UserUpdateWithoutCreated_projectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_projectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutUpdated_projectsInput = {
    update: XOR<UserUpdateWithoutUpdated_projectsInput, UserUncheckedUpdateWithoutUpdated_projectsInput>
    create: XOR<UserCreateWithoutUpdated_projectsInput, UserUncheckedCreateWithoutUpdated_projectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_projectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_projectsInput, UserUncheckedUpdateWithoutUpdated_projectsInput>
  }

  export type UserUpdateWithoutUpdated_projectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_projectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutDeleted_projectsInput = {
    update: XOR<UserUpdateWithoutDeleted_projectsInput, UserUncheckedUpdateWithoutDeleted_projectsInput>
    create: XOR<UserCreateWithoutDeleted_projectsInput, UserUncheckedCreateWithoutDeleted_projectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeleted_projectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeleted_projectsInput, UserUncheckedUpdateWithoutDeleted_projectsInput>
  }

  export type UserUpdateWithoutDeleted_projectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeleted_projectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
    manager: UserCreateNestedOneWithoutManaged_projectsInput
    creator?: UserCreateNestedOneWithoutCreated_projectsInput
    updater?: UserCreateNestedOneWithoutUpdated_projectsInput
    deleter?: UserCreateNestedOneWithoutDeleted_projectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssigned_tasksInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAssigned_tasksInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssigned_tasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigned_tasksInput, UserUncheckedCreateWithoutAssigned_tasksInput>
  }

  export type UserCreateWithoutCreated_tasksInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreated_tasksInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreated_tasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_tasksInput, UserUncheckedCreateWithoutCreated_tasksInput>
  }

  export type UserCreateWithoutUpdated_tasksInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUpdated_tasksInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUpdated_tasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdated_tasksInput, UserUncheckedCreateWithoutUpdated_tasksInput>
  }

  export type UserCreateWithoutDeleted_tasksInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    task_comments?: TaskCommentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeleted_tasksInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    task_comments?: TaskCommentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeleted_tasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeleted_tasksInput, UserUncheckedCreateWithoutDeleted_tasksInput>
  }

  export type TaskCommentCreateWithoutTaskInput = {
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: UserCreateNestedOneWithoutTask_commentsInput
  }

  export type TaskCommentUncheckedCreateWithoutTaskInput = {
    id?: number
    created_by: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TaskCommentCreateOrConnectWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    create: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput>
  }

  export type TaskCommentCreateManyTaskInputEnvelope = {
    data: TaskCommentCreateManyTaskInput | TaskCommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    manager?: UserUpdateOneRequiredWithoutManaged_projectsNestedInput
    creator?: UserUpdateOneWithoutCreated_projectsNestedInput
    updater?: UserUpdateOneWithoutUpdated_projectsNestedInput
    deleter?: UserUpdateOneWithoutDeleted_projectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutAssigned_tasksInput = {
    update: XOR<UserUpdateWithoutAssigned_tasksInput, UserUncheckedUpdateWithoutAssigned_tasksInput>
    create: XOR<UserCreateWithoutAssigned_tasksInput, UserUncheckedCreateWithoutAssigned_tasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigned_tasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigned_tasksInput, UserUncheckedUpdateWithoutAssigned_tasksInput>
  }

  export type UserUpdateWithoutAssigned_tasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigned_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreated_tasksInput = {
    update: XOR<UserUpdateWithoutCreated_tasksInput, UserUncheckedUpdateWithoutCreated_tasksInput>
    create: XOR<UserCreateWithoutCreated_tasksInput, UserUncheckedCreateWithoutCreated_tasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_tasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_tasksInput, UserUncheckedUpdateWithoutCreated_tasksInput>
  }

  export type UserUpdateWithoutCreated_tasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutUpdated_tasksInput = {
    update: XOR<UserUpdateWithoutUpdated_tasksInput, UserUncheckedUpdateWithoutUpdated_tasksInput>
    create: XOR<UserCreateWithoutUpdated_tasksInput, UserUncheckedCreateWithoutUpdated_tasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdated_tasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdated_tasksInput, UserUncheckedUpdateWithoutUpdated_tasksInput>
  }

  export type UserUpdateWithoutUpdated_tasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdated_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutDeleted_tasksInput = {
    update: XOR<UserUpdateWithoutDeleted_tasksInput, UserUncheckedUpdateWithoutDeleted_tasksInput>
    create: XOR<UserCreateWithoutDeleted_tasksInput, UserUncheckedCreateWithoutDeleted_tasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeleted_tasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeleted_tasksInput, UserUncheckedUpdateWithoutDeleted_tasksInput>
  }

  export type UserUpdateWithoutDeleted_tasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeleted_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TaskCommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    update: XOR<TaskCommentUpdateWithoutTaskInput, TaskCommentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskCommentCreateWithoutTaskInput, TaskCommentUncheckedCreateWithoutTaskInput>
  }

  export type TaskCommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskCommentWhereUniqueInput
    data: XOR<TaskCommentUpdateWithoutTaskInput, TaskCommentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskCommentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskCommentScalarWhereInput
    data: XOR<TaskCommentUpdateManyMutationInput, TaskCommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutCommentsInput = {
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssigned_tasksInput
    creator?: UserCreateNestedOneWithoutCreated_tasksInput
    updater?: UserCreateNestedOneWithoutUpdated_tasksInput
    deleter?: UserCreateNestedOneWithoutDeleted_tasksInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutTask_commentsInput = {
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    creator?: UserCreateNestedOneWithoutCreated_userInput
    updater?: UserCreateNestedOneWithoutUpdated_userInput
    deleter?: UserCreateNestedOneWithoutDeleted_userInput
    created_user?: UserCreateNestedManyWithoutCreatorInput
    updated_user?: UserCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectCreateNestedManyWithoutManagerInput
    created_projects?: ProjectCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskCreateNestedManyWithoutDeleterInput
  }

  export type UserUncheckedCreateWithoutTask_commentsInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
    created_user?: UserUncheckedCreateNestedManyWithoutCreatorInput
    updated_user?: UserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_user?: UserUncheckedCreateNestedManyWithoutDeleterInput
    managed_projects?: ProjectUncheckedCreateNestedManyWithoutManagerInput
    created_projects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    updated_projects?: ProjectUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_projects?: ProjectUncheckedCreateNestedManyWithoutDeleterInput
    assigned_tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    created_tasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    updated_tasks?: TaskUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_tasks?: TaskUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type UserCreateOrConnectWithoutTask_commentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutTask_commentsInput = {
    update: XOR<UserUpdateWithoutTask_commentsInput, UserUncheckedUpdateWithoutTask_commentsInput>
    create: XOR<UserCreateWithoutTask_commentsInput, UserUncheckedCreateWithoutTask_commentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTask_commentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTask_commentsInput, UserUncheckedUpdateWithoutTask_commentsInput>
  }

  export type UserUpdateWithoutTask_commentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
  }

  export type UserUncheckedUpdateWithoutTask_commentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type UserCreateManyCreatorInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    updated_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
  }

  export type UserCreateManyUpdaterInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    deleted_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
  }

  export type UserCreateManyDeleterInput = {
    id?: number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    role: string
    deleted_at?: Date | string | null
    remember_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: number | null
    updated_by?: number | null
    activation_token?: string | null
    is_active?: boolean
    activated_at?: Date | string | null
  }

  export type ProjectCreateManyManagerInput = {
    id?: number
    title: string
    description?: string | null
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type ProjectCreateManyCreatorInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type ProjectCreateManyUpdaterInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type ProjectCreateManyDeleterInput = {
    id?: number
    title: string
    description?: string | null
    manager_id: number
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    abbreviation: string
    task_count?: number
  }

  export type TaskCreateManyAssigneeInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskCreateManyCreatorInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskCreateManyUpdaterInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskCreateManyDeleterInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    project_id: number
    created_by?: number | null
    updated_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskCommentCreateManyCreatorInput = {
    id?: number
    task_id: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutUpdaterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    deleter?: UserUpdateOneWithoutDeleted_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutDeleterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneWithoutCreated_userNestedInput
    updater?: UserUpdateOneWithoutUpdated_userNestedInput
    created_user?: UserUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_user?: UserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_user?: UserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_user?: UserUncheckedUpdateManyWithoutDeleterNestedInput
    managed_projects?: ProjectUncheckedUpdateManyWithoutManagerNestedInput
    created_projects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    updated_projects?: ProjectUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_projects?: ProjectUncheckedUpdateManyWithoutDeleterNestedInput
    assigned_tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    created_tasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    updated_tasks?: TaskUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_tasks?: TaskUncheckedUpdateManyWithoutDeleterNestedInput
    task_comments?: TaskCommentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    activation_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    activated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpdateWithoutManagerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    creator?: UserUpdateOneWithoutCreated_projectsNestedInput
    updater?: UserUpdateOneWithoutUpdated_projectsNestedInput
    deleter?: UserUpdateOneWithoutDeleted_projectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    manager?: UserUpdateOneRequiredWithoutManaged_projectsNestedInput
    updater?: UserUpdateOneWithoutUpdated_projectsNestedInput
    deleter?: UserUpdateOneWithoutDeleted_projectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutUpdaterInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    manager?: UserUpdateOneRequiredWithoutManaged_projectsNestedInput
    creator?: UserUpdateOneWithoutCreated_projectsNestedInput
    deleter?: UserUpdateOneWithoutDeleted_projectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutDeleterInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    manager?: UserUpdateOneRequiredWithoutManaged_projectsNestedInput
    creator?: UserUpdateOneWithoutCreated_projectsNestedInput
    updater?: UserUpdateOneWithoutUpdated_projectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abbreviation?: StringFieldUpdateOperationsInput | string
    task_count?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutAssigneeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutUpdaterInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUpdaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutDeleterInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutDeleterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCommentUpdateWithoutCreatorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type TaskCommentUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCommentUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    priority: string
    status: string
    due_date?: Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to: number
    created_by?: number | null
    updated_by?: number | null
    deleted_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ticket_no: string
  }

  export type TaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    assignee?: UserUpdateOneWithoutAssigned_tasksNestedInput
    creator?: UserUpdateOneWithoutCreated_tasksNestedInput
    updater?: UserUpdateOneWithoutUpdated_tasksNestedInput
    deleter?: UserUpdateOneWithoutDeleted_tasksNestedInput
    comments?: TaskCommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
    comments?: TaskCommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    deleted_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket_no?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCommentCreateManyTaskInput = {
    id?: number
    created_by: number
    comment: string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type TaskCommentUpdateWithoutTaskInput = {
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutTask_commentsNestedInput
  }

  export type TaskCommentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCommentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    attachment?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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