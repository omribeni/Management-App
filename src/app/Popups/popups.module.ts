import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSystemComponent } from './add-system-popup/add-system-popup.component';
import { AddConfigPopupComponent } from './add-config-popup/add-config-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule, MatDialogModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { CreateUpgradePopupComponent } from './create-upgrade-popup/create-upgrade-popup.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AddSystemComponent,
    AddConfigPopupComponent,
    CreateUpgradePopupComponent,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  entryComponents: [AddSystemComponent, AddConfigPopupComponent, CreateUpgradePopupComponent],
})
export class PopupsModule { }
