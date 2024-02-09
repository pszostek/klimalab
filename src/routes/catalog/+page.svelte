<!-- src/routes/catalog.svelte -->
<script>
    import { products } from '../store';
  
    let selectedProducts = [];
    
    function addToOffer(product) {
      selectedProducts = [...selectedProducts, { ...product, units: 1 }];
    }
  </script>
  
  <h1>Product Catalog</h1>
  
  {#each products as product (product.id)}
    <div>
      <img {src} alt={name} width="100" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <button on:click={() => addToOffer(product)}>Add to Offer</button>
    </div>
  {/each}
  