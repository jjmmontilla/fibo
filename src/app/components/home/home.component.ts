import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formFibo: FormGroup | undefined;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    if (this.formFibo) {
      console.log(this.formFibo.value);
    }
  }

  public cancel(): void {
    if (this.formFibo) {
      this.formFibo.reset();
    }
  }

  public initForm() {

    this.formFibo = this.fb.group({
      number: [  null,
        [ Validators.required]
      ]
    });
  }

}
