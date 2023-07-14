<template>
  <div class="grid grid-cols-2" >
<div class="bg-red-600 h-4 w-4"></div>
<div class="bg-red-600 h-4 w-4"></div>

  </div>
    <div class="">








      <div class="traitsContainer">
        <div>
          <p>Bear Traits</p>
        </div>
        <div class="allTraits">
          <!-- Cigar / Pipe -->
          <button class="collapsible">Cigar / Pipe</button>
          <div class="content">
            <div class="carousel">
              <img src="../../assets/images/788.png" class="product-image" alt="Succulent in planter">
              <img src="../../assets/images/43.png" class="product-image" alt="Succulent in planter">
              <img src="../../assets/images/1692.png" class="product-image" alt="Succulent in planter">
              <img src="../../assets/images/2804.png" class="product-image" alt="Succulent in planter">
              <img src="../../assets/images/6481.png" class="product-image" alt="Succulent in planter">
              <img src="../../assets/images/6558.png" class="product-image" alt="Succulent in planter">

            </div>
          </div>
          <!-- Clothes -->
          <button class="collapsible">Clothes</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <!-- Face -->
          <button class="collapsible">Face</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <!-- Facewear -->
          <button class="collapsible">Facewear</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <!-- Facial Hair -->
          <button class="collapsible">Facial Hair</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <!-- Headwear -->
          <button class="collapsible">Headwear</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
          <!-- Species -->
          <button class="collapsible">Species</button>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.</p>
          </div>
        </div>
      </div>
      <div class="bearContainer">
          <div id="bearCigarPipe"></div>
          <div id="bearClothes"></div>
          <div id="bearFace"></div>
          <div id="bearFacewear"></div>
          <div id="bearFacialhair"></div>
          <div id="bearHeadwear"></div>
          <div id="bearSpecies"></div>
      </div>
   
   
   </div>
</template>

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

.slick-slide:not(:last-of-type) {
  margin-right: var(--tile-margin);
}

.next-button {
  position: absolute;
  right: -50px;
  top: 60px;
}

.carousel {
  position: relative;
  width: calc(100% - 100px);
  max-width: 700px;
  margin-left: 50px;
}

.builderContainer {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
}

.traitsContainer {
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.allTraits {
  width: 300px;
}

.allTraits img {
  max-width: 100px;
  max-height: 100px;
}

.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #555;
}

.content {
  padding: 0 18px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
.slick-current {
  scale: 1.2;
}
</style>
<script>
import $ from 'jquery';
import 'slick-carousel';

export default {
  data() {
    return {
      date: new Date(),
      arrowClicked: '',
      arrowClickedTrait: '',
    }
  },
  methods: {
    setListeners: function() {
      let coll = document.getElementsByClassName("collapsible");
      for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    },
    loadAllCarousels: function() {
      $('.carousel').slick({
        initialSlide: 0,
        centerMode: true,
        slidesToShow: 1,
        prevArrow: `<i class="arrow left" data-trait="cigarPipe"></i>`,
        nextArrow: `<i class="arrow right" data-trait="cigarPipe"></i>`,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

    }
  },
  mounted() {
    this.setListeners();
    this.loadAllCarousels();
  }
}

</script>

