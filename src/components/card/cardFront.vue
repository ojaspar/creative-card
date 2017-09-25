<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">

            <cctext-input @displayTextChanged="textBoxValue1 = $event"></cctext-input>
            <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr>
            <cctext-input @displayTextChanged="textBoxValue2 = $event"></cctext-input>
            <cctext-input @displayTextChanged="textBoxValue3 = $event"></cctext-input>
            <ccsection-completed></ccsection-completed>

            {{textBoxValue1}}
            {{textBoxValue2}}
            {{textBoxValue3}}
        </div>
         <div class="col-sm-6 card card-display">
         
            <cctextOutput :displayText="textBoxValue1" :containerHeight="130"></cctextOutput>
            <cc-image-output :displayImage="imageName" :containerHeight="350" :clearImageProp="clearImage"></cc-image-output>
            <cctextOutput :displayText="textBoxValue2" :containerHeight="130"></cctextOutput>
            <cctextOutput :displayText="textBoxValue3" :containerHeight="130"></cctextOutput>
        </div>
    </div>
</template>
<script>
    import textInput from './textInput.vue'
    import textOutput from './textOutput.vue'
    import ImageUpload from './ImageUpload.vue'
    import ImageOutput from './ImageOutput.vue'
    import sectionCompleted from './sectionCompleted.vue'

    export default {
        data: function(){
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                textBoxValue3: '',
                imageName: ''
            }
        },
        methods: {
            clearImage: function () {
                if(this.imageName != ''){
               this.imageName = 'Dubem 20170214_090429.jpg' 
                }
            }
        },
        components: {
            cctextInput: textInput,
            cctextOutput: textOutput,
            ccImageUpload: ImageUpload,
            ccImageOutput: ImageOutput,
            ccsectionCompleted: sectionCompleted
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