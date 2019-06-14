<template>
  <vx-card>
    <h1>Upload excel</h1>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <vs-input label="File Name" v-model="allrows.ved_name" class="w-1/3 mb-base"/>
      <input type="file" ref="file" @change="checkFile" id="inputexcel">
      <vs-button type="filled" size="small" color="primary">Upload</vs-button>
      <div class="fill-row-loading">
        <div
          :class="{'activeLoading':activeLoading}"
          :id="[`loading-border`]"
          class="vs-con-loading__container loading-example"
        ></div>
      </div>
    </form>
  </vx-card>
</template>

<script>
import { sendExcel } from "../../../api/katalog";
import readXlsxFile from "read-excel-file";
export default {
  data() {
    return {
      file: "",
      ex: {
        excel: null
      },
      allrows: {
        allrow: [],
        ved_name: ""
      },
      activeLoading: false,

      fileToUpload: null
    };
  },
  mounted() {},

  methods: {
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
       this.activeLoading = false
        this.$vs.loading.close()
      });
      // console.log(this.allrows);
    },

    sendFile() {
        this.activeLoading = true;
      this.$vs.loading({
        type: "point"
      });
      sendExcel(this.allrows)
        .then(res => {
          console.log(res);
          this.activeLoading = false
        this.$vs.loading.close()
          this.$router.push("/");
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
