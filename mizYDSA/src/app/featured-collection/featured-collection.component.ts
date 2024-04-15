import { Component } from '@angular/core';


@Component({
  selector: 'app-featured-collection',
  templateUrl: './featured-collection.component.html',
  styleUrl: './featured-collection.component.css'
})
export class FeaturedCollectionComponent {
  values: string[] = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'];
  
  getRowColor(index: number): string {
    return index % 2 === 0 ? '#f0f0f0' : '#ffffff'; // Alternate row colors (e.g., gray and white)
    // You can define more complex logic here to generate different colors based on the index
  }
  
}
