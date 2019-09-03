import { Component } from '@angular/core';
// import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market';
  // graph;
  
  constructor() {}
  // constructor(private cryptoService: CryptoService) {
  //    this.graph = this.cryptoService.getShippingPrices()
  //  
// }
   

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

