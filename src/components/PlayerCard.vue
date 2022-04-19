<template>
  <div>
      <v-card>
          <v-card-title>{{ player.name }}</v-card-title>
      </v-card>
    
  </div>
</template>
<script>
export default {
  props: {
    player: Object,
  },
};
</script>
