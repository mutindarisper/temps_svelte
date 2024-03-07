// selectionStore.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value
// export const selectedOption = writable(null);
export const appState = writable({
    selectedOption: null,
    selectedTab: null
  });