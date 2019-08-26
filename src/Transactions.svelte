<script>
  import timeago from "timeago.js";

  let bitcoin = [];
  let tether = [];
  let completed = [];

  const api = new WebSocket("ws://" + window.location.hostname + "/ws");

  api.onmessage = async function(event) {
    ({ bitcoin, tether, completed } = JSON.parse(event.data));
  };
</script>

{#if bitcoin.length}
  <h2 class="text-left mt-4 text-2xl">Pending BTC Buys</h2>
  {#each bitcoin as tx (tx.key)}
    <div class="flex max-w-md">
      <div>{timeago.format(tx.key)}</div>
      <div class="text-right flex-grow">{parseFloat(tx.rate).toFixed(2)}</div>
    </div>
  {/each}
{/if}

{#if tether.length}
  <h2 class="text-left mt-4 text-2xl">Pending USDt Buys</h2>
  {#each tether as tx (tx.key)}
    <div class="flex max-w-md">
      <div>{timeago.format(tx.key)}</div>
      <div class="text-right flex-grow">
        {parseFloat(1 / tx.rate).toFixed(2)}
      </div>
    </div>
  {/each}
{/if}

{#if completed.length}
  <h2 class="text-left mt-4 text-2xl">Completed Transactions</h2>
  {#each completed as tx (tx.key)}
    <div class="flex max-w-md">
      <div>{timeago.format(tx.time)}</div>
      <div class="text-right flex-grow">
        <a href="https://blockstream.info/liquid/tx/{tx.id}" title={tx.id}>
          {tx.id.substr(0, 6)}{tx.id.substr(-6)}
        </a>
      </div>
    </div>
  {/each}
{/if}
