<script>
    import { categories, products } from "../store";
    import { Textarea, Button, Modal, Label, Input } from "flowbite-svelte";

    export let isActive;
    export let title;
    export let product;

    console.log(product)
</script>

<Modal bind:open={isActive} size="lg" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {title}
        </h3>
        <Label class="space-y-2">
            <span>Identyfikator</span>
            <Input disabled bind:value={product.id} />
        </Label>
        <Label class="space-y-2">
            <span>Kategoria</span>
            <select
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option>Wybierz kategorię</option>
                {#each $categories as category (category.id)}
                    {#if category.Id === product.categoryId}
                    <option selected value={category.id}>{category.name}</option>
                    {:else}
                    {console.log(category.id + ' ' + product.categoryId)}
                    <option value={category.id}>{category.name}</option>
                    {/if}
                {/each}
            </select>
        </Label>
        <div class="flex items-start space-x-6">
            <Label class="space-y-2">
                <span>Producent</span>
                <Input required bind:value={product.manufacturer} />
            </Label>
            <Label class="space-y-2 flex-auto">
                <span>Nazwa</span>
                <Input required bind:value={product.name} />
            </Label>
        </div>
        <Label class="space-y-2">
            <span>Cena netto</span>
            <Input required bind:value={product.price} />
        </Label>
        <Label class="space-y-2">
            <span>Obrazek</span>
            <Input required bind:value={product.image} />
        </Label>
        <Label class="space-y-2">
            <span>Opis</span>
            <Textarea rows="4" bind:value={product.description}></Textarea>
        </Label>
        <Button type="submit">Dodaj</Button>
    </form>
</Modal>
