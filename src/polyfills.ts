import 'zone.js';  // Included with Angular CLI.

// This file is required by Angular and should be loaded before your main application.
// You can add your own polyfills to this file.

// Fix for 'global is not defined' error
(window as any).global = window;

// Other polyfills can go here if needed
