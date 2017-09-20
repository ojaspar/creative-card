<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cctext-input @displayTextChanged="textBoxValue1 = $event"></cctext-input>
            <cctext-input @displayTextChanged="textBoxValue2 = $event"></cctext-input>
            <cctext-input @displayTextChanged="textBoxValue3 = $event"></cctext-input>
            {{textBoxValue1}}
            {{textBoxValue2}}
            {{textBoxValue3}}
        </div>
         <div class="col-sm-6 card card-display">
        <cctextOutput :displayText="textBoxValue1"></cctextOutput>
        <cctextOutput :displayText="textBoxValue2"></cctextOutput>
        <cctextOutput :displayText="textBoxValue3"></cctextOutput>
        </div>
    </div>
</template>
<script>
    import textInput from './textInput.vue'
    import textOutput from './textOutput.vue'
    export default {
        data: function(){
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                textBoxValue3: ''
            }
        },
        components: {
            cctextInput: textInput,
            cctextOutput: textOutput
        }
    }
</script>
<style scoped>
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