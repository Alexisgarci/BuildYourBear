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
/* Add your CSS styles here */
</style>