<script>
    import { categories, products } from "../store";
    import { Textarea, Button, Modal, Label, Input } from "flowbite-svelte";

    export let isActive;
    export let title;
    export let client;

    console.log(client);
</script>

<Modal bind:open={isActive} size="lg" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {title}
        </h3>
        <Label class="space-y-2">
            <span>Identyfikator</span>
            <Input disabled bind:value={client.id} />
        </Label>
        <div class="flex items-start space-x-6">
            <Label class="space-y-2">
                <span>Imię</span>
                <Input required bind:value={client.name} />
            </Label>
            <Label class="space-y-2 flex-auto">
                <span>Nazwisko</span>
                <Input required bind:value={client.surname} />
            </Label>
        </div>
        <Label class="space-y-2">
            <span>Adres</span>
            <Input required bind:value={client.address} />
        </Label>
        <Label class="space-y-2">
            <span>Obrazek (URL)</span>
            <Input bind:value={client.image_url} />
        </Label>
        <Button type="submit">Zapisz</Button>
    </form>
</Modal>
