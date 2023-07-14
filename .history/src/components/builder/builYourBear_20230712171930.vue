<template>
    <div class="">



      <div class="flex items-center justify-center">
        <div> <!-- Replace bg-gray-200 and p-4 with your desired styles -->
            <img src="../../assets/images/logo.png" class="w-32 ">
        </div>
        <diV>
          <button type="button" class="mt-3 mr-3 flex justify-center align-items-center h-10 bg-cover bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:cursor-pointer hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAACXBIWXMAACxLAAAsSwGlPZapAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuZGE0YTdlNWVmLCAyMDIyLzExLzIyLTEzOjUwOjA3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDItMDdUMTY6Mzg6NDAtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTAyLTA3VDE3OjM0OjI0LTA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAyLTA3VDE3OjM0OjI0LTA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYmUzYWQ1YS04MDM2LTRmNjQtOGQwOS03YWQ3OWU3MjYyZmEiIHhtcE1NOkRvY3VtZW50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&quot;); background-size: 45px;"></button>
        </diV>
      </div>






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

