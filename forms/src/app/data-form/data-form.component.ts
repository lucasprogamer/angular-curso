import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    .pipe(
      map( res => res)
    )
    .subscribe(dados => console.log(dados));
  }

}
