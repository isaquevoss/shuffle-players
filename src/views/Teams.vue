<template>
  <div>
    <v-btn @click="ramdomize">Sortear</v-btn>
    <v-card>      
      <v-card-title> Time A </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="2"
            xl="2"
            v-for="item in teamA"
            :key="item.id"
          >
            <player-card-fifa :player="item"></player-card-fifa>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title> Time B </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="2"
            v-for="item in teamB"
            :key="item.id"
          >
            <player-card-fifa :player="item"></player-card-fifa>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    
  </div>
</template>
<script>
import PlayerCardFifa from "../components/PlayerCardFifa.vue";
import { shuffle } from "../helpers/shuffle";
export default {
  components: { PlayerCardFifa },
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
    this.ramdomize();
  },
  methods: {
    ramdomize() {
      this.sorteou = true;
      const goalkeepers = this.players.filter((item) => item.goalkeeper);

      this.teamA = [];
      this.teamB = [];
      const players = this.players.filter((item) => !item.goalkeeper);
      this.players = [];

      this.players = shuffle(players);
      this.goalkeepers = shuffle(goalkeepers);
      this.goalkeepers.forEach((item, index) => {
        if (index % 2 === 0) {
          setTimeout(() => {
            this.teamA.push(item);
          }, index * 1000);
        } else {
          setTimeout(() => {
            this.teamB.push(item);
          }, index * 1000);
        }
      });

      this.players.forEach((player, index) => {
        if (index % 2 === 0) {
          setTimeout(() => {
            this.teamA.push(player);
          },  (index + 2) * 1000);
        } else {
          setTimeout(() => {
            this.teamB.push(player);
          }, (index + 2) * 1000);
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
