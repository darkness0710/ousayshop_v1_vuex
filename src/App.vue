<template>
    <div id="app">
        <!-- Messenger Plugin chat Code -->
        <div id="fb-root"></div>

        <!-- Your Plugin chat code -->
        <div id="fb-customer-chat" class="fb-customerchat"></div>

        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />


        <nav class="navbar bg-white fixed-top navbar-expand-lg " id="sectionsNav">
        <div class="container">
            <div class="navbar-translate custom-logo">
                <a href="/">
                    <img src="/img/logo.f4269b5e.png" style="width: 15%;">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="button-container nav-item">
                        <a href="/shop" class="btn btn-primary btn-round btn-block router-link-exact-active router-link-active" aria-current="page"><i class="material-icons">shopping_cart</i> OusayG Shop </a>
                    </li>
                    &nbsp;
                    <li class="button-container nav-item">
                        <a href="/feedback" class="btn btn-rose btn-round btn-block router-link-exact-active router-link-active" aria-current="page"><i class="material-icons">view_carousel</i> Góp Ý</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <router-view/>
    </div>
</template>

<style>
.custom-brand {
    color: #f44336 !important;
    font-weight: bolder !important;
    font-size: 30px !important;
}

.custom-logo {
    background-image: url('./assets/img/logo.png') !important;
}
</style>

<script>
export default {
    mounted() {
        if (typeof FB === "undefined") {
            this.fbInit();
        } else {
            window.FB.XFBML.parse();
        }
    },
    methods: {
        fbInit() {
            var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "105193195108584");
              chatbox.setAttribute("attribution", "biz_inbox");
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v11.0'
                });
              };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
        }
    }
}
</script>
