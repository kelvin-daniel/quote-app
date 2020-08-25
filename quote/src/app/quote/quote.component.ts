import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() authorName: QuoteFormComponent;
  @Input() quote: any;
  @Input() submitByName: any;
  @Input() quoteUpdate: QuoteFormComponent;

  Id = 7;

  quotes = [
    new Quotes(
      1,
      'Rudyard Kipling',
      'You must not quit',
      'Kelvin',
      new Date(2020, 8, 25),
      0,
      0
    ),
    new Quotes(
      2,
      'Will Rogers',
      'Do not let yesterday take too much of today.',
      'Kelvin',
      new Date(2020, 8, 25),
      0,
      0
    ),
    new Quotes(
      3,
      'Winston Churchill',
      'The pessimist sees difficulty in every opportunity. The optimist sees opportunitty in every difficulty.',
      'Kelvin',
      new Date(2020, 8, 25),
      0,
      0
    ),
    new Quotes(
      4,
      'Unknown',
      'You learn more from failure than from success. Do not let it stop you. Failure builds character.',
      'Kelvin',
      new Date(2020, 8, 25),
      0,
      0
    ),

  ];
  showDesc(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showBtn = !this.quotes[index].showBtn;
  }

  deleteQuote(quoteDelete, index) {
    if (quoteDelete) {

      this.quotes.splice(index, 1);
    }
  }


  upVoter(index) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
    console.log('this i: ' + i);
  }

  dnVoter(index) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }

  highest(arr) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }

  addQuote(quote) {
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  constructor() { }

  ngOnInit() {

    const arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
  }

}
