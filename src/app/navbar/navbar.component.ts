import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   langSelectorCollapse=true
   nyelvValasztek:any=[
    {text:"Magyar", sign:"hu"},
    {text:"English", sign:"en"}
   ]
   actLang="Magyar"
}
