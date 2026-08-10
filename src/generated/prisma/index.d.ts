
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model mesas
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type mesas = $Result.DefaultSelection<Prisma.$mesasPayload>
/**
 * Model reservaciones
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reservaciones = $Result.DefaultSelection<Prisma.$reservacionesPayload>
/**
 * Model usuarios
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estado_reservacion: {
  pendiente: 'pendiente',
  confirmada: 'confirmada',
  cancelada: 'cancelada',
  completada: 'completada'
};

export type estado_reservacion = (typeof estado_reservacion)[keyof typeof estado_reservacion]


export const rol_usuario: {
  cliente: 'cliente',
  admin: 'admin'
};

export type rol_usuario = (typeof rol_usuario)[keyof typeof rol_usuario]

}

export type estado_reservacion = $Enums.estado_reservacion

export const estado_reservacion: typeof $Enums.estado_reservacion

export type rol_usuario = $Enums.rol_usuario

export const rol_usuario: typeof $Enums.rol_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Mesas
 * const mesas = await prisma.mesas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Mesas
   * const mesas = await prisma.mesas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mesas`: Exposes CRUD operations for the **mesas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesas
    * const mesas = await prisma.mesas.findMany()
    * ```
    */
  get mesas(): Prisma.mesasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservaciones`: Exposes CRUD operations for the **reservaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservaciones
    * const reservaciones = await prisma.reservaciones.findMany()
    * ```
    */
  get reservaciones(): Prisma.reservacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    mesas: 'mesas',
    reservaciones: 'reservaciones',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mesas" | "reservaciones" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mesas: {
        payload: Prisma.$mesasPayload<ExtArgs>
        fields: Prisma.mesasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mesasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mesasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          findFirst: {
            args: Prisma.mesasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mesasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          findMany: {
            args: Prisma.mesasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>[]
          }
          create: {
            args: Prisma.mesasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          createMany: {
            args: Prisma.mesasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mesasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>[]
          }
          delete: {
            args: Prisma.mesasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          update: {
            args: Prisma.mesasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          deleteMany: {
            args: Prisma.mesasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mesasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mesasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>[]
          }
          upsert: {
            args: Prisma.mesasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesasPayload>
          }
          aggregate: {
            args: Prisma.MesasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesas>
          }
          groupBy: {
            args: Prisma.mesasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesasGroupByOutputType>[]
          }
          count: {
            args: Prisma.mesasCountArgs<ExtArgs>
            result: $Utils.Optional<MesasCountAggregateOutputType> | number
          }
        }
      }
      reservaciones: {
        payload: Prisma.$reservacionesPayload<ExtArgs>
        fields: Prisma.reservacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          findFirst: {
            args: Prisma.reservacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          findMany: {
            args: Prisma.reservacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>[]
          }
          create: {
            args: Prisma.reservacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          createMany: {
            args: Prisma.reservacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>[]
          }
          delete: {
            args: Prisma.reservacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          update: {
            args: Prisma.reservacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          deleteMany: {
            args: Prisma.reservacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>[]
          }
          upsert: {
            args: Prisma.reservacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservacionesPayload>
          }
          aggregate: {
            args: Prisma.ReservacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservaciones>
          }
          groupBy: {
            args: Prisma.reservacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservacionesCountArgs<ExtArgs>
            result: $Utils.Optional<ReservacionesCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    mesas?: mesasOmit
    reservaciones?: reservacionesOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MesasCountOutputType
   */

  export type MesasCountOutputType = {
    reservaciones: number
  }

  export type MesasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | MesasCountOutputTypeCountReservacionesArgs
  }

  // Custom InputTypes
  /**
   * MesasCountOutputType without action
   */
  export type MesasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MesasCountOutputType
     */
    select?: MesasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MesasCountOutputType without action
   */
  export type MesasCountOutputTypeCountReservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservacionesWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    reservaciones: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | UsuariosCountOutputTypeCountReservacionesArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservacionesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model mesas
   */

  export type AggregateMesas = {
    _count: MesasCountAggregateOutputType | null
    _avg: MesasAvgAggregateOutputType | null
    _sum: MesasSumAggregateOutputType | null
    _min: MesasMinAggregateOutputType | null
    _max: MesasMaxAggregateOutputType | null
  }

  export type MesasAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
  }

  export type MesasSumAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
  }

  export type MesasMinAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
    ubicacion: string | null
    activa: boolean | null
    creado_en: Date | null
  }

  export type MesasMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidad: number | null
    ubicacion: string | null
    activa: boolean | null
    creado_en: Date | null
  }

  export type MesasCountAggregateOutputType = {
    id: number
    numero: number
    capacidad: number
    ubicacion: number
    activa: number
    creado_en: number
    _all: number
  }


  export type MesasAvgAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
  }

  export type MesasSumAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
  }

  export type MesasMinAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    ubicacion?: true
    activa?: true
    creado_en?: true
  }

  export type MesasMaxAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    ubicacion?: true
    activa?: true
    creado_en?: true
  }

  export type MesasCountAggregateInputType = {
    id?: true
    numero?: true
    capacidad?: true
    ubicacion?: true
    activa?: true
    creado_en?: true
    _all?: true
  }

  export type MesasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mesas to aggregate.
     */
    where?: mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesas to fetch.
     */
    orderBy?: mesasOrderByWithRelationInput | mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mesas
    **/
    _count?: true | MesasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesasMaxAggregateInputType
  }

  export type GetMesasAggregateType<T extends MesasAggregateArgs> = {
        [P in keyof T & keyof AggregateMesas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesas[P]>
      : GetScalarType<T[P], AggregateMesas[P]>
  }




  export type mesasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mesasWhereInput
    orderBy?: mesasOrderByWithAggregationInput | mesasOrderByWithAggregationInput[]
    by: MesasScalarFieldEnum[] | MesasScalarFieldEnum
    having?: mesasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesasCountAggregateInputType | true
    _avg?: MesasAvgAggregateInputType
    _sum?: MesasSumAggregateInputType
    _min?: MesasMinAggregateInputType
    _max?: MesasMaxAggregateInputType
  }

  export type MesasGroupByOutputType = {
    id: number
    numero: number
    capacidad: number
    ubicacion: string | null
    activa: boolean
    creado_en: Date
    _count: MesasCountAggregateOutputType | null
    _avg: MesasAvgAggregateOutputType | null
    _sum: MesasSumAggregateOutputType | null
    _min: MesasMinAggregateOutputType | null
    _max: MesasMaxAggregateOutputType | null
  }

  type GetMesasGroupByPayload<T extends mesasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesasGroupByOutputType[P]>
            : GetScalarType<T[P], MesasGroupByOutputType[P]>
        }
      >
    >


  export type mesasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    activa?: boolean
    creado_en?: boolean
    reservaciones?: boolean | mesas$reservacionesArgs<ExtArgs>
    _count?: boolean | MesasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesas"]>

  export type mesasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    activa?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["mesas"]>

  export type mesasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    activa?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["mesas"]>

  export type mesasSelectScalar = {
    id?: boolean
    numero?: boolean
    capacidad?: boolean
    ubicacion?: boolean
    activa?: boolean
    creado_en?: boolean
  }

  export type mesasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "capacidad" | "ubicacion" | "activa" | "creado_en", ExtArgs["result"]["mesas"]>
  export type mesasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | mesas$reservacionesArgs<ExtArgs>
    _count?: boolean | MesasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mesasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mesasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mesasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mesas"
    objects: {
      reservaciones: Prisma.$reservacionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      capacidad: number
      ubicacion: string | null
      activa: boolean
      creado_en: Date
    }, ExtArgs["result"]["mesas"]>
    composites: {}
  }

  type mesasGetPayload<S extends boolean | null | undefined | mesasDefaultArgs> = $Result.GetResult<Prisma.$mesasPayload, S>

  type mesasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mesasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesasCountAggregateInputType | true
    }

  export interface mesasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mesas'], meta: { name: 'mesas' } }
    /**
     * Find zero or one Mesas that matches the filter.
     * @param {mesasFindUniqueArgs} args - Arguments to find a Mesas
     * @example
     * // Get one Mesas
     * const mesas = await prisma.mesas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mesasFindUniqueArgs>(args: SelectSubset<T, mesasFindUniqueArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mesasFindUniqueOrThrowArgs} args - Arguments to find a Mesas
     * @example
     * // Get one Mesas
     * const mesas = await prisma.mesas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mesasFindUniqueOrThrowArgs>(args: SelectSubset<T, mesasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasFindFirstArgs} args - Arguments to find a Mesas
     * @example
     * // Get one Mesas
     * const mesas = await prisma.mesas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mesasFindFirstArgs>(args?: SelectSubset<T, mesasFindFirstArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasFindFirstOrThrowArgs} args - Arguments to find a Mesas
     * @example
     * // Get one Mesas
     * const mesas = await prisma.mesas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mesasFindFirstOrThrowArgs>(args?: SelectSubset<T, mesasFindFirstOrThrowArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesas
     * const mesas = await prisma.mesas.findMany()
     * 
     * // Get first 10 Mesas
     * const mesas = await prisma.mesas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mesasWithIdOnly = await prisma.mesas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mesasFindManyArgs>(args?: SelectSubset<T, mesasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesas.
     * @param {mesasCreateArgs} args - Arguments to create a Mesas.
     * @example
     * // Create one Mesas
     * const Mesas = await prisma.mesas.create({
     *   data: {
     *     // ... data to create a Mesas
     *   }
     * })
     * 
     */
    create<T extends mesasCreateArgs>(args: SelectSubset<T, mesasCreateArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesas.
     * @param {mesasCreateManyArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesas = await prisma.mesas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mesasCreateManyArgs>(args?: SelectSubset<T, mesasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesas and returns the data saved in the database.
     * @param {mesasCreateManyAndReturnArgs} args - Arguments to create many Mesas.
     * @example
     * // Create many Mesas
     * const mesas = await prisma.mesas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesas and only return the `id`
     * const mesasWithIdOnly = await prisma.mesas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mesasCreateManyAndReturnArgs>(args?: SelectSubset<T, mesasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesas.
     * @param {mesasDeleteArgs} args - Arguments to delete one Mesas.
     * @example
     * // Delete one Mesas
     * const Mesas = await prisma.mesas.delete({
     *   where: {
     *     // ... filter to delete one Mesas
     *   }
     * })
     * 
     */
    delete<T extends mesasDeleteArgs>(args: SelectSubset<T, mesasDeleteArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesas.
     * @param {mesasUpdateArgs} args - Arguments to update one Mesas.
     * @example
     * // Update one Mesas
     * const mesas = await prisma.mesas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mesasUpdateArgs>(args: SelectSubset<T, mesasUpdateArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesas.
     * @param {mesasDeleteManyArgs} args - Arguments to filter Mesas to delete.
     * @example
     * // Delete a few Mesas
     * const { count } = await prisma.mesas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mesasDeleteManyArgs>(args?: SelectSubset<T, mesasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesas
     * const mesas = await prisma.mesas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mesasUpdateManyArgs>(args: SelectSubset<T, mesasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesas and returns the data updated in the database.
     * @param {mesasUpdateManyAndReturnArgs} args - Arguments to update many Mesas.
     * @example
     * // Update many Mesas
     * const mesas = await prisma.mesas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesas and only return the `id`
     * const mesasWithIdOnly = await prisma.mesas.updateManyAndReturn({
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
    updateManyAndReturn<T extends mesasUpdateManyAndReturnArgs>(args: SelectSubset<T, mesasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesas.
     * @param {mesasUpsertArgs} args - Arguments to update or create a Mesas.
     * @example
     * // Update or create a Mesas
     * const mesas = await prisma.mesas.upsert({
     *   create: {
     *     // ... data to create a Mesas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesas we want to update
     *   }
     * })
     */
    upsert<T extends mesasUpsertArgs>(args: SelectSubset<T, mesasUpsertArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasCountArgs} args - Arguments to filter Mesas to count.
     * @example
     * // Count the number of Mesas
     * const count = await prisma.mesas.count({
     *   where: {
     *     // ... the filter for the Mesas we want to count
     *   }
     * })
    **/
    count<T extends mesasCountArgs>(
      args?: Subset<T, mesasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MesasAggregateArgs>(args: Subset<T, MesasAggregateArgs>): Prisma.PrismaPromise<GetMesasAggregateType<T>>

    /**
     * Group by Mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesasGroupByArgs} args - Group by arguments.
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
      T extends mesasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mesasGroupByArgs['orderBy'] }
        : { orderBy?: mesasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mesasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mesas model
   */
  readonly fields: mesasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mesas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mesasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservaciones<T extends mesas$reservacionesArgs<ExtArgs> = {}>(args?: Subset<T, mesas$reservacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mesas model
   */
  interface mesasFieldRefs {
    readonly id: FieldRef<"mesas", 'Int'>
    readonly numero: FieldRef<"mesas", 'Int'>
    readonly capacidad: FieldRef<"mesas", 'Int'>
    readonly ubicacion: FieldRef<"mesas", 'String'>
    readonly activa: FieldRef<"mesas", 'Boolean'>
    readonly creado_en: FieldRef<"mesas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mesas findUnique
   */
  export type mesasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter, which mesas to fetch.
     */
    where: mesasWhereUniqueInput
  }

  /**
   * mesas findUniqueOrThrow
   */
  export type mesasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter, which mesas to fetch.
     */
    where: mesasWhereUniqueInput
  }

  /**
   * mesas findFirst
   */
  export type mesasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter, which mesas to fetch.
     */
    where?: mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesas to fetch.
     */
    orderBy?: mesasOrderByWithRelationInput | mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mesas.
     */
    cursor?: mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mesas.
     */
    distinct?: MesasScalarFieldEnum | MesasScalarFieldEnum[]
  }

  /**
   * mesas findFirstOrThrow
   */
  export type mesasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter, which mesas to fetch.
     */
    where?: mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesas to fetch.
     */
    orderBy?: mesasOrderByWithRelationInput | mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mesas.
     */
    cursor?: mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mesas.
     */
    distinct?: MesasScalarFieldEnum | MesasScalarFieldEnum[]
  }

  /**
   * mesas findMany
   */
  export type mesasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter, which mesas to fetch.
     */
    where?: mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesas to fetch.
     */
    orderBy?: mesasOrderByWithRelationInput | mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mesas.
     */
    cursor?: mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mesas.
     */
    distinct?: MesasScalarFieldEnum | MesasScalarFieldEnum[]
  }

  /**
   * mesas create
   */
  export type mesasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * The data needed to create a mesas.
     */
    data: XOR<mesasCreateInput, mesasUncheckedCreateInput>
  }

  /**
   * mesas createMany
   */
  export type mesasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mesas.
     */
    data: mesasCreateManyInput | mesasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mesas createManyAndReturn
   */
  export type mesasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * The data used to create many mesas.
     */
    data: mesasCreateManyInput | mesasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mesas update
   */
  export type mesasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * The data needed to update a mesas.
     */
    data: XOR<mesasUpdateInput, mesasUncheckedUpdateInput>
    /**
     * Choose, which mesas to update.
     */
    where: mesasWhereUniqueInput
  }

  /**
   * mesas updateMany
   */
  export type mesasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mesas.
     */
    data: XOR<mesasUpdateManyMutationInput, mesasUncheckedUpdateManyInput>
    /**
     * Filter which mesas to update
     */
    where?: mesasWhereInput
    /**
     * Limit how many mesas to update.
     */
    limit?: number
  }

  /**
   * mesas updateManyAndReturn
   */
  export type mesasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * The data used to update mesas.
     */
    data: XOR<mesasUpdateManyMutationInput, mesasUncheckedUpdateManyInput>
    /**
     * Filter which mesas to update
     */
    where?: mesasWhereInput
    /**
     * Limit how many mesas to update.
     */
    limit?: number
  }

  /**
   * mesas upsert
   */
  export type mesasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * The filter to search for the mesas to update in case it exists.
     */
    where: mesasWhereUniqueInput
    /**
     * In case the mesas found by the `where` argument doesn't exist, create a new mesas with this data.
     */
    create: XOR<mesasCreateInput, mesasUncheckedCreateInput>
    /**
     * In case the mesas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mesasUpdateInput, mesasUncheckedUpdateInput>
  }

  /**
   * mesas delete
   */
  export type mesasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
    /**
     * Filter which mesas to delete.
     */
    where: mesasWhereUniqueInput
  }

  /**
   * mesas deleteMany
   */
  export type mesasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mesas to delete
     */
    where?: mesasWhereInput
    /**
     * Limit how many mesas to delete.
     */
    limit?: number
  }

  /**
   * mesas.reservaciones
   */
  export type mesas$reservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    where?: reservacionesWhereInput
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    cursor?: reservacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservacionesScalarFieldEnum | ReservacionesScalarFieldEnum[]
  }

  /**
   * mesas without action
   */
  export type mesasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesas
     */
    select?: mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesas
     */
    omit?: mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesasInclude<ExtArgs> | null
  }


  /**
   * Model reservaciones
   */

  export type AggregateReservaciones = {
    _count: ReservacionesCountAggregateOutputType | null
    _avg: ReservacionesAvgAggregateOutputType | null
    _sum: ReservacionesSumAggregateOutputType | null
    _min: ReservacionesMinAggregateOutputType | null
    _max: ReservacionesMaxAggregateOutputType | null
  }

  export type ReservacionesAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    mesa_id: number | null
    num_comensales: number | null
  }

  export type ReservacionesSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    mesa_id: number | null
    num_comensales: number | null
  }

  export type ReservacionesMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    mesa_id: number | null
    fecha: Date | null
    hora: Date | null
    num_comensales: number | null
    estado: $Enums.estado_reservacion | null
    creado_en: Date | null
  }

  export type ReservacionesMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    mesa_id: number | null
    fecha: Date | null
    hora: Date | null
    num_comensales: number | null
    estado: $Enums.estado_reservacion | null
    creado_en: Date | null
  }

  export type ReservacionesCountAggregateOutputType = {
    id: number
    usuario_id: number
    mesa_id: number
    fecha: number
    hora: number
    num_comensales: number
    estado: number
    creado_en: number
    _all: number
  }


  export type ReservacionesAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    mesa_id?: true
    num_comensales?: true
  }

  export type ReservacionesSumAggregateInputType = {
    id?: true
    usuario_id?: true
    mesa_id?: true
    num_comensales?: true
  }

  export type ReservacionesMinAggregateInputType = {
    id?: true
    usuario_id?: true
    mesa_id?: true
    fecha?: true
    hora?: true
    num_comensales?: true
    estado?: true
    creado_en?: true
  }

  export type ReservacionesMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    mesa_id?: true
    fecha?: true
    hora?: true
    num_comensales?: true
    estado?: true
    creado_en?: true
  }

  export type ReservacionesCountAggregateInputType = {
    id?: true
    usuario_id?: true
    mesa_id?: true
    fecha?: true
    hora?: true
    num_comensales?: true
    estado?: true
    creado_en?: true
    _all?: true
  }

  export type ReservacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservaciones to aggregate.
     */
    where?: reservacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservaciones to fetch.
     */
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservaciones
    **/
    _count?: true | ReservacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservacionesMaxAggregateInputType
  }

  export type GetReservacionesAggregateType<T extends ReservacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateReservaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservaciones[P]>
      : GetScalarType<T[P], AggregateReservaciones[P]>
  }




  export type reservacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservacionesWhereInput
    orderBy?: reservacionesOrderByWithAggregationInput | reservacionesOrderByWithAggregationInput[]
    by: ReservacionesScalarFieldEnum[] | ReservacionesScalarFieldEnum
    having?: reservacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservacionesCountAggregateInputType | true
    _avg?: ReservacionesAvgAggregateInputType
    _sum?: ReservacionesSumAggregateInputType
    _min?: ReservacionesMinAggregateInputType
    _max?: ReservacionesMaxAggregateInputType
  }

  export type ReservacionesGroupByOutputType = {
    id: number
    usuario_id: number
    mesa_id: number
    fecha: Date
    hora: Date
    num_comensales: number
    estado: $Enums.estado_reservacion
    creado_en: Date
    _count: ReservacionesCountAggregateOutputType | null
    _avg: ReservacionesAvgAggregateOutputType | null
    _sum: ReservacionesSumAggregateOutputType | null
    _min: ReservacionesMinAggregateOutputType | null
    _max: ReservacionesMaxAggregateOutputType | null
  }

  type GetReservacionesGroupByPayload<T extends reservacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservacionesGroupByOutputType[P]>
            : GetScalarType<T[P], ReservacionesGroupByOutputType[P]>
        }
      >
    >


  export type reservacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mesa_id?: boolean
    fecha?: boolean
    hora?: boolean
    num_comensales?: boolean
    estado?: boolean
    creado_en?: boolean
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservaciones"]>

  export type reservacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mesa_id?: boolean
    fecha?: boolean
    hora?: boolean
    num_comensales?: boolean
    estado?: boolean
    creado_en?: boolean
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservaciones"]>

  export type reservacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    mesa_id?: boolean
    fecha?: boolean
    hora?: boolean
    num_comensales?: boolean
    estado?: boolean
    creado_en?: boolean
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservaciones"]>

  export type reservacionesSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    mesa_id?: boolean
    fecha?: boolean
    hora?: boolean
    num_comensales?: boolean
    estado?: boolean
    creado_en?: boolean
  }

  export type reservacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "mesa_id" | "fecha" | "hora" | "num_comensales" | "estado" | "creado_en", ExtArgs["result"]["reservaciones"]>
  export type reservacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type reservacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type reservacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesas?: boolean | mesasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $reservacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservaciones"
    objects: {
      mesas: Prisma.$mesasPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      mesa_id: number
      fecha: Date
      hora: Date
      num_comensales: number
      estado: $Enums.estado_reservacion
      creado_en: Date
    }, ExtArgs["result"]["reservaciones"]>
    composites: {}
  }

  type reservacionesGetPayload<S extends boolean | null | undefined | reservacionesDefaultArgs> = $Result.GetResult<Prisma.$reservacionesPayload, S>

  type reservacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservacionesCountAggregateInputType | true
    }

  export interface reservacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservaciones'], meta: { name: 'reservaciones' } }
    /**
     * Find zero or one Reservaciones that matches the filter.
     * @param {reservacionesFindUniqueArgs} args - Arguments to find a Reservaciones
     * @example
     * // Get one Reservaciones
     * const reservaciones = await prisma.reservaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservacionesFindUniqueArgs>(args: SelectSubset<T, reservacionesFindUniqueArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservacionesFindUniqueOrThrowArgs} args - Arguments to find a Reservaciones
     * @example
     * // Get one Reservaciones
     * const reservaciones = await prisma.reservaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, reservacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesFindFirstArgs} args - Arguments to find a Reservaciones
     * @example
     * // Get one Reservaciones
     * const reservaciones = await prisma.reservaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservacionesFindFirstArgs>(args?: SelectSubset<T, reservacionesFindFirstArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesFindFirstOrThrowArgs} args - Arguments to find a Reservaciones
     * @example
     * // Get one Reservaciones
     * const reservaciones = await prisma.reservaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, reservacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservaciones
     * const reservaciones = await prisma.reservaciones.findMany()
     * 
     * // Get first 10 Reservaciones
     * const reservaciones = await prisma.reservaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservacionesWithIdOnly = await prisma.reservaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reservacionesFindManyArgs>(args?: SelectSubset<T, reservacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservaciones.
     * @param {reservacionesCreateArgs} args - Arguments to create a Reservaciones.
     * @example
     * // Create one Reservaciones
     * const Reservaciones = await prisma.reservaciones.create({
     *   data: {
     *     // ... data to create a Reservaciones
     *   }
     * })
     * 
     */
    create<T extends reservacionesCreateArgs>(args: SelectSubset<T, reservacionesCreateArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservaciones.
     * @param {reservacionesCreateManyArgs} args - Arguments to create many Reservaciones.
     * @example
     * // Create many Reservaciones
     * const reservaciones = await prisma.reservaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservacionesCreateManyArgs>(args?: SelectSubset<T, reservacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservaciones and returns the data saved in the database.
     * @param {reservacionesCreateManyAndReturnArgs} args - Arguments to create many Reservaciones.
     * @example
     * // Create many Reservaciones
     * const reservaciones = await prisma.reservaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservaciones and only return the `id`
     * const reservacionesWithIdOnly = await prisma.reservaciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, reservacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservaciones.
     * @param {reservacionesDeleteArgs} args - Arguments to delete one Reservaciones.
     * @example
     * // Delete one Reservaciones
     * const Reservaciones = await prisma.reservaciones.delete({
     *   where: {
     *     // ... filter to delete one Reservaciones
     *   }
     * })
     * 
     */
    delete<T extends reservacionesDeleteArgs>(args: SelectSubset<T, reservacionesDeleteArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservaciones.
     * @param {reservacionesUpdateArgs} args - Arguments to update one Reservaciones.
     * @example
     * // Update one Reservaciones
     * const reservaciones = await prisma.reservaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservacionesUpdateArgs>(args: SelectSubset<T, reservacionesUpdateArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservaciones.
     * @param {reservacionesDeleteManyArgs} args - Arguments to filter Reservaciones to delete.
     * @example
     * // Delete a few Reservaciones
     * const { count } = await prisma.reservaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservacionesDeleteManyArgs>(args?: SelectSubset<T, reservacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservaciones
     * const reservaciones = await prisma.reservaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservacionesUpdateManyArgs>(args: SelectSubset<T, reservacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservaciones and returns the data updated in the database.
     * @param {reservacionesUpdateManyAndReturnArgs} args - Arguments to update many Reservaciones.
     * @example
     * // Update many Reservaciones
     * const reservaciones = await prisma.reservaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservaciones and only return the `id`
     * const reservacionesWithIdOnly = await prisma.reservaciones.updateManyAndReturn({
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
    updateManyAndReturn<T extends reservacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, reservacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservaciones.
     * @param {reservacionesUpsertArgs} args - Arguments to update or create a Reservaciones.
     * @example
     * // Update or create a Reservaciones
     * const reservaciones = await prisma.reservaciones.upsert({
     *   create: {
     *     // ... data to create a Reservaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservaciones we want to update
     *   }
     * })
     */
    upsert<T extends reservacionesUpsertArgs>(args: SelectSubset<T, reservacionesUpsertArgs<ExtArgs>>): Prisma__reservacionesClient<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesCountArgs} args - Arguments to filter Reservaciones to count.
     * @example
     * // Count the number of Reservaciones
     * const count = await prisma.reservaciones.count({
     *   where: {
     *     // ... the filter for the Reservaciones we want to count
     *   }
     * })
    **/
    count<T extends reservacionesCountArgs>(
      args?: Subset<T, reservacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservacionesAggregateArgs>(args: Subset<T, ReservacionesAggregateArgs>): Prisma.PrismaPromise<GetReservacionesAggregateType<T>>

    /**
     * Group by Reservaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservacionesGroupByArgs} args - Group by arguments.
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
      T extends reservacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservacionesGroupByArgs['orderBy'] }
        : { orderBy?: reservacionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservaciones model
   */
  readonly fields: reservacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesas<T extends mesasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mesasDefaultArgs<ExtArgs>>): Prisma__mesasClient<$Result.GetResult<Prisma.$mesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reservaciones model
   */
  interface reservacionesFieldRefs {
    readonly id: FieldRef<"reservaciones", 'Int'>
    readonly usuario_id: FieldRef<"reservaciones", 'Int'>
    readonly mesa_id: FieldRef<"reservaciones", 'Int'>
    readonly fecha: FieldRef<"reservaciones", 'DateTime'>
    readonly hora: FieldRef<"reservaciones", 'DateTime'>
    readonly num_comensales: FieldRef<"reservaciones", 'Int'>
    readonly estado: FieldRef<"reservaciones", 'estado_reservacion'>
    readonly creado_en: FieldRef<"reservaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reservaciones findUnique
   */
  export type reservacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter, which reservaciones to fetch.
     */
    where: reservacionesWhereUniqueInput
  }

  /**
   * reservaciones findUniqueOrThrow
   */
  export type reservacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter, which reservaciones to fetch.
     */
    where: reservacionesWhereUniqueInput
  }

  /**
   * reservaciones findFirst
   */
  export type reservacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter, which reservaciones to fetch.
     */
    where?: reservacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservaciones to fetch.
     */
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservaciones.
     */
    cursor?: reservacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservaciones.
     */
    distinct?: ReservacionesScalarFieldEnum | ReservacionesScalarFieldEnum[]
  }

  /**
   * reservaciones findFirstOrThrow
   */
  export type reservacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter, which reservaciones to fetch.
     */
    where?: reservacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservaciones to fetch.
     */
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservaciones.
     */
    cursor?: reservacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservaciones.
     */
    distinct?: ReservacionesScalarFieldEnum | ReservacionesScalarFieldEnum[]
  }

  /**
   * reservaciones findMany
   */
  export type reservacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter, which reservaciones to fetch.
     */
    where?: reservacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservaciones to fetch.
     */
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservaciones.
     */
    cursor?: reservacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservaciones.
     */
    distinct?: ReservacionesScalarFieldEnum | ReservacionesScalarFieldEnum[]
  }

  /**
   * reservaciones create
   */
  export type reservacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a reservaciones.
     */
    data: XOR<reservacionesCreateInput, reservacionesUncheckedCreateInput>
  }

  /**
   * reservaciones createMany
   */
  export type reservacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservaciones.
     */
    data: reservacionesCreateManyInput | reservacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservaciones createManyAndReturn
   */
  export type reservacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * The data used to create many reservaciones.
     */
    data: reservacionesCreateManyInput | reservacionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservaciones update
   */
  export type reservacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a reservaciones.
     */
    data: XOR<reservacionesUpdateInput, reservacionesUncheckedUpdateInput>
    /**
     * Choose, which reservaciones to update.
     */
    where: reservacionesWhereUniqueInput
  }

  /**
   * reservaciones updateMany
   */
  export type reservacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservaciones.
     */
    data: XOR<reservacionesUpdateManyMutationInput, reservacionesUncheckedUpdateManyInput>
    /**
     * Filter which reservaciones to update
     */
    where?: reservacionesWhereInput
    /**
     * Limit how many reservaciones to update.
     */
    limit?: number
  }

  /**
   * reservaciones updateManyAndReturn
   */
  export type reservacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * The data used to update reservaciones.
     */
    data: XOR<reservacionesUpdateManyMutationInput, reservacionesUncheckedUpdateManyInput>
    /**
     * Filter which reservaciones to update
     */
    where?: reservacionesWhereInput
    /**
     * Limit how many reservaciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservaciones upsert
   */
  export type reservacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the reservaciones to update in case it exists.
     */
    where: reservacionesWhereUniqueInput
    /**
     * In case the reservaciones found by the `where` argument doesn't exist, create a new reservaciones with this data.
     */
    create: XOR<reservacionesCreateInput, reservacionesUncheckedCreateInput>
    /**
     * In case the reservaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservacionesUpdateInput, reservacionesUncheckedUpdateInput>
  }

  /**
   * reservaciones delete
   */
  export type reservacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    /**
     * Filter which reservaciones to delete.
     */
    where: reservacionesWhereUniqueInput
  }

  /**
   * reservaciones deleteMany
   */
  export type reservacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservaciones to delete
     */
    where?: reservacionesWhereInput
    /**
     * Limit how many reservaciones to delete.
     */
    limit?: number
  }

  /**
   * reservaciones without action
   */
  export type reservacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol: $Enums.rol_usuario | null
    creado_en: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol: $Enums.rol_usuario | null
    creado_en: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password_hash: number
    rol: number
    creado_en: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    creado_en?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    creado_en?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    creado_en?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password_hash: string
    rol: $Enums.rol_usuario
    creado_en: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    creado_en?: boolean
    reservaciones?: boolean | usuarios$reservacionesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    creado_en?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password_hash" | "rol" | "creado_en", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservaciones?: boolean | usuarios$reservacionesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      reservaciones: Prisma.$reservacionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password_hash: string
      rol: $Enums.rol_usuario
      creado_en: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservaciones<T extends usuarios$reservacionesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reservacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password_hash: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'rol_usuario'>
    readonly creado_en: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.reservaciones
   */
  export type usuarios$reservacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservaciones
     */
    select?: reservacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservaciones
     */
    omit?: reservacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservacionesInclude<ExtArgs> | null
    where?: reservacionesWhereInput
    orderBy?: reservacionesOrderByWithRelationInput | reservacionesOrderByWithRelationInput[]
    cursor?: reservacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservacionesScalarFieldEnum | ReservacionesScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const MesasScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    capacidad: 'capacidad',
    ubicacion: 'ubicacion',
    activa: 'activa',
    creado_en: 'creado_en'
  };

  export type MesasScalarFieldEnum = (typeof MesasScalarFieldEnum)[keyof typeof MesasScalarFieldEnum]


  export const ReservacionesScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    mesa_id: 'mesa_id',
    fecha: 'fecha',
    hora: 'hora',
    num_comensales: 'num_comensales',
    estado: 'estado',
    creado_en: 'creado_en'
  };

  export type ReservacionesScalarFieldEnum = (typeof ReservacionesScalarFieldEnum)[keyof typeof ReservacionesScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password_hash: 'password_hash',
    rol: 'rol',
    creado_en: 'creado_en'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'estado_reservacion'
   */
  export type Enumestado_reservacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_reservacion'>
    


  /**
   * Reference to a field of type 'estado_reservacion[]'
   */
  export type ListEnumestado_reservacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_reservacion[]'>
    


  /**
   * Reference to a field of type 'rol_usuario'
   */
  export type Enumrol_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol_usuario'>
    


  /**
   * Reference to a field of type 'rol_usuario[]'
   */
  export type ListEnumrol_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol_usuario[]'>
    


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


  export type mesasWhereInput = {
    AND?: mesasWhereInput | mesasWhereInput[]
    OR?: mesasWhereInput[]
    NOT?: mesasWhereInput | mesasWhereInput[]
    id?: IntFilter<"mesas"> | number
    numero?: IntFilter<"mesas"> | number
    capacidad?: IntFilter<"mesas"> | number
    ubicacion?: StringNullableFilter<"mesas"> | string | null
    activa?: BoolFilter<"mesas"> | boolean
    creado_en?: DateTimeFilter<"mesas"> | Date | string
    reservaciones?: ReservacionesListRelationFilter
  }

  export type mesasOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    activa?: SortOrder
    creado_en?: SortOrder
    reservaciones?: reservacionesOrderByRelationAggregateInput
  }

  export type mesasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: number
    AND?: mesasWhereInput | mesasWhereInput[]
    OR?: mesasWhereInput[]
    NOT?: mesasWhereInput | mesasWhereInput[]
    capacidad?: IntFilter<"mesas"> | number
    ubicacion?: StringNullableFilter<"mesas"> | string | null
    activa?: BoolFilter<"mesas"> | boolean
    creado_en?: DateTimeFilter<"mesas"> | Date | string
    reservaciones?: ReservacionesListRelationFilter
  }, "id" | "numero">

  export type mesasOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrderInput | SortOrder
    activa?: SortOrder
    creado_en?: SortOrder
    _count?: mesasCountOrderByAggregateInput
    _avg?: mesasAvgOrderByAggregateInput
    _max?: mesasMaxOrderByAggregateInput
    _min?: mesasMinOrderByAggregateInput
    _sum?: mesasSumOrderByAggregateInput
  }

  export type mesasScalarWhereWithAggregatesInput = {
    AND?: mesasScalarWhereWithAggregatesInput | mesasScalarWhereWithAggregatesInput[]
    OR?: mesasScalarWhereWithAggregatesInput[]
    NOT?: mesasScalarWhereWithAggregatesInput | mesasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mesas"> | number
    numero?: IntWithAggregatesFilter<"mesas"> | number
    capacidad?: IntWithAggregatesFilter<"mesas"> | number
    ubicacion?: StringNullableWithAggregatesFilter<"mesas"> | string | null
    activa?: BoolWithAggregatesFilter<"mesas"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"mesas"> | Date | string
  }

  export type reservacionesWhereInput = {
    AND?: reservacionesWhereInput | reservacionesWhereInput[]
    OR?: reservacionesWhereInput[]
    NOT?: reservacionesWhereInput | reservacionesWhereInput[]
    id?: IntFilter<"reservaciones"> | number
    usuario_id?: IntFilter<"reservaciones"> | number
    mesa_id?: IntFilter<"reservaciones"> | number
    fecha?: DateTimeFilter<"reservaciones"> | Date | string
    hora?: DateTimeFilter<"reservaciones"> | Date | string
    num_comensales?: IntFilter<"reservaciones"> | number
    estado?: Enumestado_reservacionFilter<"reservaciones"> | $Enums.estado_reservacion
    creado_en?: DateTimeFilter<"reservaciones"> | Date | string
    mesas?: XOR<MesasScalarRelationFilter, mesasWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type reservacionesOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    num_comensales?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    mesas?: mesasOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type reservacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mesa_id_fecha_hora?: reservacionesMesa_idFechaHoraCompoundUniqueInput
    AND?: reservacionesWhereInput | reservacionesWhereInput[]
    OR?: reservacionesWhereInput[]
    NOT?: reservacionesWhereInput | reservacionesWhereInput[]
    usuario_id?: IntFilter<"reservaciones"> | number
    mesa_id?: IntFilter<"reservaciones"> | number
    fecha?: DateTimeFilter<"reservaciones"> | Date | string
    hora?: DateTimeFilter<"reservaciones"> | Date | string
    num_comensales?: IntFilter<"reservaciones"> | number
    estado?: Enumestado_reservacionFilter<"reservaciones"> | $Enums.estado_reservacion
    creado_en?: DateTimeFilter<"reservaciones"> | Date | string
    mesas?: XOR<MesasScalarRelationFilter, mesasWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id" | "mesa_id_fecha_hora">

  export type reservacionesOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    num_comensales?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    _count?: reservacionesCountOrderByAggregateInput
    _avg?: reservacionesAvgOrderByAggregateInput
    _max?: reservacionesMaxOrderByAggregateInput
    _min?: reservacionesMinOrderByAggregateInput
    _sum?: reservacionesSumOrderByAggregateInput
  }

  export type reservacionesScalarWhereWithAggregatesInput = {
    AND?: reservacionesScalarWhereWithAggregatesInput | reservacionesScalarWhereWithAggregatesInput[]
    OR?: reservacionesScalarWhereWithAggregatesInput[]
    NOT?: reservacionesScalarWhereWithAggregatesInput | reservacionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reservaciones"> | number
    usuario_id?: IntWithAggregatesFilter<"reservaciones"> | number
    mesa_id?: IntWithAggregatesFilter<"reservaciones"> | number
    fecha?: DateTimeWithAggregatesFilter<"reservaciones"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"reservaciones"> | Date | string
    num_comensales?: IntWithAggregatesFilter<"reservaciones"> | number
    estado?: Enumestado_reservacionWithAggregatesFilter<"reservaciones"> | $Enums.estado_reservacion
    creado_en?: DateTimeWithAggregatesFilter<"reservaciones"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    rol?: Enumrol_usuarioFilter<"usuarios"> | $Enums.rol_usuario
    creado_en?: DateTimeFilter<"usuarios"> | Date | string
    reservaciones?: ReservacionesListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
    reservaciones?: reservacionesOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    rol?: Enumrol_usuarioFilter<"usuarios"> | $Enums.rol_usuario
    creado_en?: DateTimeFilter<"usuarios"> | Date | string
    reservaciones?: ReservacionesListRelationFilter
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password_hash?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: Enumrol_usuarioWithAggregatesFilter<"usuarios"> | $Enums.rol_usuario
    creado_en?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type mesasCreateInput = {
    numero: number
    capacidad: number
    ubicacion?: string | null
    activa?: boolean
    creado_en?: Date | string
    reservaciones?: reservacionesCreateNestedManyWithoutMesasInput
  }

  export type mesasUncheckedCreateInput = {
    id?: number
    numero: number
    capacidad: number
    ubicacion?: string | null
    activa?: boolean
    creado_en?: Date | string
    reservaciones?: reservacionesUncheckedCreateNestedManyWithoutMesasInput
  }

  export type mesasUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: reservacionesUpdateManyWithoutMesasNestedInput
  }

  export type mesasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: reservacionesUncheckedUpdateManyWithoutMesasNestedInput
  }

  export type mesasCreateManyInput = {
    id?: number
    numero: number
    capacidad: number
    ubicacion?: string | null
    activa?: boolean
    creado_en?: Date | string
  }

  export type mesasUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mesasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesCreateInput = {
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
    mesas: mesasCreateNestedOneWithoutReservacionesInput
    usuarios: usuariosCreateNestedOneWithoutReservacionesInput
  }

  export type reservacionesUncheckedCreateInput = {
    id?: number
    usuario_id: number
    mesa_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    mesas?: mesasUpdateOneRequiredWithoutReservacionesNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type reservacionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    mesa_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesCreateManyInput = {
    id?: number
    usuario_id: number
    mesa_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    mesa_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    nombre: string
    email: string
    password_hash: string
    rol?: $Enums.rol_usuario
    creado_en?: Date | string
    reservaciones?: reservacionesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol?: $Enums.rol_usuario
    creado_en?: Date | string
    reservaciones?: reservacionesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: reservacionesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    reservaciones?: reservacionesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol?: $Enums.rol_usuario
    creado_en?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ReservacionesListRelationFilter = {
    every?: reservacionesWhereInput
    some?: reservacionesWhereInput
    none?: reservacionesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reservacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mesasCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    activa?: SortOrder
    creado_en?: SortOrder
  }

  export type mesasAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
  }

  export type mesasMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    activa?: SortOrder
    creado_en?: SortOrder
  }

  export type mesasMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
    ubicacion?: SortOrder
    activa?: SortOrder
    creado_en?: SortOrder
  }

  export type mesasSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidad?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type Enumestado_reservacionFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_reservacion | Enumestado_reservacionFieldRefInput<$PrismaModel>
    in?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_reservacionFilter<$PrismaModel> | $Enums.estado_reservacion
  }

  export type MesasScalarRelationFilter = {
    is?: mesasWhereInput
    isNot?: mesasWhereInput
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type reservacionesMesa_idFechaHoraCompoundUniqueInput = {
    mesa_id: number
    fecha: Date | string
    hora: Date | string
  }

  export type reservacionesCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    num_comensales?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type reservacionesAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    num_comensales?: SortOrder
  }

  export type reservacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    num_comensales?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type reservacionesMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    num_comensales?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
  }

  export type reservacionesSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    mesa_id?: SortOrder
    num_comensales?: SortOrder
  }

  export type Enumestado_reservacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_reservacion | Enumestado_reservacionFieldRefInput<$PrismaModel>
    in?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_reservacionWithAggregatesFilter<$PrismaModel> | $Enums.estado_reservacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_reservacionFilter<$PrismaModel>
    _max?: NestedEnumestado_reservacionFilter<$PrismaModel>
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

  export type Enumrol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioFilter<$PrismaModel> | $Enums.rol_usuario
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Enumrol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumrol_usuarioFilter<$PrismaModel>
  }

  export type reservacionesCreateNestedManyWithoutMesasInput = {
    create?: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput> | reservacionesCreateWithoutMesasInput[] | reservacionesUncheckedCreateWithoutMesasInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutMesasInput | reservacionesCreateOrConnectWithoutMesasInput[]
    createMany?: reservacionesCreateManyMesasInputEnvelope
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
  }

  export type reservacionesUncheckedCreateNestedManyWithoutMesasInput = {
    create?: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput> | reservacionesCreateWithoutMesasInput[] | reservacionesUncheckedCreateWithoutMesasInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutMesasInput | reservacionesCreateOrConnectWithoutMesasInput[]
    createMany?: reservacionesCreateManyMesasInputEnvelope
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type reservacionesUpdateManyWithoutMesasNestedInput = {
    create?: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput> | reservacionesCreateWithoutMesasInput[] | reservacionesUncheckedCreateWithoutMesasInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutMesasInput | reservacionesCreateOrConnectWithoutMesasInput[]
    upsert?: reservacionesUpsertWithWhereUniqueWithoutMesasInput | reservacionesUpsertWithWhereUniqueWithoutMesasInput[]
    createMany?: reservacionesCreateManyMesasInputEnvelope
    set?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    disconnect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    delete?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    update?: reservacionesUpdateWithWhereUniqueWithoutMesasInput | reservacionesUpdateWithWhereUniqueWithoutMesasInput[]
    updateMany?: reservacionesUpdateManyWithWhereWithoutMesasInput | reservacionesUpdateManyWithWhereWithoutMesasInput[]
    deleteMany?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
  }

  export type reservacionesUncheckedUpdateManyWithoutMesasNestedInput = {
    create?: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput> | reservacionesCreateWithoutMesasInput[] | reservacionesUncheckedCreateWithoutMesasInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutMesasInput | reservacionesCreateOrConnectWithoutMesasInput[]
    upsert?: reservacionesUpsertWithWhereUniqueWithoutMesasInput | reservacionesUpsertWithWhereUniqueWithoutMesasInput[]
    createMany?: reservacionesCreateManyMesasInputEnvelope
    set?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    disconnect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    delete?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    update?: reservacionesUpdateWithWhereUniqueWithoutMesasInput | reservacionesUpdateWithWhereUniqueWithoutMesasInput[]
    updateMany?: reservacionesUpdateManyWithWhereWithoutMesasInput | reservacionesUpdateManyWithWhereWithoutMesasInput[]
    deleteMany?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
  }

  export type mesasCreateNestedOneWithoutReservacionesInput = {
    create?: XOR<mesasCreateWithoutReservacionesInput, mesasUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: mesasCreateOrConnectWithoutReservacionesInput
    connect?: mesasWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutReservacionesInput = {
    create?: XOR<usuariosCreateWithoutReservacionesInput, usuariosUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservacionesInput
    connect?: usuariosWhereUniqueInput
  }

  export type Enumestado_reservacionFieldUpdateOperationsInput = {
    set?: $Enums.estado_reservacion
  }

  export type mesasUpdateOneRequiredWithoutReservacionesNestedInput = {
    create?: XOR<mesasCreateWithoutReservacionesInput, mesasUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: mesasCreateOrConnectWithoutReservacionesInput
    upsert?: mesasUpsertWithoutReservacionesInput
    connect?: mesasWhereUniqueInput
    update?: XOR<XOR<mesasUpdateToOneWithWhereWithoutReservacionesInput, mesasUpdateWithoutReservacionesInput>, mesasUncheckedUpdateWithoutReservacionesInput>
  }

  export type usuariosUpdateOneRequiredWithoutReservacionesNestedInput = {
    create?: XOR<usuariosCreateWithoutReservacionesInput, usuariosUncheckedCreateWithoutReservacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservacionesInput
    upsert?: usuariosUpsertWithoutReservacionesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReservacionesInput, usuariosUpdateWithoutReservacionesInput>, usuariosUncheckedUpdateWithoutReservacionesInput>
  }

  export type reservacionesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput> | reservacionesCreateWithoutUsuariosInput[] | reservacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutUsuariosInput | reservacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservacionesCreateManyUsuariosInputEnvelope
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
  }

  export type reservacionesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput> | reservacionesCreateWithoutUsuariosInput[] | reservacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutUsuariosInput | reservacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservacionesCreateManyUsuariosInputEnvelope
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumrol_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.rol_usuario
  }

  export type reservacionesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput> | reservacionesCreateWithoutUsuariosInput[] | reservacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutUsuariosInput | reservacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservacionesUpsertWithWhereUniqueWithoutUsuariosInput | reservacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservacionesCreateManyUsuariosInputEnvelope
    set?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    disconnect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    delete?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    update?: reservacionesUpdateWithWhereUniqueWithoutUsuariosInput | reservacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservacionesUpdateManyWithWhereWithoutUsuariosInput | reservacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
  }

  export type reservacionesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput> | reservacionesCreateWithoutUsuariosInput[] | reservacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservacionesCreateOrConnectWithoutUsuariosInput | reservacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservacionesUpsertWithWhereUniqueWithoutUsuariosInput | reservacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservacionesCreateManyUsuariosInputEnvelope
    set?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    disconnect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    delete?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    connect?: reservacionesWhereUniqueInput | reservacionesWhereUniqueInput[]
    update?: reservacionesUpdateWithWhereUniqueWithoutUsuariosInput | reservacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservacionesUpdateManyWithWhereWithoutUsuariosInput | reservacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumestado_reservacionFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_reservacion | Enumestado_reservacionFieldRefInput<$PrismaModel>
    in?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_reservacionFilter<$PrismaModel> | $Enums.estado_reservacion
  }

  export type NestedEnumestado_reservacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_reservacion | Enumestado_reservacionFieldRefInput<$PrismaModel>
    in?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_reservacion[] | ListEnumestado_reservacionFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_reservacionWithAggregatesFilter<$PrismaModel> | $Enums.estado_reservacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_reservacionFilter<$PrismaModel>
    _max?: NestedEnumestado_reservacionFilter<$PrismaModel>
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

  export type NestedEnumrol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioFilter<$PrismaModel> | $Enums.rol_usuario
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

  export type NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumrol_usuarioFilter<$PrismaModel>
  }

  export type reservacionesCreateWithoutMesasInput = {
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
    usuarios: usuariosCreateNestedOneWithoutReservacionesInput
  }

  export type reservacionesUncheckedCreateWithoutMesasInput = {
    id?: number
    usuario_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesCreateOrConnectWithoutMesasInput = {
    where: reservacionesWhereUniqueInput
    create: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput>
  }

  export type reservacionesCreateManyMesasInputEnvelope = {
    data: reservacionesCreateManyMesasInput | reservacionesCreateManyMesasInput[]
    skipDuplicates?: boolean
  }

  export type reservacionesUpsertWithWhereUniqueWithoutMesasInput = {
    where: reservacionesWhereUniqueInput
    update: XOR<reservacionesUpdateWithoutMesasInput, reservacionesUncheckedUpdateWithoutMesasInput>
    create: XOR<reservacionesCreateWithoutMesasInput, reservacionesUncheckedCreateWithoutMesasInput>
  }

  export type reservacionesUpdateWithWhereUniqueWithoutMesasInput = {
    where: reservacionesWhereUniqueInput
    data: XOR<reservacionesUpdateWithoutMesasInput, reservacionesUncheckedUpdateWithoutMesasInput>
  }

  export type reservacionesUpdateManyWithWhereWithoutMesasInput = {
    where: reservacionesScalarWhereInput
    data: XOR<reservacionesUpdateManyMutationInput, reservacionesUncheckedUpdateManyWithoutMesasInput>
  }

  export type reservacionesScalarWhereInput = {
    AND?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
    OR?: reservacionesScalarWhereInput[]
    NOT?: reservacionesScalarWhereInput | reservacionesScalarWhereInput[]
    id?: IntFilter<"reservaciones"> | number
    usuario_id?: IntFilter<"reservaciones"> | number
    mesa_id?: IntFilter<"reservaciones"> | number
    fecha?: DateTimeFilter<"reservaciones"> | Date | string
    hora?: DateTimeFilter<"reservaciones"> | Date | string
    num_comensales?: IntFilter<"reservaciones"> | number
    estado?: Enumestado_reservacionFilter<"reservaciones"> | $Enums.estado_reservacion
    creado_en?: DateTimeFilter<"reservaciones"> | Date | string
  }

  export type mesasCreateWithoutReservacionesInput = {
    numero: number
    capacidad: number
    ubicacion?: string | null
    activa?: boolean
    creado_en?: Date | string
  }

  export type mesasUncheckedCreateWithoutReservacionesInput = {
    id?: number
    numero: number
    capacidad: number
    ubicacion?: string | null
    activa?: boolean
    creado_en?: Date | string
  }

  export type mesasCreateOrConnectWithoutReservacionesInput = {
    where: mesasWhereUniqueInput
    create: XOR<mesasCreateWithoutReservacionesInput, mesasUncheckedCreateWithoutReservacionesInput>
  }

  export type usuariosCreateWithoutReservacionesInput = {
    nombre: string
    email: string
    password_hash: string
    rol?: $Enums.rol_usuario
    creado_en?: Date | string
  }

  export type usuariosUncheckedCreateWithoutReservacionesInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol?: $Enums.rol_usuario
    creado_en?: Date | string
  }

  export type usuariosCreateOrConnectWithoutReservacionesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReservacionesInput, usuariosUncheckedCreateWithoutReservacionesInput>
  }

  export type mesasUpsertWithoutReservacionesInput = {
    update: XOR<mesasUpdateWithoutReservacionesInput, mesasUncheckedUpdateWithoutReservacionesInput>
    create: XOR<mesasCreateWithoutReservacionesInput, mesasUncheckedCreateWithoutReservacionesInput>
    where?: mesasWhereInput
  }

  export type mesasUpdateToOneWithWhereWithoutReservacionesInput = {
    where?: mesasWhereInput
    data: XOR<mesasUpdateWithoutReservacionesInput, mesasUncheckedUpdateWithoutReservacionesInput>
  }

  export type mesasUpdateWithoutReservacionesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mesasUncheckedUpdateWithoutReservacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidad?: IntFieldUpdateOperationsInput | number
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUpsertWithoutReservacionesInput = {
    update: XOR<usuariosUpdateWithoutReservacionesInput, usuariosUncheckedUpdateWithoutReservacionesInput>
    create: XOR<usuariosCreateWithoutReservacionesInput, usuariosUncheckedCreateWithoutReservacionesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReservacionesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReservacionesInput, usuariosUncheckedUpdateWithoutReservacionesInput>
  }

  export type usuariosUpdateWithoutReservacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateWithoutReservacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesCreateWithoutUsuariosInput = {
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
    mesas: mesasCreateNestedOneWithoutReservacionesInput
  }

  export type reservacionesUncheckedCreateWithoutUsuariosInput = {
    id?: number
    mesa_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesCreateOrConnectWithoutUsuariosInput = {
    where: reservacionesWhereUniqueInput
    create: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type reservacionesCreateManyUsuariosInputEnvelope = {
    data: reservacionesCreateManyUsuariosInput | reservacionesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type reservacionesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: reservacionesWhereUniqueInput
    update: XOR<reservacionesUpdateWithoutUsuariosInput, reservacionesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<reservacionesCreateWithoutUsuariosInput, reservacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type reservacionesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: reservacionesWhereUniqueInput
    data: XOR<reservacionesUpdateWithoutUsuariosInput, reservacionesUncheckedUpdateWithoutUsuariosInput>
  }

  export type reservacionesUpdateManyWithWhereWithoutUsuariosInput = {
    where: reservacionesScalarWhereInput
    data: XOR<reservacionesUpdateManyMutationInput, reservacionesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type reservacionesCreateManyMesasInput = {
    id?: number
    usuario_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesUpdateWithoutMesasInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type reservacionesUncheckedUpdateWithoutMesasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesUncheckedUpdateManyWithoutMesasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesCreateManyUsuariosInput = {
    id?: number
    mesa_id: number
    fecha: Date | string
    hora: Date | string
    num_comensales: number
    estado?: $Enums.estado_reservacion
    creado_en?: Date | string
  }

  export type reservacionesUpdateWithoutUsuariosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    mesas?: mesasUpdateOneRequiredWithoutReservacionesNestedInput
  }

  export type reservacionesUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mesa_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservacionesUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mesa_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    num_comensales?: IntFieldUpdateOperationsInput | number
    estado?: Enumestado_reservacionFieldUpdateOperationsInput | $Enums.estado_reservacion
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
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