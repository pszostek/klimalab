<!-- src/routes/__layout.svelte -->
<script>
    import { selectedProducts } from "../store";
</script>

<main>
    <slot />
</main>

{#if $selectedProducts.length > 0}
    <footer>
        <a href="offer">View Offer</a>
    </footer>
{/if}
