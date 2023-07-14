<template>
    <div class="">

     
     

      <div class="flex items-center justify-center">
        <div> <!-- Replace bg-gray-200 and p-4 with your desired styles -->
            <img src="../../assets/images/logo.png" class="w-32 ">
        </div>
      </div>



<!--Tabs navigation-->
<ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation" class="flex-auto text-center">
    <a
      href="#tabs-home01"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home01"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home01"
      aria-selected="true"
      >Home</a
    >
  </li>
  <li role="presentation" class="flex-auto text-center">
    <a
      href="#tabs-profile01"
      class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile01"
      role="tab"
      aria-controls="tabs-profile01"
      aria-selected="false"
      >Profile</a
    >
  </li>
  <li role="presentation" class="flex-auto text-center">
    <a
      href="#tabs-messages01"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-messages01"
      role="tab"
      aria-controls="tabs-messages01"
      aria-selected="false"
      >Messages</a
    >
  </li>
  <li role="presentation" class="flex-auto text-center">
    <a
      href="#tabs-contact01"
      class="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
      data-te-toggle="pill"
      data-te-target="#tabs-contact01"
      role="tab"
      aria-controls="tabs-contact01"
      aria-selected="false"
      >Contact</a
    >
  </li>
</ul>

<!--Tabs content-->
<div class="mb-6">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home01"
    role="tabpanel"
    aria-labelledby="tabs-home-tab01"
    data-te-tab-active>
    Tab 1 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile01"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab01">
    Tab 2 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages01"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab01">
    Tab 3 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-contact01"
    role="tabpanel"
    aria-labelledby="tabs-contact-tab01">
    Tab 4 content
  </div>
</div>



</div>

</template>

<style>
.carousel img{
  width: 70px !important;
  height: 70px !important;
}
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

.carousel {
  position: relative;
  width: calc(100% - 100px);
  max-width: 300px;
  left: 50%;
  transform: translate(-50%);
}


.slick-current {
  scale: 1.5;
}
</style>
<script>
import $ from 'jquery';
import 'slick-carousel';
import { onMounted } from "vue";
  import { initTE, Tab  } from "tw-elements";


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

    },
    loadAllCarousels: function() {
      $('.carousel').slick({
        initialSlide: 0,
        centerMode: true,
        slidesToShow: 3,
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

