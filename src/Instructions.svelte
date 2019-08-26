<script>
  import Balance from "./Balance.svelte";
  export let toggleInstructions;
</script>

<div class="p-4 max-w-xl border-b mx-auto">
  <p>
    Use this page to request atomic swaps between Bitcoin (L-BTC) and Tether
    (L-USDt) on the Liquid network. Submit the amount you want to swap and the
    server will generate a proposal transaction. Use the
    <a class="text-blue-600" href="https://github.com/Blockstream/liquid-swap">
      liquid-swap tool
    </a>
    to accept the proposal, then submit the encoded acceptance message using the
    form provided.
  </p>

  <p>
    If the exchange rate is in our favour, we'll immediately finalize and
    broadcast the transaction. Otherwise, the transaction will be queued until
    the exchange rate comes back our way.
  </p>

  <p>
    We use the bid and ask rates from Binance and don't charge any additional
    commission.
  </p>

  <Balance />

  <div class="w-100 text-right">
    <button class="bg-blue-600 p-4 text-white" on:click={toggleInstructions}>
      Got it
    </button>
  </div>
</div>
