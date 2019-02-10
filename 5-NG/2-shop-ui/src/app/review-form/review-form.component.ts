import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  isOpen: boolean = true;
  reviewForm: FormGroup;
  errors: any = {}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: [5],
      author: ['', [Validators.required, Validators.email]],
      body: ['', Validators.required]
    });

    let authorControl = this.reviewForm.get('author')
    authorControl.statusChanges
      .pipe(debounceTime(2000))
      .subscribe(e => {
        if (e === 'INVALID') {
          if (authorControl.errors.required)
            this.errors['email'] = "Email is Required"
          if (authorControl.errors.email)
            this.errors['email'] = "Invalid Email"
        } else {
          delete this.errors['email']
        }
      })

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
