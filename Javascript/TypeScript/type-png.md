# type-png

- src 폴더 밑에 types.ts 파일을 만들고 다음 코드를 입력한다.

```typescript
declare module "*.png" {
  const content: string;
  export default content;
}
```
