<template>
    <div class="content">
        <div class="two">
            <div style="  margin-bottom: 5px;">
                <el-row style="padding-left: 2%;">
                    <el-col :span="1">
                        <i class="el-icon-folder-opened"></i>
                    </el-col>
                    <el-col :span="3" style=" margin-top: 2px;">
                        <p sort="title" class="title">订单详情</p>
                    </el-col>
                </el-row>
            </div>
            <div class="showProduct">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-table :data="orderDetails" border style="width: 100%">
                            <el-table-column fixed prop="spec" label="型号" width="160">
                                <template slot-scope="{row,$index}">
                                    <el-input placeholder="请输入型号" slot="reference" v-model="row.spec">
                                    </el-input>
                                </template>
                            </el-table-column>
                            <el-table-column fixed prop="productName" label="品名" width="160">
                                <template slot-scope="{row,$index}">
                                    <el-input placeholder="请输入名称" slot="reference" v-model="row.productName"
                                        class="input" @keydown.ctrl.86.native="paste"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="brand" label="品牌" width="160">
                                <template slot-scope="{row,$index}">
                                    <el-input placeholder="请输入品牌" slot="reference" v-model="row.brand"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="origin" label="产地" width="120px">
                                <template slot-scope="{row}">
                                    <el-input placeholder="请输入产地" slot="reference" v-model="row.origin></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop=" unit" label="单位" width="110px">
                                        <template slot-scope="{row}">
                                            <el-input placeholder="请输入单位" slot="reference" v-model="row.unit">
                                            </el-input>
                                        </template>
                            </el-table-column>

                        </el-table>
                    </el-col>
                </el-row>
                <el-button type="primary" style="margin-top: 15px;margin-left: 20px;" @click="addRow">增加一行</el-button>
            </div>
        </div>



        <!-- <el-input id="textarea" type="textarea" placeholder="请输入内容" v-model="value" @focus="keydown()"> -->
        </el-input>

        <el-input id="textarea" type="textarea" placeholder="请输入内容" v-model="value" @keydown.ctrl.86.native="paste">
        </el-input>


    </div>
</template>
<script>
    import $ from 'jquery'

    let self;

    export default {
        data() {
            return {
                value: "",
                // 第一部分表单
                orderDetails: [
                    {
                        spec: "",
                        productName: "",
                        brand: "",
                        origin: "",
                        unit: "",
                    }
                ],
                textarea: "",
            };
        },
        mounted() {
            self = this
        },
        methods: {
            // 增加一行
            addRow() {
                self.orderDetails.push({
                    spec: "",
                    productName: "",
                    brand: "",
                    origin: "",
                    unit: ""
                });
            },
            paste() {
                $('#textarea').on("textInput", function (event) {

                    $('#textarea').bind('input propertychange', function () {

                        var str1 = $(this).val();
                        var rowList = str1.split("\n");
                        var trStr;


                        //从excle表格中复制的数据，最后一行为空行，因此无需对len数组中最后的元素进行处理  
                        for (var i = 0; i < rowList.length - 1; i++) {
                            // console.log(i)
                            // console.log(rowList[i])
                            //excel表格同一行的多个cell是以空格分割的，此处以空格为单位对字符串做拆分操作   
                            trStr = rowList[i].split(/\s+/);

                            self.addRow()


                            self.orderDetails[i].spec = trStr[0]
                            self.orderDetails[i].productName = trStr[1]
                            self.orderDetails[i].brand = trStr[2]
                            self.orderDetails[i].origin = trStr[3]
                            self.orderDetails[i].unit = trStr[4]

                            console.log(self.orderDetails)



                            // for (var j = 0; j <= trStr.length - 1; j++) { //将excel中的一行数据存放在table中的一行cell中   
                            //     $("tr:eq(" + trIndex + ")").children("td:eq(" + (tdIndex + j) + ")").children().val(trStr[j]);
                            // }
                            // trIndex++;
                        }
                        // return false; //防止onpaste事件起泡   


                        var order = self.orderDetails.pop()
                        var row = rowList.pop()
                        // console.log(order)

                        // console.log(trStr)
                        // console.log(self.orderDetails)
                        // console.log(rowList)
                        for (var n = 0; n < self.orderDetails.length; n++) {
                            // console.log(self.orderDetails[n])
                            // console.log(rowList[n])
                            // console.log(rowList[n].length)
                            // self.orderDetails[n].spec = rowList[n][0]
                            // self.orderDetails[n].productName = rowList[n][1]
                            // self.orderDetails[n].brand = rowList[n][2]
                            // self.orderDetails[n].unit = rowList[n][3]
                            // self.orderDetails[n].quantity = rowList[n][4]
                        }

                    })


                    if (event.ctrlKey && event.keyCode == 86) {

                    }

                })
            },
            onTableKeydown(event) {

            }

        }
    };
</script>
<style scoped>
    .content {
        padding-top: 25px;
    }

    .content .title {
        color: #000000;
        font-weight: 800;
        font-size: 16px;
    }

    .two {
        margin-bottom: 50px;
    }

    .el-input {
        width: 60%;
    }

    .el-textarea {
        width: 80%;
    }

    .el-table .el-input {
        width: 100%;
    }

    .el-form-item {
        margin-bottom: 15px !important;
    }

    .el-input {
        height: 30px;
    }

    i {
        margin-top: 0 !important;
    }
</style>
<style lang="scss">
    .content {
        .el-form-item__content {
            margin-left: 0 !important;
            height: 30px;
            line-height: 30px;
        }

        .el-form-item__label {
            width: 120px !important;
            line-height: 30px;
            color: #495060;
        }

        input.el-input__inner {
            height: 30px;
            line-height: 30px;
        }

        .el-table td,
        .el-table th.is-leaf {
            text-align: center;
        }
    }
</style>