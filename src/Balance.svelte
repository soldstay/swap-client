<script>
  let promise = getBalance();

  async function getBalance() {
    const res = await fetch(`/api/balance`);
    const json = await res.json();

    if (res.ok) {
      return json;
    } else {
      throw new Error(json);
    }
  }
</script>

{#await promise}
  <p>...waiting</p>
{:then balance}
  <p>L-BTC available: {balance.bitcoin.toFixed(8)}</p>
  <p>L-USDt available: {balance.tether.toFixed(8)}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
