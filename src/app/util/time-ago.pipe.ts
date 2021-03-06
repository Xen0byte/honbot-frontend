import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceStrict } from 'date-fns';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string | number) {
    if (!value) {
      return '';
    }
    return formatDistanceStrict(new Date(), new Date(value)) + ' ago';
  }
}
