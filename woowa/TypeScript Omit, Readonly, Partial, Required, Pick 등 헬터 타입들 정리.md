# TypeScript Omit, Readonly, Partial, Required, Pick 등 헬터 타입들 정리

## Omit

- 특정 인터페이스에서 원하지 않는 속성을 제외하는 타입 입니다.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};
```

## Readonly

- 읽기만 가능한 프로퍼티를 선언할 때 사용된다.
- 생성 된 유형의 속성을 재 할당 할 수 없습니다.

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users"
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
```

## Partial

- 모든 속성이 선택 사항으로 설정된 유형을 구성합니다.
- 이 유틸리티는 주어진 유형의 모든 하위 집합을 나타내는 유형을 반환합니다.

```typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});
```

## Required

- 모든 속성이 필수로 설정된 유형으로 구성합니다.

```typescript
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // OK

const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
```

## Pick

- 특성 세트를 선택하여 유형을 구성합니다.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};
```
