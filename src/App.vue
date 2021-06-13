<template>
  <div id="app">
    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />


    <nav class="navbar bg-white fixed-top navbar-expand-lg " id="sectionsNav">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand custom-brand" href="/" id="flip">
                    <div><div>Ousay Gaming</div></div>
                    <div><div>Ousay Gaming</div></div>
                    <div><div>Ousay Gaming</div></div>
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
                        <router-link :to="{ name: 'Shop' }" class="btn btn-primary btn-round btn-block">
                            <i class="material-icons">shopping_cart</i> OusayG Shop
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>

#flip {
  height:50px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 10s linear infinite;
}

#flip div div {
  background:#42c58a;
}
#flip div:first-child div {
  background:#4ec7f3;
}
#flip div:last-child div {
  background:#DC143C;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}

.custom-brand {
    color: #f44336 !important;
    font-weight: bolder !important;
    font-size: 30px !important;
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
