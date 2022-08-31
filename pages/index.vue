<template>
     <div>
          <h1>Super Admin Platform</h1>
          <h3>{{ test }}</h3>
     </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useInitStore } from './../modules/init/store';

const store = useInitStore();
const { test } = storeToRefs(store);
</script>
