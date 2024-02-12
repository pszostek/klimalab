<script>
    import { categories, products } from "../store";
    import { Textarea, Button, Modal, Label, Input } from "flowbite-svelte";

    export let isActive;
</script>

<Modal bind:open={isActive} size="sm" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <Label class="space-y-2">
            <span>Nazwa</span>
            <Input required/>
        </Label>
        <Button type="submit">Dodaj</Button>
    </form>
</Modal>
