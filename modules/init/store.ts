import axios from 'axios';
import { defineStore } from 'pinia';

export const useInitStore = defineStore('init', {
     state: () => ({
          test: 'Store initialized and works'
     })
});
