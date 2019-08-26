<script>
  import Spinner from "./Spinner.svelte";
  import Waiting from "./Waiting.svelte";
  import focus from "./focus";

  let acceptance = "";
  let info = Promise.resolve("");

  async function sendAcceptance() {
    const res = await fetch("/api/acceptance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ acceptance })
    });
    const json = await res.json();
    console.log(json);

    if (res.ok) {
      return json;
    } else {
      throw new Error(json.error);
    }
  }

  const submit = () => {
    info = sendAcceptance();
    state = "accepted";
  };

  let state = "input";
</script>

{#if state === 'input'}
  <textarea
    use:focus
    placeholder="Paste the encoded acceptance transaction here"
    class="border p-2 h-64"
    bind:value={acceptance} />
  <button class="block bg-blue-600 p-4 text-white mx-auto" on:click={submit}>
    Submit
  </button>
{/if}

{#await info}
  <Spinner />
{:then result}
  {#if result && result.rate && result.rate.length > 0}
    <Waiting rate={result.rate} asset={result.info.legs[0].asset} />
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
