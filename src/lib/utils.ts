import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Adds commas as thousands separators to a given number.
 */
export function numberWithCommas(number: number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
