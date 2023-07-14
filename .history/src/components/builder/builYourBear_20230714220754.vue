<template>
  <div class="flex items-center justify-center">
    <!-- TRAITS PICKER LEFT -->
    <div class="traitsPickerRight">
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Background</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Species</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Face</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Facial Hair</span>
        <div class="arrow arrow--right">
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
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Clothes</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Headwear</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Facewear</span>
        <div class="arrow arrow--right">
          <span>Next</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center justify-center">
        <div class="arrow arrow--left">
          <span>Prev</span>
        </div>
        <span class="">Cigar/Pipe</span>
        <div class="arrow arrow--right">
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
  width: 3em;
  opacity: 0;
  transition: opacity 0.3s 0s;
  padding: 0 0.5em;
}

.arrow:hover span {
  opacity: 1;
  transition: opacity 0.3s 0.1s;
}

 .arrow:before {
  content: '';
  display: block;
  border: solid red;
  border-width: var(--width) var(--width) 0 0;
  position: absolute;
  top: 4px;
  width: var(--size);
  height: var(--size);
}

 .arrow.arrow--left:before {
  transform: rotate(-135deg);
  right: 0;
  transition: right 0.3s 0.2s;
}

.arrow.arrow--left:hover:before {
  right: 100%;
  transition: right 0.3s;
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
  left: 100%;
  transition: left 0.3s;
}

.arrow:hover {
  transform: none;
}
</style>