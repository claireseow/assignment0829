import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market';
  // search = [];

  // textInput= new FormControl()

  // constructor(){}

  ngOnInit(){
    //  this.CryptoService.search.subscribe( this.search => {
    //   this.search = this.search
    // })
    
  }

  // onSubmitMessage(){
  //   this.CryptoService.sendMessage(this.textInput.value)
  // }
}

