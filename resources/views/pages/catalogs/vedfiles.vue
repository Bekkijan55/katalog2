<template>
  <div>
    <vx-card>
      <vs-button color="primary" type="filled" size="medium" @click="popupActive=true">New</vs-button>

      <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="popupActive">
        <form @submit.prevent="addFile">
          <vs-input label="FIle Name" v-model="filename.file" class="w-full"/>
          <br>
          <vs-button color="primary" type="filled" size="medium">Add</vs-button>
        </form>
      </vs-popup>
    </vx-card>

    <div class="vx-row mt-base">
      <div
        class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base"
        v-for="(val,index) in allFiles"
        :key="index"
      >
        <vx-card>
          <h5 class="mb-2">{{val.name}}</h5>
          <p class="text-grey">{{val.created_at}}</p>
          <div class="flex justify-between flex-wrap">
            <router-link :to="{name:'home', params:{id:val.id}}">
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
  </div>
</template>

<script>
import { addVedFile, getVedFiles } from "../../../api/katalog";
export default {
  data() {
    return {
      popupActive: false,
      filename: {
        file: ""
      },
      allFiles: []
    };
  },
  mounted() {
    this.fetchVedFiles();
  },
  methods: {
    addFile() {
      addVedFile(this.filename)
        .then(res => {
          console.log(res.data.data);
          this.popupActive = false;
        })
        .catch(err => console.log(err));
    },
    fetchVedFiles() {
      getVedFiles()
        .then(res => {
          this.allFiles = res.data.data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>