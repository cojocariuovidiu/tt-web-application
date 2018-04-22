import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../../model/course.model';

@Pipe({
  name: 'coursefilter',
  pure: false
})

export class CourseFilterPipe implements PipeTransform {
  transform(items: any[], filter: Course): any[] {
    if (!items || !filter) {
        return items;
      }
      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter((item: Course) => this.applyFilter(item, filter));
    }

    applyFilter(book: Course, filter: Course): boolean {
        for (let field in filter) {
          if (filter[field]) {
            if (typeof filter[field] === 'string') {
              if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                return false;
              }
            } else if (typeof filter[field] === 'number') {
              if (book[field] !== filter[field]) {
                return false;
              }
            }
          }
        }
        return true;
      }
}