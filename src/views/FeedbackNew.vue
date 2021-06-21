<template>
   <div>
        <div class="main main-raised mt-100">
            <div class="section">
                <div class="container">
                    <h3 class="text-center">Gửi Góp Ý
                        <br>
                        <small>- Luôn luôn lắng nghe và thay đổi, anh em có góp ý nào về shop hay game thì điền zô nhé! -</small>
                    </h3>
                    <div class="media-body">
                        <form class="form" @submit.prevent="submitFeedback">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group bmd-form-group">
                                        <input type="text" class="form-control" placeholder="Tên của bạn / Nickname" v-model="user.name" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group bmd-form-group">
                                        <input type="email" class="form-control" placeholder="Địa chỉ email của bạn" v-model="user.email" required>
                                    </div>
                                </div>
                            </div>
                            <span class="bmd-form-group is-filled"><textarea class="form-control" placeholder="Nội dung góp ý ..." rows="6" v-model="user.content" required></textarea></span>
                            <div class="media-footer">
                                <button type="submit" class="btn btn-primary float-right">Gửi góp ý</button>
                            </div>
                        </form>
                    </div>
                <footer-component></footer-component>
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
            user: {
                name: '',
                email: '',
                content: '',
                status: false,
                created_at: null
            }
        };
    },
    firebase: {
    },
    methods: {
        submitFeedback(event) {
            event.preventDefault()
                this.user.created_at = new Date().getTime();
                this.db.collection('feedbacks').add(this.user).then(() => {
                    this.user.name = '';
                    this.user.email = '';
                    this.user.content = '';
                    this.$toastr.s(
                      "Gửi góp ý thành công\n <font color='yellow'>Góp ý của bạn đã được gửi và đang được xem xét!</font>"
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

        this.$toastr.defaultPosition = "toast-top-right";
    },
    created() {
    }
}
</script>
