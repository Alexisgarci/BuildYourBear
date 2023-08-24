<template>
    <div>
      <div class="builderContainer">
        
        <div class="traitsContainer">
          <div class="navigationHolder">
            <div class="navigationContainer">
              <div @click="prevColor(this.currentTrait)" class="leftAlign pointer">
                <div class="arrow arrowLeft">
                  <i class="fas fa-arrow-left"></i>
                </div>
              </div>
              
              <div class="centerAlign">
                <div class="currentTrait">{{currentTraitName}}</div>
              </div>

              <div @click="nextColor(this.currentTrait)" class="rightAlig pointer">
                <div class="arrow arrowRight">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
        </div>
          <div class="traitsSelection">
            <div @click="setCurrentTrait" class="traitSelector pointer highlightedSelector" id="speciesSelector" data-trait="species" data-traitName="Specie"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer" id="faceSelector" data-trait="face" data-traitName="Face"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer" id="clothesSelector" data-trait="clothes" data-traitName="Clothes"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer"  id="facialhairSelector" data-trait="facialhair" data-traitName="Facial Hair"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer" id="facewearSelector" data-trait="facewear" data-traitName="Face Wear"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer" id="headwearSelector" data-trait="headwear" data-traitName="Head Wear"></div>
            <div @click="setCurrentTrait" class="traitSelector pointer" id="cigarpipeSelector" data-trait="cigarpipe" data-traitName="Cigar / Pipe"></div>
            <div @mouseenter="checkTraitToRemove('enter')" @click="removeTrait" class="traitSelector pointer" id="removeTrait" > </div>
            <div @mouseleave="checkTraitToRemove('leave')" class="traitSelector pointer" id="removeTraitBlocker" style="display:none"> You need a Bear!</div>
          </div>

        </div>


        <div> 
          <div class="builderPreview">
            <div class="relative" id="bearBuilder">
              <div class="absolute left-0 w-full h-full  itsTrait" id="backgroundBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="speciesBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="faceBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="headwearUnderBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="clothesBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="facialhairBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="facewearBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="headwearBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="screenfacesBuilderCanvas"></div>
              <div class="absolute left-0 w-full h-full  itsTrait" id="cigarpipeBuilderCanvas"></div>
            </div>
            <canvas style="display: none;" :width="canvasWidth" :height="canvasHeight" class="bearCanvas" ref="bearCanvas" ></canvas>
          </div>
        </div>

        <div>
          <div @click="downloadCanvas" > <img id="downloadBTN" src="/images/downloadbt.png" alt="Save your Bear fam!"> </div>
        </div>
      </div>





    </div>
</template>


<script>
import allImagesSVG from '../../assets/allConvertedSVG';

export default {
  data() {
    return {
      newUpdate: '',
      backgroundCanvas : '',
      speciesCanvas : '',
      faceCanvas : '',
      headwearunderCanvas: '',
      clothesCanvas : '',
      facialhairCanvas : '',
      facewearCanvas: '',
      headwearCanvas: '',
      screenfacesCanvas: '',
      cigarpipeCanvas: '',
      canvasContext: null,
      canvasWidth: 400,
      canvasHeight: 400,
      date: new Date(),
      allImagesSVG: allImagesSVG,
      traits: allImagesSVG.allImagesSVG.traits,
      headwearUnder: allImagesSVG.allImagesSVG.headwearUnder,
      notebookHead: false,
      currentTrait: 'species',
      currentTraitName: 'Species',
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
    }
  },
  methods: {
    setCurrentTrait(event){
      const targetElement = document.querySelector('.highlightedSelector');
      if (targetElement){
        targetElement.classList.remove('highlightedSelector');
      }

      event.target.classList.add('highlightedSelector');
      this.currentTrait = event.target.getAttribute('data-trait');
      this.currentTraitName = event.target.getAttribute('data-traitName');
    },
    prevColor() {
       if (this.notebookHead && this.currentTrait === 'face'){
         this.traits = allImagesSVG.allImagesSVG.faceScreens
       }else{
         this.traits = allImagesSVG.allImagesSVG.traits
       }
      const currentIndex = this.currentIndex[this.currentTrait];
      const traitLength = Object.keys(this.traits[this.currentTrait]).length;
      if (currentIndex > 1) {
        this.currentIndex[this.currentTrait] = String(parseInt(currentIndex) - 1);
      } else {
        this.currentIndex[this.currentTrait] = String(traitLength);
      }
      this.applyTraits();
    },
    nextColor() {
      if (this.notebookHead && this.currentTrait === 'face'){
         this.traits = allImagesSVG.allImagesSVG.faceScreens
       }else{
         this.traits = allImagesSVG.allImagesSVG.traits
       }
      const currentIndex = this.currentIndex[this.currentTrait];
      const traitLength = Object.keys(this.traits[this.currentTrait]).length;

      if (currentIndex < traitLength) {
        this.currentIndex[this.currentTrait] = String(parseInt(currentIndex) + 1);
      } else {
        this.currentIndex[this.currentTrait] = "1"
      }
      this.applyTraits();
     
    },
    applyTraits(){
      this.newUpdate = new Date();
      const traitCanvas = document.getElementById(this.currentTrait + 'BuilderCanvas');
      traitCanvas.style.backgroundImage = 'none';
      this.headwearunderCanvas.style.backgroundImage = 'none';
      
      if(this.currentTrait === 'species'){
        this.setBackgroundTrait()
      }
      if (this.currentTrait === 'headwear'){
        if (this.currentIndex[this.currentTrait] > 31){
          this.notebookHead = true  
        }
        if (this.currentIndex[this.currentTrait] < 32){
          this.screenfacesCanvas.style.backgroundImage = 'none'
          this.notebookHead = false
        }
 
            
        if (this.headwearUnder.includes(this.currentIndex[this.currentTrait])) {
          this.headwearunderCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}.png')`;
          this.headwearunderCanvas.style.backgroundSize = 'cover';
        }
        if(this.currentIndex[this.currentTrait] == 16 ||
            this.currentIndex[this.currentTrait] == 17 ||
            this.currentIndex[this.currentTrait] == 18 ||
            this.currentIndex[this.currentTrait] == 23){
              this.headwearunderCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}c.png')`;
            traitCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}.png')`;
            traitCanvas.style.backgroundSize = 'cover';
        }else{
          traitCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}.png')`;
          traitCanvas.style.backgroundSize = 'cover';
        }  
      }
      if (this.currentTrait === 'face' && this.notebookHead && this.currentIndex[this.currentTrait] >= 66 && this.currentIndex[this.currentTrait] <= 68){
        this.screenfacesCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}.png')`;
        this.screenfacesCanvas.style.backgroundSize = 'cover';
      }else{
        if(!this.notebookHead){
          this.screenfacesCanvas.style.backgroundImage = 'none'
        }

        traitCanvas.style.backgroundImage = `url('images/traits/${this.currentTrait}/${this.traits[this.currentTrait][this.currentIndex[this.currentTrait]]}.png')`;
        traitCanvas.style.backgroundSize = 'cover';
      } 
    },
    removeTrait() {
      if (this.currentTrait !== 'species'){
        if(this.currentTrait === 'headwear'){
          this.headwearunderCanvas.style.backgroundImage = ''
        }
       
        const traitCanvas = document.getElementById(this.currentTrait + 'BuilderCanvas');
        traitCanvas.style.backgroundImage = 'none';
      }
      this.newUpdate = new Date();
    }, 
    checkTraitToRemove(arg){
      if (arg === 'enter' && this.currentTrait === 'species'){
        const removeTrait = document.getElementById('removeTrait')
        const removeTraitBlocker = document.getElementById('removeTraitBlocker')
        removeTrait.style.display = 'none'
        removeTraitBlocker.style.display = 'flex'
      }
      if (arg === 'leave'){
        const removeTrait = document.getElementById('removeTrait')
        const removeTraitBlocker = document.getElementById('removeTraitBlocker')
        removeTrait.style.display = 'block'
        removeTraitBlocker.style.display = 'none'
      }
    
    },
    setBackgroundTrait(){
      let backgroundTrait = null;
      switch (this.currentIndex[this.currentTrait])
      {
        case '1':
        backgroundTrait = '02.png'
          break;
        case '2':
        backgroundTrait = '01.png'
          break;
        case '3':
        backgroundTrait = '03.png'
          break;
        case '4':
        backgroundTrait = '04.png'
          break;
        case '5':
        backgroundTrait = '05.png'
          break;
        default:
        backgroundTrait = '01.png'
      }
      const traitCanvas = document.getElementById('backgroundBuilderCanvas');
      traitCanvas.style.backgroundImage = `url('images/traits/background/${backgroundTrait}')`;
      traitCanvas.style.backgroundSize = 'cover';
    },
    drawImagesToCanvas() {
      const canvas = this.$refs.bearCanvas;
      const ctx = canvas.getContext("2d");
      
      const divs = document.querySelectorAll(".builderPreview .relative > div");
      divs.forEach((div, index) => {
        const backgroundImage = getComputedStyle(div).backgroundImage;
        const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, "$1");
        
        const image = new Image();
        // image.crossOrigin = "anonymous";
        image.src = imageUrl;
        
        image.onload = () => {
          const zIndex = parseInt(getComputedStyle(div).zIndex, 10);
          ctx.drawImage(image, 0, 0, this.canvasWidth, this.canvasHeight);
          
        };
      });
    },
    downloadCanvas() {
      const canvas = this.$refs.bearCanvas;
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "YourBearMF.png";
      link.click();
    }
  },
  watch:{
    newUpdate(){
      this.drawImagesToCanvas();
    }
  },
  mounted() {

    this.backgroundCanvas = document.getElementById("backgroundBuilderCanvas");
    this.speciesCanvas = document.getElementById("speciesBuilderCanvas");
    this.faceCanvas = document.getElementById("faceBuilderCanvas");
    this.headwearunderCanvas = document.getElementById("headwearUnderBuilderCanvas");
    this.clothesCanvas = document.getElementById("clothesBuilderCanvas");
    this.facialhairCanvas = document.getElementById("facialhairBuilderCanvas");
    this.facewearCanvas = document.getElementById("facewearBuilderCanvas");
    this.headwearCanvas = document.getElementById("headwearBuilderCanvas");
    this.screenfacesCanvas = document.getElementById("screenfacesBuilderCanvas");
    this.cigarpipeCanvas = document.getElementById("cigarpipeBuilderCanvas");



      
  },
}

</script>



<style scoped>
.itsTrait{
  background-size: cover;
  background-position: center;
}
#backgroundBuilderCanvas{
  background-image: url("/images/traits/background/02.png");
  background-position: center;
  background-size: cover;
}

#speciesBuilderCanvas{
  background-image: url(/images/traits/species/01.png);
  background-position: center;
  background-size: cover;
}
body{
  transition: background-color 20s ease;
}
#downloadBTN{
  cursor: pointer;
  width:200px;
  height: 90px;
}
#downloadBTN:active{
  transform: scale(-0.97) rotate(180deg)
}
.builderPreview{
  width: 300px;
  height: 300px;
}
#bearBuilder{
  width: 300px;
  height: 300px;
  border:solid 17px #41403E;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}
.pointer{

 cursor: pointer 
}
.traitSelector{
  width: 75px;
  height: 75px;
  background-color: #e4e4e4;
  border-radius: 3px;
  justify-self: center;
  align-self: center; 
    background-size: cover;
  background-position: center;
  border-color: black;
}
.traitSelector:hover{
  background-color: #0CC0DF;
}
#speciesSelector{
    background-image: url(/images/traits/species/02.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 11px;
    background-position-x: 16px;
}

#faceSelector{
  background-image: url(/images/traits/face/01.png);
    background-position: center;
    background-position-y: -7px;
    background-position-x: 3px;
}
#clothesSelector{
  background-image: url(/images/traits/clothes/02.png);
  background-position: center;
    background-position-y: -27px;
    background-position-x: 2px;
}
#facialhairSelector{
  background-image: url(/images/traits/facialhair/05.png);
  background-position: center;
    background-position-y: -9px;
    background-position-x: 4px;
}
#facewearSelector{
  background-image: url(/images/traits/facewear/01.png);
  background-position: center;
    background-position-y: 0px;
    background-position-x: 3px;
}
#headwearSelector{
  background-image: url(/images/traits/headwear/20.png);
  background-position: center;
    background-position-y: 14px;
    background-position-x: 4px;
}
#cigarpipeSelector{
  background-image: url(/images/traits/cigarpipe/02.png);
  background-position: center;
    background-position-y: -13px;
    background-position-x: 21px;
}

.currentTrait{
  color:white;
  font-size: 2.3rem;
}
.traitsSelection{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;

}
.traitPreview{
  background-color: red;
  width:150px;
  height: 150px;
}
.arrow{
  background-color: #f7f1f1;
  margin: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.navigationContainer {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  background-color: #0CC0DF;
  margin: 20px;
border:solid 4px #333333;
border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  color: darkblue;
  align-items: center;
  background-image: url('/images/frame1.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}

.leftAlign {
  display: flex;
  justify-content: flex-start;
  
}

.centerAlign {
  display: flex;
  justify-content: center;
}

.rightAlign {
  display: flex;
  justify-content: flex-end;
}
.traitsContainer{
    background-color: #fff;
    margin: 15px;
    border-radius: 3px;
    display: grid;
    grid-template-rows: 0.2fr 1fr;
    width: 400px;
    height: 310px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .builderContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 900px;
    height: 47vh;
    background-color: #d8edee;
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border:solid 15px #333333;
border-radius:15px 225px 15px 255px/255px 15px 225px 15px;
  }
  .builderContainer > :nth-child(3) {
  grid-column: 1 / span 2;
  height: 30px;
}
.arrow:hover {
  background-color: #ffffff;
  border: solid 2px black;
}
.arrow:active {
  transform: scale(-0.8) rotate(180deg)
}
.arrowLeft{
  margin-left: 44px;
}
.highlightedSelector{
  background-color: #0CC0DF;
  border:solid 2px #0b0c0c;
}
#removeTrait{
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 3rem;
  background-image: url(/images/delete.svg);
  background-position: center;
  background-size: 50px;
  background-repeat: no-repeat;
}
#removeTrait:hover{
  background-color: #f78181;
}
#removeTrait:active{
  border:solid 2px red
}
#removeTraitBlocker{
  opacity: 1 !important;
  background-color: rgb(211, 59, 59) !important;
  cursor: not-allowed;
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  align-items: center;

}
</style>