import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {

  courseName = "Angular";
  courseDuration = "DURATION is 3 mONTH";
  currentDate: Date = new Date();
  rollNoList: number[] = [111, 112, 113, 114, 115, 116, 117, 118];
  studentObj: any = {
    name: 'AAA',
    mobile: '6201941071',
    address: {
      city: 'pune',
      state: " "
    }
  }
}
