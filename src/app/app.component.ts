import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked{

  constructor(private router:Router){}
  title = 'practice';
  angular="";

 
  interval : any;
  ngOnChanges(): void {
    console.log('ngOnChanges function is called');

  }
 
  ngOnInit(): void {
 
    console.log('ngOnInit function is called'); 
    this.angular="parent component";//When the angular component is intiliazes onit() will be intiloazed
  }

  

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit function is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked function is called');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);

    console.log('ngOnDestroy function is called');
  }
  ngDoCheck():void
  {
    console.log("ngDocheck is called");
  }

  dynamicTxt:string = 'This is DataBindin [(ngModel)]';   //Directive

  click(){
    this.router.navigate(['abc']);
     console.log(' clicked');
    
  }
}
