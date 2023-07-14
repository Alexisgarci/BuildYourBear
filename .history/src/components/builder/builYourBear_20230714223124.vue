<template>
  <div class="flex items-center justify-center">
    <!-- TRAITS PICKER LEFT -->
    <div class="traitsPickerRight">
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" :click="prevColor('background')">
          <span>Prev</span>
        </div>
        <span class="">Background</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="background">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="species">
          <span>Prev</span>
        </div>
        <span class="">Species</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="species">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="face">
          <span>Prev</span>
        </div>
        <span class="">Face</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="face">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="facialhair">
          <span>Prev</span>
        </div>
        <span class="">Facial Hair</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="facialhair">
          <span>Next</span>
        </div>
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
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="clothes">
          <span>Prev</span>
        </div>
        <span class="">Clothes</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="clothes">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="headwear">
          <span>Prev</span>
        </div>
        <span class="">Headwear</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="headwear">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="facewear">
          <span>Prev</span>
        </div>
        <span class="">Facewear</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="facewear">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" data-direction="left" data-trait="cigarpipe">
          <span>Prev</span>
        </div>
        <span class="">Cigar/Pipe</span>
        <div class="arrow arrow--right" data-direction="right" data-trait="cigarpipe">
          <span>Next</span>
        </div>
      </div>
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

    },
    prevColor: function(trait) {
      console.log(trait);
    }

  },
  mounted() {
    this.setListeners();
  }
}

</script>


<style>
.arrow:active{
  color:blue
}

.arrow {
  --size: 10px;
  --width: 2px;
  color: red;
  cursor: pointer;
  display: block;
  align-items: flex-start;
  text-transform: uppercase;
  position: relative;
  transition: transform 0.3s;
}

.arrow span {
  display: block;
  width: 1px;
  opacity: 0;
  transition: opacity 0.3s 0s;
  padding: 0 0.5em;
  font-size: 10px;
  margin: 0;
}

.arrow:hover span {
  opacity: 1;
  transition: opacity 0.3s 0.1s;
}

 .arrow:before {
  content: '';
  display: block;
  border: solid black;
  border-width: var(--width) var(--width) 0 0;
  position: absolute;
  top: 4px;
  width: 10px;
  height: 10px;
}

.arrow.arrow--left span{
  left: 55%;
    position: relative;
}
 .arrow.arrow--left:before {
  transform: rotate(-135deg);
  right: 0;
  transition: right 0.3s 0.2s;
}

.arrow.arrow--left:hover:before {
  right: 40%;
  transition: right 0.3s;
  border-color: red;
}

.arrow.arrow--right {
  text-align: right;
}

 .arrow.arrow--right:before {
  left: 0;
  transform: rotate(45deg);
  transition: left 0.3s 0.2s;
}

.arrow.arrow--right:hover:before {
  left: 40%;
  transition: left 0.3s;
  border-color: red;

}

.arrow:hover {
  transform: none;
}
</style>