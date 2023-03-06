import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  /*____________changeDetection property____________ */
  changeDetection : ChangeDetectionStrategy.OnPush
  // that automatic change detection is deactivated 
   /*if this line commented or removed this child components RoomList table is  modified.
   this allow only parent component's push method work without affect child component*/
  /*________________________________________________ */

  })
export class RoomsListComponent implements OnChanges ,OnInit {
    
// @Input and @Output both part of component Interaction
    @Input() rooms: RoomList[] = [];

    @Input() title: string = '';

    @Output() selectedRoom = new EventEmitter<RoomList>();

    selectRoom(room:RoomList){
      this.selectedRoom.emit(room)
    }

    
    /* The method receives a SimpleChanges object 
    of current and previous property values.*/
    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if(changes['title']){
        this.title = changes['title'].currentValue.toUpperCase();
      }
    }
    
    
    ngOnInit(): void {
      
    }


}
