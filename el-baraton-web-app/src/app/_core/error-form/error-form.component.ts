import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent implements OnInit {

  @Input() form: any;

  @Input() controlName: string;

  @Input() isSubmittedForm: boolean;

  @Input() isPasted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
