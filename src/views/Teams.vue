<template>
  <div>
    <v-text-field v-model="nameNewPlayer" label="novo jogador"></v-text-field>
    <v-btn @click="addPlayer">add</v-btn>
    <div v-if="!sorteou">
      <player-card
        v-for="item in players"
        :key="item.id"
        :player="item"
      ></player-card>
    </div>
    <v-card>
      <v-card-title> Time A </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="2" v-for="item in teamA" :key="item.id">
            <player-card-fifa :player="item"></player-card-fifa>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title> Time B </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="2" v-for="item in teamB" :key="item.id">
            <player-card-fifa :player="item"></player-card-fifa>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-btn @click="ramdomize">Sortear</v-btn>
  </div>
</template>
<script>
import PlayerCard from "../components/PlayerCard.vue";
import PlayerCardFifa from "../components/PlayerCardFifa.vue";
import { shuffle } from "../helpers/shuffle";
export default {
  components: { PlayerCard, PlayerCardFifa },
  data() {
    return {
      sorteou: false,
      nameNewPlayer: "",
      players: [],
      teamA: [],
      teamB: [],
    };
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
    ramdomize() {
      this.sorteou = true;
      this.teamA = [];
      this.teamB = [];
      const players = this.players;
      this.players = [];

      this.players = shuffle(players);

      this.players.forEach((player, index) => {
        if (index % 2 === 0) {
          this.teamA.push(player);
        } else {
          this.teamB.push(player);
        }
      });
    },
    getPlayers() {
      this.players = localStorage.getItem("players")
        ? JSON.parse(localStorage.getItem("players"))
        : [];
    },
    addPlayer() {
      this.players.push({
        id: this.players.length + 1,
        name: this.nameNewPlayer,
        stats: {},
        image: require("../assets/player.png"),
      });
    },
  },
};
</script>
