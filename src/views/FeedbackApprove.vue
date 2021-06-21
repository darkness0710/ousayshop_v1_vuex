<template>
   <div>
        <div class="main main-raised mt-100">
            <div class="secction">
                <div class="container tim-container">
                    <div id="comments">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <div class="media-area">
                                    <h3 class="title text-center">Số ý kiến {{ this.items.length  }} / Các ý kiến của viewer</h3>
                                    <div class="media" v-for="item of items" :key="item.key">
                                        <a class="float-left" href="#pablo">
                                            <div class="avatar">
                                                <img class="media-object" src="https://agilevelocity.com/wp-content/uploads/2019/09/shutterstock_1254279517.jpg" alt="...">
                                            </div>
                                        </a>
                                        <div class="media-body">
                                            <h4 class="media-heading">{{ item.name }}
                                                <small> ({{ getTimeVn(item.created_at) }})</small>
                                            </h4>
                                            <p>{{ item.content }}</p>
                                            <div class="media media-post">
                                                <a class="author float-left" href="#pablo">
                                                    <div class="avatar">
                                                        <img src="../assets/img/home_avatar.jpg" class="img">
                                                    </div>
                                                </a>
                                                <div class="media-body">
                                                    <span class="bmd-form-group">
                                                        <textarea class="form-control" placeholder="Write a nice reply or go home..." rows="6" v-model="item.response">
                                                        </textarea>
                                                    </span>
                                                    <div class="media-footer">
                                                        <a href="#pablo" class="btn btn-primary float-right" v-on:click="updateResponseValue(item)">
                                                            <i class="material-icons">reply</i> Cập nhật phản hồi
                                                        <div class="ripple-container"></div></a>
                                                        <div v-if="item.status == true">
                                                            <a href="#pablo" class="btn btn-success float-right" v-on:click="updateResponseStatus(item)">
                                                                <i class="material-icons">refresh</i> Đang hiện góp ý
                                                            <div class="ripple-container"></div></a>
                                                        </div>
                                                        <div v-else>
                                                            <a href="#pablo" class="btn btn-danger float-right" v-on:click="updateResponseStatus(item)">
                                                                <i class="material-icons">refresh</i> Đang ẩn góp ý
                                                            <div class="ripple-container"></div></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                    </div>
                                    <hr>
                                    <footer-component></footer-component>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   </div>
</template>

<script>
import Firebase from 'firebase';

// db.collection('feedbacks').onSnapshot((snapshotChange) => {
//     snapshotChange.forEach((doc) => {
//      console.log(doc.data().name);
//      console.log(doc.data().email);
//      console.log(doc.data().content);
//         // this.Users.push({
//         //     key: doc.id,
//         //     name: doc.data().name,
//         //     email: doc.data().email,
//         //     phone: doc.data().phone
//         // })
//     });
// });

export default {
    name: 'FeedbackNew',
    data() {
        return {
            db: null,
            items: []
        };
    },
    firebase: {
    },
    methods: {
        getTimeVn(time) {
            let date = new Date(time);
            return  date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        },
        goToFeedbackNew () {
            window.location.href = '/feedback/new';
        },
        updateResponseStatus (item) {
            let id = item.key;
            this.db.collection('feedbacks').doc(id)
                .update(item).then(() => {
                    this.$toastr.s(
                          "<font color='yellow'>Cập nhật thành công!</font>"
                        );
                }).catch((error) => {
                    console.log(error);
                });
        },
        updateResponseValue(item) {
            let id = item.key;
            this.db.collection('feedbacks').doc(id)
                .update(item).then(() => {
                    this.$toastr.s(
                          "<font color='yellow'>Cập nhật thành công nội dung phản hồi!</font>"
                        );
                }).catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {
    },
    mounted() {
        let config = {
            apiKey: "AIzaSyCX26dD_mAf8ULOBhLJ8yMPRKe9ji4_Gec",
            authDomain: "ousayshop.firebaseapp.com",
            projectId: "ousayshop",
            storageBucket: "ousayshop.appspot.com",
            messagingSenderId: "750824630900",
            appId: "1:750824630900:web:031b68025b60e8602cff21",
            measurementId: "G-8C442WZFHG"
        };
        let app = Firebase.initializeApp(config);
        this.db = app.firestore();

        this.db.collection('feedbacks').onSnapshot((snapshotChange) => {
            this.items = [];
            snapshotChange.forEach((doc) => {
                this.items.push({
                    key: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    content: doc.data().content,
                    created_at: doc.data().created_at,
                    status: doc.data().status,
                    response: doc.data().response
                })
            });
        });
    },
    created() {
    }
}
</script>
