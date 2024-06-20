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

Compile successfully:

```ts
import { EcPipe } from "ngx-exhaustive-check";

enum Answer {
  Yes,
  No,
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
    <div>{{ answer | ec: Answer.No }}</div>
  }
}
```

Compile failed:

```ts
import { EcPipe } from "ngx-exhaustive-check";

enum Answer {
  Yes,
  No,
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
    <div>{{ answer | ec }}</div>
       <!-- ^^^^^^ Argument of type 'Answer' is not assignable to parameter of type 'never'.ngtsc(2345) -->
  }
}
```
