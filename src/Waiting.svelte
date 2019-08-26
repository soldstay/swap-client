<script>
  import { bidTwn, askTwn } from "./tweens";
  import assets from "./assets";

  export let rate;
  export let asset;
</script>

<h1 class="text-3xl">Got it!</h1>
{#if asset === assets.tether.id}
  <div>
    We'll broadcast when the bid price is above {parseFloat(1 / rate).toFixed(2)}
  </div>
{:else}
  <div>
    We'll broadcast when the ask price is below {parseFloat(rate).toFixed(2)}
  </div>
{/if}
