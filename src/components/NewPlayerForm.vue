<template>
  <v-container>
    <v-card>
      <v-form v-if="player" @submit.prevent="submit">
        <v-container>
          <v-text-field
            v-model="player.name"
            required
            label="Nome"
          ></v-text-field>
          <v-text-field
            v-model="player.stats.age"
            required
            label="Idade"
          ></v-text-field>
          <v-text-field
            required
            v-model="player.stats.weight"
            label="Peso"
          ></v-text-field>
          <v-text-field
            required
            v-model="player.stats.lung"
            label="Pulmao"
          ></v-text-field>
          <v-text-field
            required
            v-model="player.stats.speed"
            label="Velocidade"
          ></v-text-field>
          <v-text-field
            required
            v-model="player.stats.def"
            label="Defesa"
          ></v-text-field>

          <v-text-field
            required
            v-model="player.image"
            label="Imagem"
          ></v-text-field>
          <v-btn type="submit">Salvar</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      player: {
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
    submit() {
      const player = this.player;
      this.$emit("add-player", player);
      this.player = {};
    },
  },
};
</script>
