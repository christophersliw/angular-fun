import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent implements OnInit {

   private navbarService = inject(NavbarService);

  menuItems = signal<any[]>([]);

  ngOnInit(): void {

     this.navbarService.getMenuItems().subscribe(items => {
       this.menuItems.set(items);
     });


    // this.menuItems.set([
    //   { name: 'Home', route: '/' },
    //   { name: 'About', route: '/about' },
    //   { name: 'Contact', route: '/contact' }
    // ]);
  }
  constructor() {

  }
}
