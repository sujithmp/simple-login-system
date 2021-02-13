<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        
        :is-full-page="fullPage"></loading>
        
        <!-- <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button> -->
    </div>
</template>
 
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        props:{
            
        },
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        
    }
</script> 