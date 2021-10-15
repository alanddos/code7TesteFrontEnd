import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  items: any[];

  ngOnInit() {
      this.items = [
        {
          icon: 'fa fa-fw fa-users',
          routerLink: ["respostas"],
          label: "Respostas 1 a 10"
        },
        {
          icon: 'fa fa-fw fa-users',
          routerLink: ["cadastro"],
          label: "11 - Cadastro"
        },
        {
          icon: 'fa fa-fw fa-users',
          routerLink: ["css3"],
          label: "12 - Grid CSS3"
        },
        {
          icon: 'fa fa-fw fa-users',
          routerLink: ["lista"],
          label: "13 e 14 - Listagem"
        },        
    ]
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  private router: Router) { }

  logado: boolean = false;
  painelPerfil: boolean = false;


  mostrarPerfil() {
    this.painelPerfil == true ? this.painelPerfil = false : this.painelPerfil = true
  }

  clickRota(rota){
    this.router.navigate(rota);
  }

}
