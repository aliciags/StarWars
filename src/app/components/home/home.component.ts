import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Response } from 'src/app/models/response.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];
  page: number = 1;
  hasNext: boolean = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.people = [];
    this.getPeople(this.page);
  }

  getPeople(page?: number, wookie?: string): void {
    this.personService.getAll(page, wookie)
      .subscribe((response: Response) => {
        console.log(response);
        if(response && response.results) {
          this.people.push(...response.results);
          this.hasNext = response.next ? true : false;
        }
      },
      error => {
        console.log(error);
      })
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.hasNext && this.getPeople(++this.page);
    /**this.personService.getAll(++this.page)
      .subscribe((response: Response) => {
        if(response && response.results){ this.people.push(...response.results); }
      });*/
    
  }

  onScroll(): void {
    console.log('here');
  }

}
