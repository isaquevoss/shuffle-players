<template>
  
      <v-container>
        <v-row>
          <v-col cols="4" v-for="item in players" :key="item.id">
            <v-card>
              <v-card-title>
                <v-checkbox label="goleiro" v-model="item.goalkeeper"></v-checkbox>
                 <v-spacer></v-spacer>
                <v-btn icon @click="$emit('edit', item)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
               
                <v-btn icon @click="$emit('delete', item)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <player-card-fifa :player="item"></player-card-fifa>
            </v-card>
          </v-col>
        </v-row>
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