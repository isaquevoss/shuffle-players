<template>
  <v-container>
    <v-card>
      <v-form v-if="player.stats" @submit.prevent="submit">
        <v-container>
          <v-text-field
            v-model="player1.name"
            required
            label="Nome"
          ></v-text-field>
          <v-text-field
            v-model="player1.stats.age"
            required
            label="Idade"
          ></v-text-field>
          <v-text-field
            required
            v-model="player1.stats.weight"
            label="Peso"
          ></v-text-field>
          <v-text-field
            required
            v-model="player1.stats.lung"
            label="Pulmao"
          ></v-text-field>
          <v-text-field
            required
            v-model="player1.stats.speed"
            label="Velocidade"
          ></v-text-field>
          <v-text-field
            required
            v-model="player1.stats.defense"
            label="Defesa"
          ></v-text-field>

          <v-file-input
            truncate-length="15"
            accept="image/*"
            v-model="image"
          ></v-file-input>
          <v-btn type="submit">Salvar</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { uploadFile } from "../services/storage";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    player: {
      stats: {}
    }
  },
  data() {
    return {
      image: null,
      player1: {
        id: uuidv4(),
        name: "",
        stats: {
          age: 0,
          weight: 0,
          lung: 0,
          speed: 0,
          def: 0,
        },
        image: "",
      },
    };
  },

  methods: {
    async submit() {
      console.log(this.image);
      const image = await uploadFile(
        this.image,
        this.player1.id + "." + this.image.name.split(".").pop()
      );
      this.player1.image = image;
      console.log(image);
      const player = this.player1;
      this.$emit("add-player", player);
      this.player1 = {
        id: uuidv4(),
        name: "",
        stats: {
          age: 0,
          weight: 0,
          lung: 0,
          speed: 0,
          def: 0,
        },
        image: "",
      };
      this.image = null;
    },
  },
};
</script>
