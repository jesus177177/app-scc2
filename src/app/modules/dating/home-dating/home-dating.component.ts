import { Dating } from 'src/app/core/models/dating';
import { Component, OnInit } from '@angular/core';
import { DatingService } from 'src/app/services/dating.service';



@Component({
  selector: 'app-home-dating',
  templateUrl: './home-dating.component.html',
  styleUrls: ['./home-dating.component.css']
})
export class HomeDatingComponent implements OnInit {
  datings: Dating[];



  constructor(private datingService: DatingService) { }

  ngOnInit(): void {
    this.datingService.getDating().subscribe( (res) => {
      this.datings = res.map( (e) => {
        return {
        id: e.payload.doc.id,
        ...(e.payload.doc.data() as Dating)
        }
      })
    })
  }

  delete = (dating) => this.datingService.deleteDating(dating);

}
