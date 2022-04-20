<template>
  <v-container>
    <new-player-form v-on:add-player="addPlayer"> </new-player-form>
    <players-list :players="players"></players-list>
  </v-container>
</template>
<script>
import NewPlayerForm from "../components/NewPlayerForm.vue";
import PlayersList from "../components/PlayersList.vue";
export default {
  components: { NewPlayerForm, PlayersList },
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
      getPlayers(){
          this.players = localStorage.getItem("players") ? JSON.parse(localStorage.getItem("players")) : [];
      },
    addPlayer(player) {
        console.log(player)
      this.players.push(player);
      localStorage.setItem("players", JSON.stringify(this.players));
    },
  },
};
</script>