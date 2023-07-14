<template>
  <div class="flex items-center justify-center">
    <div> <!-- Replace bg-gray-200 and p-4 with your desired styles -->
      <img src="../../assets/images/logo.png" class="w-32 ">
    </div>
  </div>
  <div class="px-4 py-3 sm:px-6 flex justify-center">
    <button
    type="button"
    class="mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
    :style="{ backgroundImage: 'url(' + allImagesSVG.allImagesSVG.logos.opensea + ')', backgroundSize: '40px', backgroundRepeat: 'no-repeat' }"
  ></button>
    <button type="button"
      class="mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      :style="{ backgroundImage: 'url(' + allImagesSVG.allImagesSVG.logos.discord + ')', backgroundSize: '25px', backgroundRepeat: 'no-repeat' }"></button>
    <button type="button"
      class="mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('../src/assets/images/twitter_logo.png'); background-size: 25px; background-repeat: no-repeat;"></button>
    <button type="button"
      class="mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('../src/assets/images/instagram_logo.png'); background-size: 25px; background-repeat: no-repeat;"></button>
    <button type="button"
      class="mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('../src/assets/images/cart.png'); background-size: 26px; background-repeat: no-repeat;"></button>
  </diV>

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