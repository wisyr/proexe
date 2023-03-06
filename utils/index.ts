import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export function has<P extends PropertyKey>(value: unknown, property: P): value is { [K in P]: unknown } {
  return typeof value === 'object' && !!value && property in value;
}

export function isFetchBaseQueryError(value: unknown): value is FetchBaseQueryError {
  return typeof value === 'object' && has(value, 'status') && typeof value.status === 'number';
}
