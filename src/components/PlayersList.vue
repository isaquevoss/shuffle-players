<template>
  <v-container>
    <v-card>
      <v-container>
      <v-row>
        <v-col cols="2" v-for="item in players" :key="item.id">
          <player-card-fifa :player="item"></player-card-fifa>
        </v-col>
      </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
import PlayerCardFifa from "./PlayerCardFifa.vue";
export default {
  components: { PlayerCardFifa },
  props: {
    players: [],
  },
};
</script>