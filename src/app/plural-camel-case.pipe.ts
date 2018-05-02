import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluralcamelcase' })
export class PluralCamelCase implements PipeTransform {
	transform(value: string): string {
		let lowercaseValue = value.toLowerCase();
		return lowercaseValue.substr(0, 1).toUpperCase() + lowercaseValue.substr(1) + 's';
	}
}