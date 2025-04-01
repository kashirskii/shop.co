export type NonNegative<T extends number> = T extends unknown
  ? number extends T
    ? T
    : `${T}` extends `-${string}`
    ? { error: `Value must be positive (received: ${T})` }
    : T
  : never;