<template>
  <div class="flex items-center justify-center">
    <!-- TRAITS PICKER LEFT -->
    <div class="traitsPickerRight">
      <div>
        <span class=""></span>
        <span class="">Background</span>
        <span class=""></span>
      </div>
      <div>
        <span class=""></span>
        <span class="">Species</span>
        <span class=""></span>
      </div>
      <div>
        <span class=""></span>
        <span class="">Face</span>
        <span class=""></span>
      </div>
      <div>
        <span class=""></span>
        <span class="">Facial Hair</span>
        <span class=""></span>
      </div>
    </div>

    <div class="w-80 h-80 relative" id="bearBuilder">
      <div class="absolute left-0 w-full h-full z-10" id="backgroundBuilderCanvas" data-trait="background"></div>
      <div class="absolute left-0 w-full h-full z-20" id="speciesBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-30" id="faceBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-40" id="clothesBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-50" id="facialhairBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-60" id="facewearBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-70" id="headwearBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-80" id="cigarpipeBuilderCanvas"></div>
    </div>

    <!-- TRAITS PICKER RIGHT -->
    <div class="traitsPickerRight">
      <div>Clothes</div>
      <div>Headwear</div>
      <div>Facewear</div>
      <div>Cigar/Pipe</div>
    </div>
</div>

</template>

<script>
import $ from 'jquery';
import allImagesSVG from '../../assets/allConvertedSVG';

export default {
  data() {
    return {
      date: new Date(),
      allImagesSVG: allImagesSVG
    }
  },
  methods: {
    setListeners: function () {
      console.log('--');
      console.log(allImagesSVG.allImagesSVG.logos);
    },

  },
  mounted() {
    this.setListeners();
  }
}

</script>


<style></style>