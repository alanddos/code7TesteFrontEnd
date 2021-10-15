import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addressForm = this.fb.group({
    titulo: null,
    atores: [null, Validators.required],
    diretores: [null, Validators.required],
    genero: [null, Validators.required],
    fornecedor: null,
    tipo_produto: [null, Validators.required],
    tipo_filme: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 2 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 2 }
      ];
    })
  );

  generos = [
    {name: 'Ação', abbreviation: 'AC'},
    {name: 'Ficção', abbreviation: 'FI'},
    {name: 'Terror', abbreviation: 'TE'},
    {name: 'Comédia', abbreviation: 'CO'},
    {name: 'Desenho', abbreviation: 'DE'},
    {name: 'Série', abbreviation: 'SE'},
  ];
  fornecedores = [
    {name: 'NETFLIX', abbreviation: 'NF'},
    {name: 'SNAG FILMS', abbreviation: 'SF'},
    {name: 'CRACKLE', abbreviation: 'CR'},
    {name: 'TELECINE PLAY.', abbreviation: 'TC'},
    {name: 'HBO GO', abbreviation: 'HB'},
    {name: 'Globosat Play', abbreviation: 'GP'},
  ];
  tipoProdutos = [
    {name: 'VHS', abbreviation: 'VH'},
    {name: 'DVD', abbreviation: 'DV'},
    {name: 'Blueray', abbreviation: 'BR'},
    {name: 'Stream', abbreviation: 'ST'},
  ];
  tipoFilmes = [
    {name: '24 hrs', abbreviation: '1D'},
    {name: '1 Semana', abbreviation: '1S'},
    {name: '2 Semanas', abbreviation: '2S'},
    {name: '3 Semanas.', abbreviation: '3S'},
    {name: '4 Semanas', abbreviation: '4S'},
    {name: 'Vitalicio', abbreviation: 'VT'},
  ];
  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver) {}

  onSubmit() {
    alert('Thanks!');
  }
}
