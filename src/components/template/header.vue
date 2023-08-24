<template>
     <div class="flex items-center justify-center">
      <div class="menuIcon bearsHomeLogo hover:cursor-pointer">
        <a href="https://www.bearsdeluxe.io/" target="_blank"> <img src="/images/logoB.png"></a>
      </div>
      <a href="https://opensea.io/collection/bears-deluxe" target="_blank">
        <button
    type="button"
    class="menuIcon mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-[#f3c474] px-5 py-2 text-base text-white shadow-sm hover:bg-[#f7b33f] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
    :style="{ backgroundImage: 'url(' + allImagesSVG.allImagesSVG.logos.opensea + ')', backgroundSize: '40px', backgroundRepeat: 'no-repeat' }"
  ></button>
</a>
  <a href="https://discord.com/invite/bearsdeluxe" target="_blank">
    <button type="button"
      class="menuIcon mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-[#00BF63] px-5 py-2 text-base text-white shadow-sm hover:bg-[#1fa564] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      :style="{ backgroundImage: 'url(' + allImagesSVG.allImagesSVG.logos.discord + ')', backgroundSize: '25px', backgroundRepeat: 'no-repeat' }"></button>
    </a>

    <div> <!-- Replace bg-gray-200 and p-4 with your desired styles -->
      <img src="/images/logo.png" class="w-32 bearLogo">
    </div>
    <a href="https://twitter.com/bears_deluxe" target="_blank">
    <button type="button"
      class="menuIcon mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-purple-500 px-5 py-2 text-base text-white shadow-sm hover:bg-purple-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('/images/twitter_logo.png'); background-size: 25px; background-repeat: no-repeat;"></button>
   </a>
   <a href="https://www.instagram.com/bearsdeluxe/" target="_blank">
    <button type="button"
      class="menuIcon mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-[#FF3131] px-5 py-2 text-base text-white shadow-sm hover:bg-[#b82525] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('/images/instagram_logo.png'); background-size: 25px; background-repeat: no-repeat;"></button>
   </a>
   <a href="https://merch.bearsdeluxe.io/" target="_blank">
      <button type="button"
      class="menuIcon mt-3 mr-3 flex align-items-center h-10 bg-center rounded-full border border-transparent bg-[#FD904C] px-5 py-2 text-base text-white shadow-sm hover:bg-[#dd6e28] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      style="background-image: url('/images/cart.png'); background-size: 26px; background-repeat: no-repeat;"></button>
  </a>
  </div>
  <div class="px-4 py-3 sm:px-6 flex justify-center">
      </diV>
</template>

<script>
import allImagesSVG from '../../assets/allConvertedSVG';
export default {
    data() {
        return {
            date: new Date(),
            allImagesSVG: allImagesSVG
        };
    },
};
</script>

<style>
.bearLogo{
  margin-top: 40px;
  width: 400px
}
.menuIcon{
  margin-top: 190px;
}
.bearsHomeLogo{
  margin-top: 199px;
  width: 60px;
  height: 60px;
}
</style>