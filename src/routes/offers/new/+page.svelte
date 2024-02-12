<!-- src/routes/catalog/[id].svelte -->
<script>
    import { products, categories } from "../../../store";
    import { onMount } from "svelte";
    import { redirect } from "@sveltejs/kit";
    import { Modal, Button } from "flowbite-svelte";
    import { Label, Input, Textarea } from "flowbite-svelte";

    let savedModal = false;

    export let data../../products/new/$types.js;

    let manufacturer,
        name,
        price,
        image_url,
        description = null;
    let product = null;

    function saveProduct(newProduct) {
        products.update((list) => [...list, newProduct]);
    }

    function cancelEdit() {
        redirect(302, "/catalog");
    }
</script>

<h1>Produkt</h1>

<Button on:click={() => (defaultModal = true)}>Default modal</Button>

<Modal title="Terms of Service" bind:open={savedModal} autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new
        consumer privacy laws for its citizens, companies around the world are
        updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes
        into effect on May 25 and is meant to ensure a common set of data rights
        in the European Union. It requires organizations to notify users as soon
        as possible of high-risk data breaches that could personally affect
        them.
    </p>
    <svelte:fragment slot="footer">
        <Button on:click={() => alert('Handle "success"')}>I accept</Button>
        <Button color="alternative">Decline</Button>
    </svelte:fragment>
</Modal>

<div class="product-form">
    <h2>Edycja</h2>
    <form on:submit|preventDefault={() => saveProduct(name)}>
        <Label>Producent: <Input bind:value={manufacturer} /></Label>
        <Label>Nazwa: <Input bind:value={name} /></Label>
        <Label>Cena netto: <Input type="number" bind:value={price} /></Label>
        <Label>Obraz: <Input bind:value={image_url} /></Label>
        <Label>Opis: <Textarea bind:value={description}></Textarea></Label>
        <Button>Zapisz</Button>
    </form>
</div>

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
