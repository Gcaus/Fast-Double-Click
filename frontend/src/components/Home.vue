<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Fast Double Click</h1>
        </div>
        <div class="main">
            <button class="buttonClickFast" @click="fastHandleClick">Double Click</button>
        </div>
        <div class="containerLinkRecords">
            <router-link to="/records">
                <button class="buttonRecords">Records</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import axios from 'axios'
    export default {
        data() {
            return {
                firstTimeClick: 0,
                SecondTimeCLick: 0,
                diffTime: 0
            }
        },
        components: {
            axios,
            RouterLink
        },
        methods: {
            fastHandleClick() {
                if(this.firstTimeClick === 0) {
                    this.firstTimeClick = new Date().getTime();
                }
                else {
                    this.SecondTimeCLick = new Date().getTime();

                    this.diffTime = this.SecondTimeCLick - this.firstTimeClick;
                    console.log(this.diffTime);

                    axios.post('http://localhost:3000/', { time: this.diffTime })
                    .then(response => {
                        console.log(response.data)
                        this.firstTimeClick = 0
                    })
                    .catch(error => {
                        console.log(error)
                        this.firstTimeClick = 0
                    })

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 100vh;
        background-image: url('../assets/background.jpg');
        background-size: cover;

        .header {
            display: flex;
            justify-content: center;

            .title {
                font-family: 'HighSpeed';
                font-size: 56px;
                
                margin-top: 15px;
            }
        }
    
        .main {
            display: flex;
            justify-content: center;

            .buttonClickFast {
                cursor: pointer;
                width: 250px;
                height: 40px;
                margin-top: 35px;

                border-radius: 3px 10px 3px 10px;
                font-family: 'HighSpeed';
            }
        }

        .containerLinkRecords {
            display: flex;
            justify-content: center;
            margin-top: 35px;

            .buttonRecords {
                width: 250px;
                height: 40px;
                cursor: pointer;

                border-radius: 10px 3px 10px 3px;
                font-family: 'HighSpeed';
            }
        }
    }
</style>