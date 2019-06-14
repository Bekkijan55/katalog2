<template>
  <vx-card>
    <vs-table :data="allPassed">
      <template slot="thead">
        <vs-th>№</vs-th>
        <vs-td>ОБОСНОВАНИЕ</vs-td>
        <vs-th>НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ</vs-th>
        <vs-th>ЕД.ИЗМ</vs-th>
        <vs-th>НА ЕДИНИЦУ</vs-th>
        <vs-th>ПО ПРОЕКТУ</vs-th>
        <vs-th>НА ЕДИНИЦУ</vs-th>
        <vs-th>ВСЕГО</vs-th>
        <vs-th>НА ЕДИНИЦУ</vs-th>
        <vs-th>КОЛ-ВО</vs-th>
        <vs-th>ЦЕНА</vs-th>
        <vs-th>ВСЕГО</vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr v-for="(val,index) in data" :key="index">
          <vs-td>{{val.id}}</vs-td>
          <vs-td>{{val.justify}}</vs-td>
          <vs-td>{{val.good}}</vs-td>
          <vs-td>{{val.unit}}</vs-td>
          <vs-td>{{val.act_one}}</vs-td>
          <vs-td>{{val.act_project}}</vs-td>
          <vs-td>{{val.act_one_price}}</vs-td>
          <vs-td>{{val.act_total}}</vs-td>
          <vs-td>{{val.ins_one}}</vs-td>
          
          <vs-td>{{val.amount}}</vs-td>
          <vs-td>{{val.price}}</vs-td>
          <vs-td>{{val.total}}</vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-row vs-type="flex" vs-justify="flex-end">
      <div class="bx-row mb-10">
        <download-excel
          class="btn btn-primary"
          :data="json_data"
          :fields="json_fields"
          type = "xlsx"
          worksheet="My Worksheet"
          
        >
          <vs-button color="primary" type="filled" size="medium" class="mt-8">Download Excel</vs-button>
        </download-excel>
      </div>
    </vs-row>
  </vx-card>
</template>

<script>
import { getAllPassed } from "../../../api/katalog";

export default {
  data() {
    return {
      allPassed: [],
      json_fields: {
        "№": "id",
        "ОБОСНОВАНИЕ" : "justify",
        "НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ": "good",
        "ЕД.ИЗМ":"unit",
        "АКТ НА ЕДИНИЦУ":"act_one",
        "ПО ПРОЕКТУ":"act_project",
        "ЦЕНА НА ЕДИНИЦУ":"act_one_price",
        "АКТ ВСЕГО":"act_total",
        "НА ЕДИНИЦУ":"ins_one",
        "КОЛ-ВО":"amount",
        "ЦЕНА":"price",
        "ВСЕГО":"total"
      },
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ]
    };
  }, 
  mounted() {
    this.fetchPassed();
    console.log(this.json_fields)
  },

  methods: {
    fetchPassed() {
      getAllPassed()
        .then(res => {
          this.allPassed = res.data.data;
          this.json_data = res.data.data;
          console.log(this.json_data)
        })
        .catch(err => console.log(err));
    }
  }
};
</script>