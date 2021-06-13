<template>
    <div class="main main-raised mt-100">
        <div class="section">
            <div class="container">
                <div class="about-office">
                <div class="row">
                    <div class="col-md-12">
                        <img class="img-raised rounded img-fluid" alt="Raised Image" src="https://pic.youzu.com/hd/sg2/online/dist/pc/images/news-bg.jpg">
                    </div>   
                </div>
            </div>
                <h2 class="section-title">Danh sách các loại tài khoản</h2>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-refine card-plain card-rose">
                            <div class="card-body">
                                <h4 class="card-title">
                                    Reset
                                    <button class="btn btn-default btn-fab btn-fab-mini btn-link pull-right" rel="tooltip" title="" data-original-title="Reset Filter">
                                        <i class="material-icons">cached</i>
                                    </button>
                                </h4>
                                <div id="accordion" role="tablist">
                                    <div class="card card-collapse">
                                        <div class="card-header" role="tab" id="headingThree">
                                            <h5 class="mb-0">
                                                <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Các loại tài khoản
                                                    <i class="material-icons">keyboard_arrow_down</i>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="card-body">
                                                <div v-for="type of types">
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" v-bind:value="type[0]" checked v-on:change="checkboxChange(type[0])"> {{ type[1] }}
                                                            <span class="form-check-sign">
                                                                <span class="check"></span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" v-if="items.length">
                        <div class="row">
                            <div class="col-md-4" v-for="item in items" :key="item.id">
                                <div class="card card-product card-plain no-shadow" data-colored-shadow="false" v-on:click="redirect(item.id)">
                                    <div class="card-header card-header-image">
                                        <a href="#">
                                            <img src="../assets/img/tn3q_product.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <a href="#">
                                            <h4 class="card-title">{{ formatTitle(item) }}</h4>
                                        </a>
                                    </div>
                                    <div class="text-center">
                                        <div class="price-container">
                                            <span class="price" v-bind:class="getClassPrice(item)">{{ formatContent(item) }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        Không tìm thấy tài khoản thỏa mãn!
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<style>
    .mt-100 {
        margin-top: 100px !important;
    }

    .stocking {
        color: blue !important;
    }
</style>

<script>
import DataJson from './../assets/database/shop/data.json'
import TypeJson from './../assets/database/shop/type.json'

export default {
    name: 'Shop',
    data() {
        return {
            masterItems: {},
            types: {},
            items: {},
            checked: []
        };
    },
    methods: {
        redirect(id = 1) {
            this.$router.push({ name: 'ShopDetail', params: {id: id}  })
        },
        formatCost(cost) {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });

            return formatter.format(cost).replace('$', '') + ' VNĐ';
        },
        formatTitle(item) {
            let prefix = this.types[item.type][1];
            return `${prefix} ${item.server}`;
        },
        formatContent(item) {
            let sell = item.selled == '1' ? '(Đã bán)' : '(Còn hàng)';
            let cost = this.formatCost(item.cost);
            return `${cost} ${sell}`;
        },
        getClassPrice(item) {
            return item.selled == '0' ? 'stocking' : '';
        },
        checkboxChange(type) {
            let index = this.checked.indexOf(type);
            index !== -1 ? this.checked.splice(index, 1) : this.checked.push(type);
            this.onReloadShop();
        },
        onReloadShop() {
            let tmpObject = this.masterItems;
            this.items = tmpObject.filter((value, index, array) => {
                return this.checked.includes(value.type);
            })
        }
    },
    mounted() {
        this.types = TypeJson.data;
        this.items = DataJson.data;
        this.masterItems = DataJson.data;
        this.checked = ['0', '1'];
    }
}
</script>
