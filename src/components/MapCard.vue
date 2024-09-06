<script>
export default {
    name: 'MapCard',
    props: {
        map: {
            type: Object
        }
    }
}
</script>

<template>
    <div class="map">
        <h1>{{ map.map_name }}</h1>
    </div>
</template>


<style scoped lang="scss">
@use '../style/partials/variables' as *;
.ms-space {
    padding-bottom: 10%;
}
</style>