<template>
  <v-container>
    <new-player-form :player="playerEdit" v-on:add-player="addPlayer"> </new-player-form>
    <players-list v-on:edit="editPlayer" v-on:delete="deletePlayer" :players="players"></players-list>

    <v-btn type="button" @click="shuffle">Sortear</v-btn>
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
      playerEdit: {
        stats: {}
      }
    };
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
    shuffle() {
      localStorage.setItem("players", JSON.stringify(this.players));
      this.$router.push("/teams");
    },
    editPlayer(player) {
      this.playerEdit = player;
    },
    deletePlayer(player) {
      this.players = this.players.filter((item) => item.id !== player.id);
      localStorage.setItem("players", JSON.stringify(this.players));
    },
    getPlayers() {
      this.players = localStorage.getItem("players")
        ? JSON.parse(localStorage.getItem("players"))
        : [];
    },

    addPlayer(player) {      
      console.log(player);
      this.players.push(player);
      localStorage.setItem("players", JSON.stringify(this.players));
    },
  },
};
</script>