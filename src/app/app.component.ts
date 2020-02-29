import { Component, Inject } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AddSystemComponent } from './Popups/add-system-popup/add-system-popup.component';
import { AddConfigPopupComponent } from './Popups/add-config-popup/add-config-popup.component';
import { CreateUpgradePopupComponent } from './Popups/create-upgrade-popup/create-upgrade-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManagementApp';

  constructor(public dialog: MatDialog) { }

  OpenAddSystemPopup() {
    const dialogRef = this.dialog.open(AddSystemComponent, {
      data: { name: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  OpenSystemConfigsPopup() {
    const dialogRef = this.dialog.open(AddConfigPopupComponent, {
      data: { name: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  OpenCreateUpgradePopup() {
    const dialogRef = this.dialog.open(CreateUpgradePopupComponent, {
      data: { name: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
