<template>
    <div class="footer">
        <div class="info">
            <p>Welcome to the Build-Your-Bear Workshop! The traits and rule sets of the original Bears Deluxe collection have been embedded into the Workshop to allow everyone to create non-pixel Bears! Recreate your own Bears or try to assemble one that doesn't currently exist! Use the X button to remove traits and the
                Bear symbol on the top left to learn more about the original collection.
                The Build-Your-Bear Workshop is brought to you by community members <a target="_blank" href="https://twitter.com/asasiyyuneth">@asasiyyun.eth</a> and <a target="_blank" href="https://twitter.com/RippyDave">@rippydave.eth</a>.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: new Date(),
        };
    },
};
</script>

<style>
.footer{
   position: relative;
   top: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info{
    color: white;
    font-size: 1rem;
    letter-spacing: 1px;
    line-height: 1.4;
    width:50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
}
.info a {
    color:#0dc2e1;
    font-weight: 700
}
.info a:hover{
    text-decoration: underline;
}
</style>