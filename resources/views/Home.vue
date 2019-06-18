<template>
  <div>
    <vx-card>
      <h1>Upload excel</h1>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <div class="vx-row w-full">
          <div class="vx-col"></div>
          <vs-input label="File Name" v-model="allrows.ved_name" class="mb-base w-1/3"/>
          <div class="vx-col w-1/2 mt-6">
            <input type="file" ref="file" @change="checkFile" id="inputexcel">
            <vs-button type="filled" size="small" color="primary">Upload</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
    <div class="vx-row mt-base">
      <div
        class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base"
        v-for="(val,index) in files"
        :key="index"
      >
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
  </div>
</template>

<script>
import { getFiles, sendExcel } from "../api/katalog";

import readXlsxFile from "read-excel-file";
export default {
  data() {
    return {
      files: [],
      id: this.$route.params.id,
      file: "",
      ex: {
        excel: null
      },
      allrows: {
        allrow: [],
        ved_name: "",
        id: this.$route.params.id
      },
      activeLoading: false,

      fileToUpload: null
    };
  },
  mounted() {
    this.fetchFiles();
  },

  methods: {
    fetchFiles() {
      getFiles(this.id)
        .then(res => {
          this.files = res.data.data;
        })
        .catch(err => console.log(err));
    },

    checkFile(e) {
      // var fileReader = new FileReader();
      // fileReader.readAsDataURL(e.target.files[0]);
      // fileReader.onload = e => {
      //   this.ex.excel = e.target.result;
      // };
      this.activeLoading = true;
      this.$vs.loading({
        type: "border"
      });
      readXlsxFile(e.target.files[0]).then(rows => {
        this.allrows.allrow = rows;
        console.log(rows);
        this.activeLoading = false;
        this.$vs.loading.close();
      });
      // console.log(this.allrows);
    },

    sendFile() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "point"
      });
      console.log(this.allrows);
      sendExcel(this.allrows)
        .then(res => {
          console.log(res);
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.activeLoading {
  opacity: 0 !important;
  transform: scale(0.5);
}
.loading-example {
  width: 120px;
  float: left;
  height: 120px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
