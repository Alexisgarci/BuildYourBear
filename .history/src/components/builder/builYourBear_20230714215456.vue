<template>


  <div class="flex items-center justify-center">
    <!-- TRAITS PICKER LEFT -->
    <div class="traitsPickerRight">
      <div><div class="arrow">Background</div>
      <div>Species</div>
      <div>Face</div>
      <div>Facial Hair</div>
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
  <DIV class="traitsPickerRight">
    <div>Clothes</div>
      <div>Headwear</div>
      <div>Facewear</div>
      <div>Cigar/Pipe</div>
  </DIV>
  </DIV>
  </DIV>
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
    setListeners: function(){
      console.log('--');
      console.log(allImagesSVG.allImagesSVG.logos);
    },
   
  },
  mounted() {
    this.setListeners();
  }
}

</script>


<style>

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 40%;
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.right {
  right: -20%;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  left: -20%;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.arrow:hover {
  border: solid white;
  border-width: 0 3px 3px 0;
}

.arrow:active {
  scale: .8;
}



.previous-button {
  position: absolute;
  left: -50px;
  top: 50px;
}



.next-button {
  position: absolute;
  right: -50px;
  top: 60px;
}
.slickCommon{
  width: 500px;
}

</style>