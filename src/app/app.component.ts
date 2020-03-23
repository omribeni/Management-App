import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSystemComponent } from './Popups/add-system-popup/add-system-popup.component';
import { AddConfigPopupComponent } from './Popups/add-config-popup/add-config-popup.component';
import { CreateUpgradePopupComponent } from './Popups/create-upgrade-popup/create-upgrade-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Management App';

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping" },
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();
  }

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
