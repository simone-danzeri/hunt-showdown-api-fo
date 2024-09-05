<script>
    export default {
        name: 'AppSidebar'
    }
</script>

<template>
    <section class="sidebar">
        <div class="d-flex">
            <ul class="ms-writing">
                <li>Maps</li>
                <li>Bosses</li>
                <li>Enemies</li>
            </ul>
        </div>
    </section>
</template>


<style scoped lang="scss">
    @use '../style/partials/variables' as *;
    .sidebar{
        // DEBUGG
        background-color: pink;
        // DEBUGG
        position: absolute;
        top: 30%;
        left: 0%;
        width: 15%;
        ul{
            li{
                font-size: 1.3rem;
                padding: 15px 0px;
            }
        }
    }
</style>