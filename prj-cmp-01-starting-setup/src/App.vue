<template>
  <ul>
    <list-of-web-sites
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.tittle"
      :description="resource.description"
      :link="resource.link"
    ></list-of-web-sites>
  </ul>
</template>
<script>
import ListOfWebSites from '@/components/learning-resources/ListOfWebSites.vue';
export default {
  components: {
    ListOfWebSites,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          tittle: 'Official guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          tittle: 'Google',
          description: 'Learn to Google!',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
