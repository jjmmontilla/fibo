import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formFibo: FormGroup | undefined;
  public result : any[] | undefined;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    if (this.formFibo) {
      console.log('-------', this.fibonacci(this.formFibo.value.number));
      this.result = this.fibonacci(this.formFibo.value.number);
    }
  }

  public fibonacci(value: number): any {
    let a = [0,1];

    if (value == 1) {
      return a;
    }  else {
      let s = this.fibonacci(value - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };

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

    this.formFibo.valueChanges.subscribe(value => {
      if (value && value.number != null) {
        if (value.number < 1 && this.formFibo) {
          this.formFibo.controls.number.setErrors({'not_enabled': true});
        }

      }
    });
  }

}
