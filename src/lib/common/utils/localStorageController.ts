import { darkMode } from '$lib/common/utils/store';

/**
 * Initialize dark mode based on the value in localStorage.
 * If no value is found, default to dark mode (false).
 */
export function initializeDarkMode(): void {
    const storedValue = localStorage.getItem('darkMode');
    const isDarkMode = storedValue ? storedValue === 'true' : true;
    darkMode.set(isDarkMode);
}

/**
 * Explicitly enable dark mode.
 */
export function enableDarkMode(): void {
    darkMode.set(true);
    localStorage.setItem('darkMode', 'true');
}

/**
 * Explicitly enable light mode.
 */
export function enableLightMode(): void {
    darkMode.set(false);
    localStorage.setItem('darkMode', 'false')
}
