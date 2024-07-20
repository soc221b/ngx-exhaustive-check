# NgxExhaustiveCheck

Angular utility for ensuring exhaustive checks on TypeScript discriminated unions, enhancing type safety and reliability.

## Installation

```sh
$ npm install ngx-exhaustive-check
```

## Usage

### Before

Without an exhaustive check, the code may compile successfully, but this can lead to runtime errors:

```diff
import { Component } from '@angular/core';

enum Answer {
  Yes,
  No,
+ Maybe,
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @switch (answer) {
      @case (Answer.Yes) {}
      @case (Answer.No) {}
      @default {}
    }
  `,
})
export class AppComponent {
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
```

### After

With an exhaustive check, the compilation will fail, making your code more reliable:

```diff
import { Component } from '@angular/core';
+ import { ExhaustiveCheckPipe } from 'ngx-exhaustive-check';

enum Answer {
  Yes,
  No,
+ Maybe,
}

@Component({
  selector: 'app-root',
  standalone: true,
+ imports: [ExhaustiveCheckPipe],
  template: `
    @switch (answer) {
      @case (Answer.Yes) {}
      @case (Answer.No) {}
      @default {
+       {{ answer | exhaustiveCheck }}
   <!--    ^^^^^^ Argument of type 'Answer' is not assignable to parameter of type 'never'. -->
      }
    }
  `,
})
export class AppComponent {
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
```

## Advanced usage

Sometimes, if you just want to ignore some cases, you can do this:

```diff
enum Answer {
  Yes,
  No,
+ NoOp1,
+ NoOp2,
}
```

```diff
@switch (answer) {
  @case (Answer.Yes) {}
  @case (Answer.No) {}
+ @case (Answer.NoOp1) {}
+ @case (Answer.NoOp2) {}
  @default {
    {{ answer | exhaustiveCheck }}
  }
}
```

With ngx-exhaustive-check, you can achieve this by passing the `satisfies` parameter as well:

```diff
@switch (answer) {
  @case (Answer.Yes) {}
  @case (Answer.No) {}
  @default {
-   {{ answer | exhaustiveCheck }}
+   {{ answer | exhaustiveCheck: [Answer.NoOp1, Answer.NoOp2] }}
  }
}
```

This is useful when you want to apply the same action to these cases.
