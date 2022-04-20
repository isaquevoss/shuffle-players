<template>
    <v-card>
        <v-row>
            <v-col cols="2" v-for="item in players" :key="item.id">
                <player-card-fifa :player="item"></player-card-fifa>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
import PlayerCardFifa from './PlayerCardFifa.vue';
export default {
  components: { PlayerCardFifa },
  props: {
    players: [],
  },
};
</script>