
 <template>
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <nav-header v-on:pageWasChanged="currentPage = $event"> </nav-header>
        <keep-alive>
          <component v-bind:is="currentPage"></component>
        </keep-alive>
          <cc-footer>
            <p class="text-center">&copy;{{appName}}</p>
              <nav>
                <ul class="nav justify-content-center">
                  <li class="nav-item"><a class="nav-link">Home</a></li>
                  <li class="nav-item"><a class="nav-link">About Us</a></li>
                  <li class="nav-item"><a class="nav-link">Contact</a></li>
                </ul>
              </nav>
          </cc-footer>
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
  import Footer from './components/Footer.vue'
  export default {
    data: function() {
      return {
        currentPage: 'cardFront',
        appName: 'Creative cards'
      }
    },
    components: {
      navHeader: Header,
      cardFront: cardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: cardInsideRight,
      cardBack: cardBack,
      ccFooter: Footer
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
