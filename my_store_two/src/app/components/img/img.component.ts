import { Component, OnInit, Input, Output, EventEmitter,OnChanges,AfterViewInit,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  ImgDefault ='https://img.icons8.com/plasticine/452/image.png';
  counter = 0;
  counterFn: number|undefined;
  img : String ='';
  @Input('imag') set changeImg(newImg: string){
      this.img= newImg;
      console.log('setInput() -- > Change just img =>', this.img);
  }
  @Input() alt: string = "";
  @Output() loadImg=new EventEmitter<string>();

  constructor() {
    // BEFORE RENDER
    // nO ASYNC --ONCE TIME
    console.log('Constructor','ImgValue =>', this.img);
  }

  ngOnInit(): void {
    //Before render
    //async - fetch --once time

    // console.log('Init');
    // this.counterFn=window.setInterval(()=>{
    //   this.counter +=1;
    //   console.log('counter interval');

    // },1000)
  }

  ngAfterViewInit(){
    //after render
    // handler children
    console.log('ngAfterViewInit','ImgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before render 
    //change inputs --times
    console.log('ngOnchanges','ImgValue =>', this.img);
    console.log(changes);
  }

  ngOnDestroy() {
    //delete
    //window.clearInterval(this.counterFn);
    console.log('Destroy');
  }

  imgError(){
    this.img=this.ImgDefault;
  }

  imgLoad(){
    console.log('Loaded - log Hijo');
    this.loadImg.emit(this.img +':´)');
  }

}
