<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cctext-input @displayTextChanged="textBoxValue1 = $event"></cctext-input>
            <cctext-input @displayTextChanged="textBoxValue2 = $event"></cctext-input>
            

        </div>
         <div class="col-sm-6 card card-display">
            <cctextOutput :displayText="textBoxValue1" :containerHeight="370"></cctextOutput>        
            <cctextOutput :displayText="textBoxValue2" :containerHeight="370"></cctextOutput>        
                  
        </div>
    </div>
</template>
<script>
    import textInput from './textInput.vue'
    import textOutput from './textOutput.vue'

    export default {
        data: function () {
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                
            }
        },
        components: {
            cctextInput:textInput,
            cctextOutput:textOutput
        }
    }
</script>