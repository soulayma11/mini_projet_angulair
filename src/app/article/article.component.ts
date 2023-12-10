import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

  export class ArticleComponent {
    title = 'Titre de l\'article';
    content = 'Contenu de l\'article...';
    publishDate = new Date

}
