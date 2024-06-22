# NgxExhaustiveCheck

## Installation

```sh
$ npm install ngx-exhaustive-check --save
```

## Usage

> The following example only works with `typescript@^5.0.0`.
> See [const-type-parameters](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#const-type-parameters#const-type-parameters) for more details.

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

Compile successfully:

```
@switch (answer) {
  @case (Answer.Yes) {}
  @case (Answer.No) {}
  @case (Answer.Maybe) {}
  @default {
    <div>{{ answer | ec }}</div>
  }
}

@switch (answer) {
  @case (Answer.Yes) {}
  @default {
    <div>{{ answer | ec: [Answer.No, Answer.Maybe] }}</div>
  }
}
```

Compile failed:

```
@switch (answer) {
  @case (Answer.Yes) {}
  @default {
    <div>{{ answer | ec: [Answer.No] }}</div>
    <!--    ^^^^^^ Argument of type 'Answer.No | Answer.Maybe' is not assignable to parameter of type 'Answer.No'. -->
  }
}
```
