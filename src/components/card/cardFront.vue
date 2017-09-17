<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cctext-input></cctext-input>
        </div>
         <div class="col-sm-6 card card-display">
        
        </div>
    </div>
</template>
<script>
    import textInput from './textInput.vue'
    export default{
        components: {
          cctextInput: textInput  
        }
    } 
</script>
<style>
    .edit-area{
        background: #d2f9f9;
        padding:20px;
        height:800px;
    }
    .card-display {
        height: 800px;
        padding:20px;
    }
</style>