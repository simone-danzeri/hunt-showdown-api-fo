<script>
import axios from 'axios';
import MapCard from '../components/MapCard.vue';
    export default {
        name: 'AppMaps',
        components: {
            MapCard
        },
        data(){
            return {
                maps: []
            };
        },
        methods: {
            getMaps() {
                axios.get(`http://127.0.0.1:8000/api/maps`)
            .then((response) => {
                this.maps = response.data.results;
            });
            }
        },
        mounted() {
            console.log(this.maps);
            this.getMaps();
        }
    }
</script>

<template>
    <div class="maps-bg">
        <template class="maps-container" v-for="map in maps">
            <MapCard :map="map"></MapCard>
        </template>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variables' as *;
.maps-bg {
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255, 0.3);
}
.maps-container{
    margin-top: 25%;
}
</style>