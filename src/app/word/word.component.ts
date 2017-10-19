import {Component} from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'Hello';
    vn = 'xin chao';
    imgUrl = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
    forget = true;

    toggleForget() {
        this.forget = !this.forget;
    }
}
