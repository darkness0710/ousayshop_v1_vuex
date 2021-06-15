<template>
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
                        <div id="fb-root"></div>
                        <div class="fb-page video-wrapper" data-href="https://www.facebook.com/Tuann3Q" data-tabs="timeline" data-width="100" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Tuann3Q" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Tuann3Q">Shop Acc OusayG</a></blockquote></div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script src="https://apis.google.com/js/platform.js"></script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=193002364567174&autoLogAppEvents=1" nonce="miHMUJnS"></script>

<script>
export default {
  name: 'footer',
}
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