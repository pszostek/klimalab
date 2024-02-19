<!-- src/routes/catalog/[id].svelte -->
<script>
  import { products, categories } from "../../../store";
  import { onMount } from "svelte";
  import { redirect } from "@sveltejs/kit";
  import { Modal, Button } from "flowbite-svelte";
  import { Label, Input, Textarea } from "flowbite-svelte";
  export let data;

  let editingProduct = null;

  function saveProduct() {
    products.update((items) => {
      let index = items.findIndex((p) => p.id === editingProduct.id);
      if (index !== -1) {
        items[index] = editingProduct;
      }
      return items;
    });
  }

  function cancelEdit() {
    redirect(302, "/catalog");
  }

  onMount(() => {
    const productId = data.id;
    editingProduct =
      $products.find((product) => product.id === String(productId)) || null;
  });
</script>

{#if editingProduct}
  <div class="product-form">
    <h2>Edycja</h2>
    <Label>Producent: <Input bind:value={editingProduct.manufacturer} /></Label>
    <Label>Nazwa: <Input bind:value={editingProduct.name} /></Label>
    <Label
      >Cena netto: <Input
        type="number"
        bind:value={editingProduct.price}
      /></Label
    >
    <Label>Obraz: <Input bind:value={editingProduct.image_url} /></Label>
    <Label
      >Opis: <Textarea bind:value={editingProduct.description}
      ></Textarea></Label
    >
    <Button on:click={saveProduct}>Zapisz</Button>
    <button on:click={cancelEdit}><a href="/products">Anuluj</a></button>
  </div>
{/if}

<style>
  /* Existing styles */

  .product-form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }

  .product-form Label {
    margin-bottom: 10px;
  }

  .product-form button {
    margin-top: 10px;
  }
</style>
