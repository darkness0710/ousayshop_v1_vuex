<template>
    <div class="main main-raised mt-100">
        <div class="container">
            <div class="about-office">
                <div class="row text-center">
                    <br>
                </div>
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
                </div>
                <!-- <div class="row">
                    <div class="col-md-12">
                        <img class="img-raised rounded img-fluid" alt="Raised Image" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/186498675_105218315106072_6215160601551109314_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=x8JVo_vRE5YAX_T9PoS&tn=pxyiGESX3dFsq9Rx&_nc_ht=scontent-hkt1-2.xx&oh=78b2d796da630e98d98da0801d325479&oe=60CB9BB8">
                    </div>   
                </div> -->
               <!--  <div class="col-md-2 mt-30">
                    <div class="iframe-container video-wrapper">
                        <iframe height="200" width="300" :src="youtube_src"  frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    </div>
                </div> -->
            </div>
            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            json: {},
            youtube_src: '',
            slides: [
                { 'src': require(`@/assets/banners/01.jpg`) },
                { 'src': require(`@/assets/banners/02.jpg`) },
                { 'src': require(`@/assets/banners/03.jpg`) }
            ],
            options: {
                autoWidth: false,
                autoHeight: false,
                autoplay: true,
                focus: 'center'
            },
        };
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
