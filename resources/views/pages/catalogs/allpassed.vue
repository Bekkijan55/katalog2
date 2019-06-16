<template>
  <vx-card>
    <vs-table :data="allPassed">
      <template slot="thead">
        <vs-th>№</vs-th>
        <vs-th>НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ</vs-th>
        <vs-th>ЕД.ИЗМ</vs-th>
        <vs-th>НА ЕДИНИЦУ</vs-th>
        <vs-th>КОЛ-ВО</vs-th>
        <vs-th>ЦЕНА</vs-th>
        <vs-th>ВСЕГО</vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr v-for="(val,index) in data" :key="index">
          <vs-td>{{val.number}}</vs-td>
          <vs-td>{{val.good}}</vs-td>
          <vs-td>{{val.unit}}</vs-td>
          <vs-td>{{val.one_amount}}</vs-td>
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
          type="xlsx"
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
        "№": "number",
        "НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ": "good",
        "ЕД.ИЗМ": "unit",
        "НА ЕДИНИЦУ": "one_amount",
        "КОЛ-ВО": "amount",
        ЦЕНА: "price",
        ВСЕГО: "total"
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
    console.log(this.json_fields);
  },

  methods: {
    fetchPassed() {
      getAllPassed()
        .then(res => {
          this.allPassed = res.data.data;
          this.json_data = res.data.data;
          console.log(this.json_data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>