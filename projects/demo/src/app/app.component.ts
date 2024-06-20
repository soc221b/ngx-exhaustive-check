import { Component } from '@angular/core';
import { EcPipe } from '../../../ngx-exhaustive-check/src/lib/ec.pipe';

enum Answer {
  Yes,
  No,
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [EcPipe],
})
export class AppComponent {
  never: never = 'never' as never;
  undefined: undefined = undefined;
  null: null = null;
  foo: 'foo' = 'foo';
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
