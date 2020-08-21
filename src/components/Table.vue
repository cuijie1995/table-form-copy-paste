<template>
    <div class="tab">
        <table>
            <thead>
                <tr>
                    <td v-for="(item,index) in datas.col" :key="index">
                        {{item.colText}}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,i) in datas.row" :key="i">
                    <td v-for="(item,index) in datas.col" :key="index">
                        <span v-if="item.colType == 'date'">
                            <input type="date" v-model="data[item.colName]">
                        </span>
                        <span v-if="item.colType == 'int'">
                            <input type="number" v-model="data[item.colName]">
                        </span>
                        <span v-if="item.colType == 'text'">
                            <input type="text" v-model="data[item.colName]">
                        </span>
                        <span v-if="item.colType == 'boolean'">
                            <input type="text" v-model="data[item.colName]">
                        </span>

                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <table>

            <thead>
                <tr>
                    <td>型号</td>
                    <td>品名</td>
                    <td>品牌</td>
                    <td>产地</td>
                    <td>单位</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><el-input id="textarea" type="textarea" placeholder="请输入内容" v-model="value" @focus="keydown()"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>

            </tbody>
        </table> -->

    </div>
</template>

<script>

    export default {
        name: 'Table',
        props: {
            datas: Object
        }
    }
</script>
<style scoped>
    .table {
        text-align: center;
        margin: 10% 0 0 20%;
    }

    table,
    tr,
    td {
        border: 1px solid #ccc;
        border-collapse: collapse;
    }

    input {
        text-align: center;
    }
</style>