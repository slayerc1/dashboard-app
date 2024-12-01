import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '../../../services/Users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@core/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
