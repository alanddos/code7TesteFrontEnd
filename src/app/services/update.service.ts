import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    if (!this.swUpdate.isEnabled) {
      this.snackbar.open('Não é possivel verificar novas atualizações!');
    }

    swUpdate.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    swUpdate.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    
    this.swUpdate.available.subscribe(evt => {
      const snack: any = this.snackbar.open('Nova Atualização disponível', 'Atualizar!');

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

      snack.setTimeout(() => {
        snack.dismiss();
      }, 6000);
    });
  }
}