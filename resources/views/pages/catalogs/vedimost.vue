<template>
  <div>
    <div class="demo-alignment">
      <vs-popup classContent="popup-example" title :active.sync="popupActive2">
        <!-- <v-select
          label="good"
          class="mb-4 mt-2"
          :options="allKatItem ? allKatItem : null"
          :value="selectedVedmost"
          v-model="selecteds"
          multiple
        ></v-select>-->
        <vs-input
          label-placeholder="label"
          v-model="selectedVedmost.good"
          :value="selectedVedmost.good"
          @input="getNameVedmost(selectedVedmost)"
          class="w-full mb-base"
        />
        <vs-list class="mb-base" v-if="allKatItem != null">
          <vs-list-item v-for="(val,index) in allKatItem" :key="index" :title="val.good">
            <vs-checkbox color="success" @click="getCheck(val)"></vs-checkbox>
          </vs-list-item>
        </vs-list>
        <vs-row vs-type="flex" vs-justify="flex-end">
          <div class="bx-row mb-10">
            <vs-button color="primary" type="filled" @click="addMassive()">Save</vs-button>
          </div>
        </vs-row>
      </vs-popup>
    </div>
    <vx-card>
      <h2 class="text-center mb-base mt-4">{{filename[0].name}}</h2>
      <vs-table :data="vedomosts">
        <template slot="thead">
          <vs-th>№</vs-th>
          <vs-th>НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ</vs-th>
          <vs-th>ЕД.ИЗМ</vs-th>
          <vs-th>НА ЕДИНИЦУ</vs-th>
          <vs-th>Кол-во</vs-th>
          <vs-th>Цена</vs-th>
          <vs-th>ВСЕГО</vs-th>
          <vs-th>action</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr
            v-for="(val,index) in data"
            :key="index"
            :state="allpassed.includes(val) ? 'danger' : ''"
          >
            <vs-td>{{val.number}}</vs-td>
            <vs-td>{{val.good}}</vs-td>
            <vs-td>{{val.unit}}</vs-td>
            <vs-td>{{val.one_amount}}</vs-td>
            <vs-td>{{val.amount}}</vs-td>
            <vs-td>{{val.price}}</vs-td>
            <vs-td>{{val.total}}</vs-td>
            <vs-td>
              <vs-button
                color="primary"
                size="small"
                type="filled"
                @click="popupActive2=true"
                v-on:click="getNameVedmost(val)"
              >Poisk</vs-button>
            </vs-td>
            <vs-td>
              <vs-button color="warning" size="small" type="filled" v-on:click="getPass(val)">Pass</vs-button>
            </vs-td>

            <!-- <template class="expand-user" slot="expand" v-if="allGoods[val.id]">
              <div class="con-expand-users w-full">
                <vs-list>
                  <vs-list-item
                    v-for="item in allGoods[val.id]"
                    :key="item.id"
                    :title="item.id + ' ' + '--' + item.good"
                  ></vs-list-item>
                </vs-list>
              </div>
            </template>-->

            <template class="expand-user" slot="expand" v-if="allGoods[val.id]">
              <div class="con-expand-users w-full">
                <!-- <div class="con-btns-user flex items-center justify-between">
                <div class="con-userx flex items-center justify-start">
                  <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`" />
                  <span>{{ tr.name }}</span>
                </div>
                <div class="flex">
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button>
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
                </div>
                </div>-->
                <vs-list>
                  <vs-list-item
                    icon-pack="feather"
                    icon="icon-check"
                    v-for="item in allGoods[val.id]"
                    :key="item.id"
                    :title="item.id + ' ' + item.good + ' -- ' + item.price4"
                  ></vs-list-item>
                </vs-list>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
      <vs-row vs-type="flex" vs-justify="flex-end" class="mt-8">
        <div class="bx-row mb-10">
          <router-link :to="{name:'allPassed'}">
            <vs-button color="success" size="medium" type="filled" @click="postPassed()">Pass</vs-button>
          </router-link>
        </div>
      </vs-row>
    </vx-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import {
  getVedmosts,
  findFromKatalog,
  clickPassed
} from "../../../api/katalog";
export default {
  data() {
    return {
      popupActive2: false,
      vedomosts: [],
      selectedVedmost: {},
      selecteds: [],
      allKatItem: [],
      getCat: "",
      check: [],
      flag: false,
      passFlag: false,
      allGoods: [],
      allpassed: [],
      allpassed2: [],
      id: this.$route.params.id,
      filename: {}
    };
  },

  components: {
    "v-select": vSelect
  },
  mounted() {
    this.fetchVedomost();
  },

  methods: {
    fetchVedomost() {
      getVedmosts(this.id)
        .then(res => {
          this.vedomosts = res.data.data[0].vedomosts;
          this.filename = res.data.data;
          this.allpassed = [];
          this.vedomosts.forEach(ved => {
            if (ved.passed) {
              this.allpassed.push(ved);
            }
          });
          console.log(this.allpassed);
        })
        .catch(err => console.log(err));
    },
    getNameVedmost(v) {
      this.selectedVedmost = v;
      findFromKatalog(v)
        .then(res => {
          this.allKatItem = res.data.data;
        })
        .catch(err => console.log(err));
    },
    getCheck(v) {
      this.flag = false;
      if (this.check.length > 0) {
        for (let i = 0; i < this.check.length; i++) {
          if (this.check[i].id == v.id) {
            this.check.splice(i, 1);
            this.flag = true;
          }
        }
      }
      if (!this.flag) {
        this.check.push(v);
      }

      console.log(this.check);
    },
    addMassive() {
      this.allGoods[this.selectedVedmost.id] = this.check;
      this.check = [];
      this.popupActive2 = false;
      console.log(this.allGoods);
    },
    getPass(v) {
      // this.allpassed.push(v);

      console.log(this.allpassed);
      this.passFlag = false;
      if (this.allpassed.length > 0) {
        for (let i = 0; i < this.allpassed.length; i++) {
          if (this.allpassed[i].id == v.id) {
            this.allpassed.splice(i, 1);
            this.passFlag = true;
          }
        }
      }
      if (!this.passFlag) {
        this.allpassed.push(v);
      }
    },
    postPassed() {
      clickPassed(this.allpassed)
        .then(res => {
          this.vedomosts = res.data.data;
          this.fetchVedomost();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
