import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search : string;

  constructor(
    private router: Router,

  ) { }

  @HostListener('document:keydown', ['$event'])
  private handleKeyboardEvent(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      this.searchByWord();
    }
  }

  ngOnInit() {
  }

  public searchByWord(){
    if(this.search.length > 2){

    }
  }

}
