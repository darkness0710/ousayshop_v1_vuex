<template>
    <div class="main main-raised mt-100">
        <div class="container">
            <div class="about-office">
                <div class="row text-center">
                    <br>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <img class="img-raised rounded img-fluid" alt="Raised Image" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/186498675_105218315106072_6215160601551109314_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=x8JVo_vRE5YAX_T9PoS&tn=pxyiGESX3dFsq9Rx&_nc_ht=scontent-hkt1-2.xx&oh=78b2d796da630e98d98da0801d325479&oe=60CB9BB8">
                    </div>   
                </div>
                <div class="col-md-12  mt-30">
                    <div class="iframe-container video-wrapper">
                        <iframe height="500" width="1100" :src="youtube_src"  frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
            <div class="about-team team-1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-profile card-plain">
                            <div class="card-avatar">
                                <a href="#pablo">
                                    <img class="img" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.43.200.200a/p200x200/174613014_3003591076556521_2728226714239194251_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=VcpRnSxyf9gAX8uML-i&tn=pxyiGESX3dFsq9Rx&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=8593a4952e0dcf5fca75f7537478481a&oe=60CAF483">
                                </a>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Nguyễn Đức Tuấn(MT)</h4>
                                <h6 class="category text-muted">Streamer</h6>
                                <p class="card-description">
                                    NẠP TỆ VUI LÒNG CHUYỂN KHOẢN VÀO<br>
                                    TECH: 19036746678016<br>
                                    BIDV: 21510001702535<br>
                                    MOMO: 0364740637<br>
                                </p>
                            </div>
                            <div class="card-footer justify-content-center">
                                <a href="https://www.facebook.com/Tuann3Q/" class="btn btn-just-icon btn-link btn-facebook">
                                    <i class="fa fa-facebook-square"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UC5rx1pp9euMdXl-RpGOJVMg" class="btn btn-just-icon btn-link btn-google">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card card-profile card-plain">
                            <div class="card-body">
                                <h4 class="card-title">Cung cấp các loại dịch vụ</h4>
                                <div>
                                    <router-link :to="'shop'" class="btn btn-danger btn-lg">
                                        <i class="material-icons">shopping_cart</i> Shop Acc
                                    </router-link>
                                </div>
                                <div id="ytbutton">
                                    <div class="g-ytsubscribe" data-channelid="UC5rx1pp9euMdXl-RpGOJVMg" data-layout="full" data-count="default"></div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>


<script src="https://apis.google.com/js/platform.js"></script>

</script>

<style type="text/css">
    #ytbutton {
       padding: 10px 10px 10px 10px;
    }

    .mt-30 {
        margin-top: 30px !important;
    }

    .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
    }

    .video-wrapper iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>


<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    data() {
        return {
            json: {},
            youtube_src: ''
        };
    },
    components: {
      HelloWorld
    },
    created() {
        // 
        var channelID = "UC5rx1pp9euMdXl-RpGOJVMg";
        var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
        fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID)
            .then(r => r.json())
            .then(json => {
              this.json = json;
              // this.youtube_src = json.items[0].link;
              let link = json.items[0].link;
              let id = link.substr(link.indexOf("=")+1);
              this.youtube_src = "https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0";
            });

        var container = document.getElementById('youtubeContainer');
        var options = {
            'channel': 'GoogleDevelopers',
            'layout': 'default'
        };
        window.gapi.ytsubscribe.render(container, options);
    }  
}
</script>
