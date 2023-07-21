<script lang="ts">
  const map = new Uint8Array(9);

  function click(id: number) {

  }
</script>

<div class="game">
  {#each map as val,id }
    <div 
      class="item" 
      on:mousedown={() => click(id)} 
      data-val={val} />
  {/each}
</div>

<button class="favorite styled" type="button">
  Restart
</button>