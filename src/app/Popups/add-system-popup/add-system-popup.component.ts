import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'add-system-popup',
  templateUrl: './add-system-popup.component.html',
  styleUrls: ['./add-system-popup.component.scss']
})

export class AddSystemComponent implements OnInit {


  constructor(private $http: HttpClient) {
  }
  
  public ManagerUrl: string = 'https://cobwebsapp.com:44301/actionapi/';
  public ManagerKey: string = 'btrk908rfgtshj9845ysetRfo3fdsg56';

  public NewSystemForm = new FormControl('', [
    Validators.required,
    Validators.minLength(1)
  ]);

  matcher = new MyErrorStateMatcher();

  SubmitNewSystem() {
    return this.$http.get(`${this.ManagerUrl}Systems/AddSystem?systemName=${this.NewSystemForm.value}&key=${this.ManagerKey}`)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit(): void { }

}
