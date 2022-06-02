import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{ messagePropsWithDefault }}</div>',
  styles: [],
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string | null;
  get messagePropsWithDefault() {
    return this.messageProps ?? 'Something went wrong';
  }
}
