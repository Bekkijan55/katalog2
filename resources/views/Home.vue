<template>
  <div class="vx-row">
    <div class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base" v-for="(val,index) in files" :key="index">
      <vx-card>
        <h5 class="mb-2">{{val.name}}</h5>
        <p class="text-grey">{{val.created_at}}</p>
        <div class="flex justify-between flex-wrap">
          <router-link :to="{name:'vedimost', params:{id:val.id}}">
            <vs-button
              class="mt-4 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
            >Check</vs-button>
          </router-link>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { getFiles } from "../api/katalog";
export default {
  data() {
    return {
      files: []
    };
  },
  mounted() {
    this.fetchFiles();
  },

  methods: {
    fetchFiles() {
      getFiles()
        .then(res => {
          this.files = res.data.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
