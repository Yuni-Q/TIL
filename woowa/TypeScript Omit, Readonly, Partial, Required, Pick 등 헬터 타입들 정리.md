# TypeScript Omit, Readonly, Partial, Required, Pick 등 헬터 타입들 정리

## Omit 타입
```typescript
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>

// Example
type OmitExample = Omit<{
  a: 'string',
  b: 'number',
  c: 'symbol'
}, 'b' | 'c'> // { a: 'string' }
```