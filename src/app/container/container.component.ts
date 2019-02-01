import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  navigateTo(route: string): void {
    const outlet = route.split('-')[0];
    this.router.navigate(['', { outlets: { outlet: [`${route}`] } }]);
  }
}
