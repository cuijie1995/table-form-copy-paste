<template>
    <div class="container">
        <div class="content">
            <table style="width: 100%;text-align: center" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>
                        <td style="width: 300px;border-right: none;">摘要</td>
                        <td style="border: none;width: 50px;"></td>
                        <td style="width: 300px;border-right: none;">会计科目</td>
                        <td style="border: none;width: 50px;"></td>
                        <td style="width: 220px;">
                            <p class="money">借方金额</p>
                            <div class="unit">
                                <span>亿</span>
                                <span>千</span>
                                <span>百</span>
                                <span>十</span>
                                <span>万</span>
                                <span>千</span>
                                <span>百</span>
                                <span>十</span>
                                <span>元</span>
                                <span>角</span>
                                <span>分</span>
                            </div>

                        </td>
                        <td style="width: 220px;">
                            <p class="money">贷方金额</p>
                            <div class="unit">
                                <span>亿</span>
                                <span>千</span>
                                <span>百</span>
                                <span>十</span>
                                <span>万</span>
                                <span>千</span>
                                <span>百</span>
                                <span>十</span>
                                <span>元</span>
                                <span>角</span>
                                <span>分</span>
                            </div>

                        </td>

                    </tr>
                </thead>

                <tbody>
                    <tr class="first">
                        <td style="width: 300px;border-right: none;">
                            <div class="abstract1" @click="change1"></div>
                            <input type="text" class="input1" style="display: none;">
                        </td>
                        <td style="border: none;width: 50px;">
                            <div>
                                <a href="">摘要</a>
                            </div>
                        </td>

                        <td style="width: 300px;border-right: none;">
                            <div class="abstract2" @click="change2"></div>
                            <input type="text" class="input2" style="display: none;">
                        </td>
                        <td style="border: none;width: 50px;">
                            <div>
                                <a href="">科目</a>
                            </div>
                        </td>
                        <td>
                            <div class="edit1" @click="change3">1111111</div>
                            <input type="text" class="input3" style="display: none;">
                        </td>
                        <td>
                            <div class="edit2" @click="change4"></div>
                            <input type="text" class="input4" style="display: none;">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
</template>
<script>

    import $ from 'jquery'
    export default {
        data() {
            return {
                abstract: "摘要",
                voucher: "科目"
            }
        },
        methods: {
            change1() {
                $('.abstract1').hide()
                $('.input1').show()
            },
            change2() {
                $('.abstract2').hide()
                $('.input2').show()
            },
            change3() {
                $('.edit1').hide()
                $('.input3').show()
            },
            change4() {
                $('.edit2').hide()
                $('.input4').show()
            },
        },
    }


</script>
<style>
    .container {
        width: 100%;
    }

    .content {
        width: 70%;
        text-align: center;
        margin-left: 15%;
        margin-top: 10%;
    }

    table,
    tr,
    td {
        border: 1px solid #666666;
        border-collapse: collapse;
    }

    thead {
        font-size: 12px;
    }


    table thead tr {
        border-top-width: 2px;
    }

    table thead td {
        height: 48px;
        color: #555555;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
        overflow: hidden;
    }

    table tbody tr {
        height: 60px;
    }

    .money {
        margin: 0;
    }

    .unit {
        background-image: url(../assets/unit.png);
        background-repeat: repeat-y;

        height: 22px;
        line-height: 22px;
        font-weight: normal;
        border-top: 1px solid #dadada;
        text-align: center;
        min-width: 218px;
    }

    .unit span {
        float: left;
        width: 19px;
        height: 100%;
        margin-right: 1px;
        background-color: #fff;
    }

    .edit1,
    .edit2 {
        width: 100%;
        height: 60px;
        background-image: url(../assets/unit.png);
        background-repeat: repeat-y;

        overflow: hidden;
        font-family: 'tahoma';
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 10px;
        position: relative;
        text-align: right;
        line-height: 60px;
    }

    .abstract1,
    .abstract2 {
        width: 100%;
        height: 60px;
    }

    input {
        width: 100%;
        height: 60px;
        border: none;
    }

    a {
        color: #666666;
        text-decoration: none;
        font-size: 10px;
        display: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .first:hover a {
        display: initial;
        /*当鼠标hover时展示*/

    }
</style>