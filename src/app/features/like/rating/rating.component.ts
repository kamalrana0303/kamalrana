import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingComponent,
      multi:true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  value:number = -1;

  @Output()
  rate:EventEmitter<number> = new EventEmitter<number>();
  onChange?:(value:number)=>void;
  onTouched?:()=>void
  disabled:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: number): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(value:number){
    if(this.onChange){
      this.value = value;
      this.onChange(this.value+1)
    }
  }
}
