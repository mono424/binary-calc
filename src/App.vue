<template>
  <div class="wrap">
    <Selector :selected="slide" :items="slides" @select="slide = $event" />
    <ConverterGanzzahlSlide v-if="slide === 0" />
    <ConverterFestkommaSlide v-if="slide === 1" />
  </div>
</template>

<script>
import Selector from './components/Selector.vue'
import ConverterGanzzahlSlide from './components/ConverterGanzzahlSlide.vue'
import ConverterFestkommaSlide from './components/ConverterFestkommaSlide.vue'

export default {
  name: 'App',
  components: {
    ConverterGanzzahlSlide,
    ConverterFestkommaSlide,
    Selector
  },
  data() {
    return {
      slide: 0,
      slides: [
        { key: 0, title: "Ganzzahlen" },
        { key: 1, title: "Festkommazahlen" },
        { key: 2, title: "Fließkommazahlen" },
      ]
    }
  },
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  color: #2c3e50;
  margin-top: 60px;
}

.wrap {
  margin: 10vh auto 0 auto;
  width: 1000px;
  background: white;
  border-radius: 28px;
  box-shadow: 2px 4px 12px rgba(27, 27, 27, 0.25);
  padding: 20px;
  border: 14px solid #2c3e50fd;
}

.input-wrap {
  padding: 20px;
}
</style>
