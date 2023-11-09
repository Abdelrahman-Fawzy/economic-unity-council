import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: any

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((categories: any) => {
      console.log(categories);
      this.categories = categories.data.list
    })
  }

  toggleItem(event: any) {
    let dropDownMenu = event.target.parentElement.nextElementSibling
    dropDownMenu.classList.toggle('show')
  }

}
