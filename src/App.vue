
 <template>
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <nav-header v-on:pageWasChanged="currentPage = $event"> </nav-header>
      <keep-alive>
        <component v-bind:is="currentPage"></component>
      </keep-alive>
      </div>
    </div>
  
  </div>

</template>

<script>
  import Header from './components/Header.vue'
  import cardFront from './components/card/cardFront.vue'
  import CardInsideLeft from './components/card/CardInsideLeft.vue'
  import cardInsideRight from './components/card/cardInsideRight.vue'
  import cardBack from './components/card/cardBack.vue'
  export default {
    data: function() {
      return {
        currentPage: 'cardFront'
      }
    },
    components: {
      navHeader: Header,
      cardFront: cardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: cardInsideRight,
      cardBack: cardBack
    }
  }
</script>

<style>
body {
  font-family: Verdana, Geneva, sans-serif;
  color: #333;

}
a {
  cusor: pointer;
}
</style>
