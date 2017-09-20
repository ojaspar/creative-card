<template>
    <div>
        <P>{{displayText}}</p>
    
    </div>

</template>
<script>
    export default {
        props:{
            displayText: [String],
            containerHeight: {
                type: Number,
                required: true
            }
        } ['displayText', 'containerHeight']
    }

</script>

<style>
    p {
        font-family: 'Tangerine', cursive;
        font-size: 42px;
        line-height: 422px;
        text-shadow: 2px 2px 2px #aaa;
        color: #4d4d4d;
        margin: 5px 0;
        border: 1px dotted grey;
        white-space: pre-line;
        overflow: hidden;
        padding: 10px;
    }

</style>