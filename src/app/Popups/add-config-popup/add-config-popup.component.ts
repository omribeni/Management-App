import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-config-popup',
  templateUrl: './add-config-popup.component.html',
  styleUrls: ['./add-config-popup.component.scss']
})
export class AddConfigPopupComponent implements OnInit {

  constructor() { }
  
  public ManagerUrl: string = 'https://cobwebsapp.com:44301/actionapi/';
  public ManagerKey: string = 'btrk908rfgtshj9845ysetRfo3fdsg56';

  public NewSystemForm = new FormControl('', [
    Validators.required,
    Validators.minLength(1)
  ]);

  ngOnInit() {
  }

}
