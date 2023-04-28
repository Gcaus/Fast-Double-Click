<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Fast Double Click</h1>
        </div>
        <div class="containerFilters">
            <div class="startDate alignfilter">
                <p>Start Date:</p>
                <input type="date" v-model="startDate">
            </div>
            <div class="endDate alignfilter">
                <p>End Date:</p>
                <input type="date" v-model="endDate">
            </div>
            <div class="orderBy alignfilter">
                <p>Order By:</p>
                <select v-model="orderBy">
                    <option value="time">Time</option>
                    <option value="dateAndTime">Date And Time</option>
                </select>
            </div>
            <div class="order alignfilter">
                <p>Order:</p>
                <select v-model="order">
                    <option value="asc">Asc</option>
                    <option value="des">Des</option>
                </select>
            </div>
        </div>
        <div class="constainerResults">
            <div class="results" v-for="(item, index) in listOfRecords" :key="index">
                <div>Time: {{ (item.time / 1000).toFixed(2)}}s - Date and Time: {{ new Date(item.date).toLocaleDateString()}}</div>
            </div>
        </div>

        <div class="containerClearButton">
            <button class="clearButton" @click="clearRecords">Clear Records</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                listOfRecords: null,
                startDate: null,
                endDate: null,
                orderBy: null,
                order: null,
            }
        },
        components: {
            axios,
        },
        methods: {
            clearRecords() {
                axios.delete('http://localhost:3000/records')
                .then(response => {
                    console.log(response.data)
                    this.listOfRecords = null
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        mounted() {
            axios.get('http://localhost:3000/records').then(response => {
                this.listOfRecords = response.data
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        watch: {
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

        .containerFilters {
            display: flex;
            justify-content: center;
            gap: 15px;
            align-items: center;

            .alignfilter {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        .constainerResults {
            margin-top: 25px;
            .results {
                display: flex;
                justify-content: center;
            }
        }

        .containerClearButton {
            margin-top: 25px;
            display: flex;
            justify-content: center;
        }
    }
</style>