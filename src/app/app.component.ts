import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import {Ngxalert} from  'ngx-dialogs';

interface Card {
  card: string;
  flipped: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[] = [
    { card: 'A', flipped: false },
    { card: 'A', flipped: false },
    { card: 'B', flipped: false },
    { card: 'B', flipped: false },
    { card: 'C', flipped: false },
    { card: 'C', flipped: false },
    { card: 'D', flipped: false },
    { card: 'D', flipped: false },
    { card: 'E', flipped: false },
    { card: 'E', flipped: false },
    { card: 'F', flipped: false },
    { card: 'F', flipped: false },
  ];
  simpleAlert:  any  =  new  Ngxalert;
  flippedCards: Card[] = [];
  moves = 0;
  matches = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.cards = this.shuffle(this.cards);
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  flipCard(card: any) {
    if (!card.flipped && this.flippedCards.length < 2) {
      card.flipped = true;
      this.flippedCards.push(card);
  
      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].card == this.flippedCards[1].card) {
          this.matches++;
          this.flippedCards = [];
  
          if (this.matches === this.cards.length / 2) {
            this.simpleAlert.create({
              title: `You won in ${this.moves} moves!`,
              message: 'Play again ?',
              confirm: ()=> {
                window.location.reload()
              },
            })
          }
        } else {
          this.moves++;
          setTimeout(() => {
            this.flippedCards[0].flipped = false;
            this.flippedCards[1].flipped = false;
            this.flippedCards = [];
          }, 1000);
        }
      }
    }
  } 
  


}
