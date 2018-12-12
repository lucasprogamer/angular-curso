import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  nomeCurso = 'Angular';

  constructor() { }

  onMudouValor(event) {
    console.log(event);

  }

  ngOnInit() {
  }

}
