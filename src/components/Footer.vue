<template>
    <footer>
        <slot>
            <p>Footer text</p>        
        </slot>
    </footer>
</template>

<script>
    export default {
    data: function() {
      return {
        appName: '&copy;Creative Cards'
      }
    }
 }
</script>