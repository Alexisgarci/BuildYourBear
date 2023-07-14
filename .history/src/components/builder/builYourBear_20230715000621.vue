<template>
  <div class="flex items-center justify-center">
    <!-- TRAITS PICKER LEFT -->
    <div class="traitsPickerRight grid grid-flow-row gap-4 row">


      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('background')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('background')"
              @mouseenter="isHovered.background = true" @mouseleave="isHovered.background = false">
          {{ isHovered.background ? 'Remove' : 'Background' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('background')">
          <span>Next</span>
        </div>
      </div>



      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('species')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('species')"
              @mouseenter="isHovered.species = true" @mouseleave="isHovered.species = false">
          {{ isHovered.species ? 'Remove' : 'Species' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('species')">
          <span>Next</span>
        </div>
      </div>




      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('face')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('face')"
              @mouseenter="isHovered.face = true" @mouseleave="isHovered.face = false">
          {{ isHovered.face ? 'Remove' : 'Face' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('face')">
          <span>Next</span>
        </div>
      </div>




      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('facialhair')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('facialhair')"
              @mouseenter="isHovered.facialhair = true" @mouseleave="isHovered.facialhair = false">
          {{ isHovered.facialhair ? 'Remove' : 'Facial Hair' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('facialhair')">
          <span>Next</span>
        </div>
      </div>

    </div>

    <div class="w-80 h-80 relative" id="bearBuilder">
      <div class="absolute left-0 w-full h-full z-10" id="backgroundBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-11" id="speciesBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-12" id="faceBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-13" id="clothesBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-14" id="facialhairBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-15" id="facewearBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-16" id="headwearBuilderCanvas"></div>
      <div class="absolute left-0 w-full h-full z-17" id="cigarpipeBuilderCanvas"></div>
    </div>

    <!-- TRAITS PICKER RIGHT -->
    <div class="traitsPickerRight grid grid-flow-row gap-4 row">

      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('clothes')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('clothes')"
              @mouseenter="isHovered.clothes = true" @mouseleave="isHovered.clothes = false">
          {{ isHovered.clothes ? 'Remove' : 'Clothes' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('clothes')">
          <span>Next</span>
        </div>
      </div>



      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('headwear')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('headwear')"
              @mouseenter="isHovered.headwear = true" @mouseleave="isHovered.headwear = false">
          {{ isHovered.headwear ? 'Remove' : 'Headwear' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('headwear')">
          <span>Next</span>
        </div>
      </div>




      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('facewear')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('facewear')"
              @mouseenter="isHovered.facewear = true" @mouseleave="isHovered.facewear = false">
          {{ isHovered.facewear ? 'Remove' : 'Facewear' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('facewear')">
          <span>Next</span>
        </div>
      </div>




      <div class="grid grid-cols-3 items-center justify-center text-center">
        <div class="arrow arrow--left" @click="prevColor('cigarpipe')">
          <span>Prev</span>
        </div>
        <span class="cursor-pointer hover:text-red-500" @click="removeTrait('cigarpipe')"
              @mouseenter="isHovered.cigarpipe = true" @mouseleave="isHovered.cigarpipe = false">
          {{ isHovered.cigarpipe ? 'Remove' : 'Cigarpipe' }}
        </span>
        <div class="arrow arrow--right" @click="nextColor('cigarpipe')">
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
      isHovered: false,
      allImagesSVG: allImagesSVG,
      traits: allImagesSVG.allImagesSVG.traits,
      currentIndex: {
        background: "1",
        species: "1",
        face: "1",
        facialhair: "1",
        clothes: "1",
        headwear: "1",
        facewear: "1",
        cigarpipe: "1",
      },
      isHovered: {
        background: false,
        species: false,
        face: false,
        facialhair: false,
        clothes: false,
        headwear: false,
        facewear: false,
        cigarpipe: false
      },
    }
  },
  methods: {
    setListeners: function () {

    },
    prevColor(trait) {
      const currentIndex = this.currentIndex[trait];
      const traitLength = Object.keys(this.traits[trait]).length;

      if (currentIndex > 1) {
        this.currentIndex[trait] = String(parseInt(currentIndex) - 1);
      } else {
        this.currentIndex[trait] = String(traitLength);
      }

      const traitCanvas = document.getElementById(trait + 'BuilderCanvas');
            traitCanvas.style.backgroundImage = `url('../src/assets/images/traits/${trait}/${this.traits[trait][this.currentIndex[trait]]}.png')`;
            traitCanvas.style.backgroundSize = 'cover';
    },
    nextColor(trait) {
      const currentIndex = this.currentIndex[trait];
      const traitLength = Object.keys(this.traits[trait]).length;

      if (currentIndex < traitLength) {
        this.currentIndex[trait] = String(parseInt(currentIndex) + 1);
      } else {
        this.currentIndex[trait] = "1";
      }

      const traitCanvas = document.getElementById(trait + 'BuilderCanvas');
            traitCanvas.style.backgroundImage = `url('../src/assets/images/traits/${trait}/${this.traits[trait][this.currentIndex[trait]]}.png')`;
            traitCanvas.style.backgroundSize = 'cover';
    },
    removeTrait: function(trait){
      const traitCanvas = document.getElementById(trait + 'BuilderCanvas');
      traitCanvas.style.backgroundImage = '';
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
width: 2px;
size: 2px;
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