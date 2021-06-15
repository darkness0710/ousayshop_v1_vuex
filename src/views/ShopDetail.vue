<template>
    <body class="product-page">
        <div class="section section-gray mt-400">
            <div class="container">
                <div class="main main-raised main-product">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <template>
                              <splide :options="options">
                                <splide-slide v-for="slide in slides" :key="slide.src">
                                    <img :src="slide.src" class="force-img">
                                </splide-slide>
                              </splide>
                            </template>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <h2 class="title"> {{ formatTitle(this.item) }}</h2>
                            <h3 class="main-price">{{ formatContent(this.item) }}</h3>
                            <div id="accordion" role="tablist">
                                <div class="card card-collapse">
                                    <div class="card-header" role="tab" id="headingOne">
                                        <h5 class="mb-0">
                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Mô tả
                                                <i class="material-icons">keyboard_arrow_down</i>
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            <p> {{ this.item.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pull-right" v-on:click="contact()">
                                <button class="btn btn-rose btn-round">Liên hệ &#xA0;<i class="material-icons">shopping_cart</i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                    <footer-component></footer-component>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
    .mt-400 {
        margin-top: 400px !important;
    }

    .force-img {
        max-width: -webkit-fill-available !important;
        max-height: -webkit-fill-available !important;
    }
</style>

<script>
import DataJson from './../assets/database/shop/data.json'
import TypeJson from './../assets/database/shop/type.json'

export default {
   name: 'ShopDetail',
   data() {
        return {
            options: {
                autoWidth: false,
                autoHeight: false,
                focus: 'center'
            },
            slides: [
                {
                }
            ],
            item: {},
            items: {},
            types: {}
        };
    },
    methods: {
        basename(path) {
           return path.split('/').reverse()[0];
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
            return `${prefix} S ${item.server}`;
        },
        formatContent(item) {
            let sell = item.selled == '1' ? '(Đã bán)' : '(Còn hàng)';
            let cost = this.formatCost(item.cost);
            return `${cost} ${sell}`;
        },
        contact() {
            window.open("https://www.facebook.com/Tuann3Q/");
        }
    },
    created() {
        this.item = DataJson.data.find(x => x.id === this.$route.params.id);
        this.types = this.types = TypeJson.data;
        this.slides = [];
        const illustrations = require.context(
          '@/assets/database/shop/',
          true,
          /.*\.(gif|jpe?g|bmp|png)$/
        )
        let images = illustrations.keys();
        for (let index = 0; index < images.length; ++index) {
            let bool = images[index].startsWith(`./${this.$route.params.id}`);
            if (bool) {
                let name = this.basename(images[index]);
                let url = require(`@/assets/database/shop/${this.$route.params.id}/${name}`)
                this.slides.push({src: url})
            }
        }
    },
    mounted () {
    }
}
</script>
