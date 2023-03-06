import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MyHeaderComponent } from './my-header/my-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  title = 'Angular Concept';

  role = 'Admin';//this is for *ngSwitch 
  // role = 'User';


  /*___________ @viewChild component reference______________*/
  /* @viewChild is Dynamic component loader */
  @ViewChild('user',{read:ViewContainerRef}) vcr !: ViewContainerRef;
 
  //Below Given Hook help to display MyHeaderComponent with viewchild
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(MyHeaderComponent);
    componentRef.instance.property_data = 200;
   // In Above line instance use as property accessesor it can change property value

  }

   

  }
