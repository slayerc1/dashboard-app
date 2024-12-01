import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <h1 class="text-3xl mb-5" [class]="{ shadow: withShadow }">{{ title }}</h1>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
