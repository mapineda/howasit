import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/add-review/add-review.html',
})
export class AddReviewPage {

  title: any;
  description: any;
  rating: any;

  constructor(public view: ViewController) {

  }

  save(): void {

    let review = {
        title: this.title,
        description: this.description,
        rating: this.rating
    };

    this.view.dismiss(review);

  }

  close(): void {
    this.view.dismiss();
  }
}
