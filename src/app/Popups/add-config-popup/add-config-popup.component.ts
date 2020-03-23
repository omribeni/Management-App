import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

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
    var x :any[] = [];
    x.forEach(element => {
      
    });  
  }
}
