<template>
  <div class="form">
    <div v-for="(item,index) in datas.col" :key="index">
      <span>
        {{item.colText}}:
      </span>

      <span v-if="item.colType == 'date'">
        <input type="date" v-model="datas.obj[item.colName]">
      </span>
      <span v-if="item.colType == 'int'">
        <input type="number" v-model="datas.obj[item.colName]">
      </span>
      <span v-if="item.colType == 'text'">
        <input type="text" v-model="datas.obj[item.colName]">
      </span>
      <span v-if="item.colType == 'boolean'">
        <input type="text" v-model="datas.obj[item.colName]">
      </span>



      <!-- <input v-model="datas.obj[item.colName]"> -->
    </div>
  </div>
</template>
<script>
  // import Table from '../components/Table'
  export default {
    name: "FORM",
    components: {
      // Table
    },
    data() {
      return {
        datas: {
          //行
          obj: {},
          //列
          col: [],
        }
      }
    },
    mounted() {
      this.datas.obj = {
        name: "小明",
        age: "18",
        sex: "男",
        date: "2001-11-26"

      }
      this.datas.col = [{
        colName: "name",
        colType: "text",
        colText: "姓名"
      }, {
        colName: "age",
        colType: "int",
        colText: "年龄"
      }, {
        colName: "sex",
        colType: "boolean",
        colcs: "是:否",
        colText: "性别"
      }, {
        colName: "date",
        colType: "date",
        colText: "出生日期"
      }]
    },
  }


</script>