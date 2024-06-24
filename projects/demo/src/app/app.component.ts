import { Component } from '@angular/core';
import { ExhaustiveCheckPipe } from '../../../ngx-exhaustive-check/src/lib/exhaustive-check.pipe';

enum Answer {
  Yes,
  No,
  Maybe,
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ExhaustiveCheckPipe],
})
export class AppComponent {
  never: never = 'never' as never;
  undefined: undefined = undefined;
  null: null = null;
  answer: Answer = Answer.Yes;
  Answer = Answer;
}
