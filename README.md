# NgxExhaustiveCheck

## Installation

```sh
$ npm install ngx-exhaustive-check --save
```

## Usage

Compile successfully:

```ts
import { EcPipe } from "ngx-exhaustive-check";

@Component({
  imports: [EcPipe],
  // ..
})
export class AppComponent {
  foo: "foo" = "foo";
}
```

```
@switch (foo) {
  @case ("foo") {}
  @default {
    <div>{{ foo | ec }}</div>
  }
}
```

Compile failed:

```ts
import { EcPipe } from "ngx-exhaustive-check";

@Component({
  imports: [EcPipe],
  // ..
})
export class AppComponent {
  fooBar: "foo" | "bar" = "foo";
}
```

```
@switch (fooBar) {
  @case ("foo") {}
  @default {
    <div>{{ fooBar | ec }}</div>
       <!-- ^^^^^^ Argument of type 'string' is not assignable to parameter of type 'never'.ngtsc(2345) -->
  }
}
```

## Advanced Usage

> The following example only works with `typescript@^5.0.0`.
> See [const-type-parameters](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#const-type-parameters#const-type-parameters) for more details.

Compile successfully:

```ts
import { EcPipe } from "ngx-exhaustive-check";

enum Answer {
  Yes,
  No,
  Maybe,
}

@Component({
  imports: [EcPipe],
  // ..
})
export class AppComponent {
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
```

```
@switch (answer) {
  @case (Answer.Yes) {}
  @default {
    <div>{{ answer | ec: [Answer.No, Answer.Maybe] }}</div>
  }
}
```

Compile failed:

```ts
import { EcPipe } from "ngx-exhaustive-check";

enum Answer {
  Yes,
  No,
  Maybe,
}

@Component({
  imports: [EcPipe],
  // ..
})
export class AppComponent {
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
```

```
@switch (answer) {
  @case (Answer.Yes) {}
  @default {
    <div>{{ answer | ec: [Answer.No] }}</div>
       <!-- ^^^^^^ Argument of type 'Answer' is not assignable to parameter of type 'never'. Type 'Answer' is not assignable to type 'never'.ngtsc(2345) -->
  }
}
```
