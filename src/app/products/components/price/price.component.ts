import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})

export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;
  public intervarl$?:Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    this.intervarl$ = interval(1000).subscribe( value => console.log(`Tick: ${ value }`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Componente HIJO: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.intervarl$?.unsubscribe();
  }

}
