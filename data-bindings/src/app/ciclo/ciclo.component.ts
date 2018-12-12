import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    console.log('construtor');
  }

    ngOnChanges() {
      console.log('ngOnChanges');
    }

    ngOnInit() {
      console.log('ngOnInit');
    }

    ngDoCheck() {
      console.log('ngDoCheck');
    }

    ngAfterContentInit() {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
      console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
      console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy');
    }


}
