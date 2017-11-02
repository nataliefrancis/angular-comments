import { Component } from '@angular/core';
import { NgModel } from '@angular/forms'
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {
      	phrase: 'first comment!',
      	author: 'Galileo Galilei'
      },
      {
      	phrase: 'nice work!',
      	author: 'Nicola Tesla'
      },
      {
      	phrase: 'I would also like to congratulate you!',
      	author: 'Albert Einstein'
      }
  ];

  edit_value = true;


  constructor () {}

  addComment(phrase, author) {
  	let newComment = {
  		phrase: phrase,
  		author: author
  	}; 
  	this.comments.push(newComment);
  }

  deleteComment(comment) {
  	for(let i=0; i<this.comments.length; i++) {
  		if(this.comments[i].phrase === comment.phrase) {
  			this.comments.splice(i, 1);
  		}
  	}
  }

  editComment() {
  	this.edit_value = null;
  }


}


