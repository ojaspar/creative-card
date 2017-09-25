<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload>
            <ccsection-completed></ccsection-completed>
        </div>
         <div class="col-sm-6 card card-display">
            <cc-image-output :displayImage="imageName" :containerHeight="370"></cc-image-output>              
        </div>
    </div>
</template>
<script>
    import ImageUpload from './ImageUpload.vue'
    import ImageOutput from './ImageOutput.vue'
    import sectionCompleted from './sectionCompleted.vue'

    export default {
        data: function () {
            return {
                textBoxValue1: '',
                textBoxValue2: '',
                
            }
        },
        components: {
            ccImageUpload:ImageUpload,
            ccImageOutput:ImageOutput,
            ccsectionCompleted: sectionCompleted
        }
    }
</script>