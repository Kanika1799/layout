import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-menu-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-showcase.component.html',
})
export class MenuShowcaseComponent {

  items = [
    {
      title: 'IF CREATORS',
      link: [],
    },
    {
      title: 'Dashboard',
      link: [],
    },
    {
      title: 'Feed',
      link: [],
    },
    {
      title: 'Gigs',
      link: [],
    },
    {
      title: 'Discussion',
    },
    {
      title: 'Courses',
    },
    {
      title: 'Leaderboard',
    },
  ];
}