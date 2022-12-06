/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */

type TRecord = Record<string, any>;
type TPickArrayData<
    D extends TRecord,
    K extends string
> = D[K] extends ArrayLike<any> ? K | `${K}.${TPickData<D[K], Exclude<keyof D[K], keyof any[]>>}` : K | `${K}.${TPickData<D[K], keyof D[K]>}`;

type TPickRecordData<D extends TRecord, K extends string> = D[K] extends TRecord
    ? TPickArrayData<D, K>
    : K;

type TPickData<D extends TRecord, K extends keyof D> = K extends string
    ? TPickRecordData<D, K>
    : never;

export type TPickPath<T extends TRecord> = TPickData<T, keyof T> | keyof T;

export type TPickPathValue<T extends TRecord, P extends TPickPath<T>> =
  P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends TPickPath<T[K]>
      ? TPickPathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;

export const pick = <T extends TRecord, K extends TPickPath<T>>(
    data: T,
    path: K
): TPickPathValue<T, K> | TRecord => {
    const paths = path.toString().split(".");
    return paths.reduce((prevData, curr) => prevData[curr], data);
};
