<template>
  <div class="table">
    <Table :datas="datas"></Table>




    <button @click="$router.push('form')">go form</button>
  </div>
</template>

<script>
  import Table from '../components/Table'
  export default {
    name: "tab",
    components: {
      Table
    },
    data() {
      return {
        datas: {
          //行
          row: [],
          //列
          col: [],
        }
      }
    },
    mounted() {
      this.datas.row = [{
        name: "小明",
        age: "18",
        sex: "男",
        date: "2001-11-26"

      }
      ]

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
        colText: "性别"
      }, {
        colName: "date",
        colType: "date",
        colText: "出生日期"
      }
      ]
    },
  }


</script>
<style scoped>
  .table {
    text-align: center;
    margin: 10% 0 0 20%;
  }
</style>