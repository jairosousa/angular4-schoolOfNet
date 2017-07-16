import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from "app/task";

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask: Task

  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.innerHTML += 'Conteudo inserido'
   }

   get myTask() {
     return this._myTask
   }

    @Input()
   set myTask(value: Task) {
     this._myTask = value
     this.changeColorTask()
   }

   @HostListener('click')
   onClick(){
     alert(this.myTask)
   }


   changeColorTask(){
     //[ngClass]="{'item-green': item.value > 5, 'item-red': item.value < 5}"
     this.el.nativeElement.style.color = this.myTask.value > 5 ? 'green' : 'red'
   }

}
