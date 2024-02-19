<script>
    import { offers, products, clients } from "../store";
    import { redirect } from "@sveltejs/kit";
    import {
        timestampToDate,
        clientString,
        randString,
        offerShortcode,
        getClientById,
    } from "../utils";

    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Label,
        Input,
        SpeedDial,
        SpeedDialButton,
        Button,
    } from "flowbite-svelte";
    import {
        TrashBinOutline,
        TagOutline,
        MinusOutline,
        PlusOutline,
        CartPlusOutline,
    } from "flowbite-svelte-icons";
    import ClientSelectModal from "./ClientSelectModal.svelte";
    import { preloadData } from "$app/navigation";

    let isCustomerSelectModalActive = false;

    export let editedOffer;
    export let isClientSelectionActive;
    let offerId = editedOffer.id;

    let client = getClientById($clients, editedOffer.client_id);

    // join $products against the offer
    editedOffer.products.map((offer_product) => {
        let product = $products.find((p) => p.id === offer_product.id);
        offer_product.product = product;
    });

    console.log(editedOffer.products);

    // if (!selectedOffer) {
    //   // Redirect to the offers page if the offer is not found
    //   redirect(302, "/offers");
    // }
    function handleClientSelected(event) {
        let clientId = event.detail.clientId;
        editedOffer.shortcode = offerShortcode(getClientById($clients, clientId));
        editedOffer.client_id = clientId;
        client = getClientById($clients, clientId);
    }

    function incrementProduct(idx) {
        console.log(editedOffer);
        editedOffer.products[idx].quantity += 1;
        editedOffer.products = editedOffer.products; // reactivity trigger
    }

    function decrementProduct(idx) {
        if (editedOffer.products[idx].quantity > 1) {
            editedOffer.products[idx].quantity -= 1;
        } else {
            deleteProduct(idx);
        }
        editedOffer.products = editedOffer.products;
    }

    function deleteProduct(index) {
       editedOffer.products.splice(index, 1); // 2nd parameter means remove one item only
       editedOffer.products = editedOffer.products;
       alert("Usunięto produkt z oferty");
    }

    function saveOffer() {
        if(editedOffer.products.length == 0) {
            alert('Nie mozna zapisac pustej oferty!');
            return;
        }
        if(!editedOffer.shortcode) {
            alert('Nie mozna zapisac oferty bez shortcodu!');
            return;
        }
        console.log('saveclient ' + editedOffer.client_id)
        if(!editedOffer.client_id) {
            alert('Nie mozna zapisac oferty bez klienta!');
            return;
        }
        
        if(!editedOffer.id) {
            editedOffer.id = crypto.randomUUID();
        }
        if(!editedOffer.creation_timestamp) {
          editedOffer.creation_timestamp = Date.now();
        }
        editedOffer.modification_timestamp = Date.now();

        $offers.push(editedOffer);
        alert("Oferta została zapisana");
        redirect(302, "/offers");
    }
</script>

<div class="mx-8 w-5/6">
    <form class="flex flex-col space-y-6 my-4" action="#">
        <h3 class="my-3 text-xl font-medium text-gray-900 dark:text-white">
            Edycja oferty
        </h3>
        <Label class="space-y-2">
            <span>Identyfikator ofery</span>
            <Input disabled class="mr-10" value={editedOffer.id} />
        </Label> 
        {#if editedOffer.creation_timestamp}
            <span class="flex space-x-10">
            <Label class="space-y-2">
                <span>Data utworzenia</span>
                <Input
                    disabled
                    value={timestampToDate(editedOffer.creation_timestamp)}
                />
            </Label>
            <Label class="space-y-2">
                <span>Data ostatniej modyfikacji</span>
                <Input
                    disabled
                    value={timestampToDate(editedOffer.modification_timestamp)}
                />
            </Label>
        </span>
        {/if}
        <Label class="space-y-2">
            <span>Klient</span>
            <span class="flex">
                <Input class="mr-10" disabled value={clientString(client)} />
                {#if isClientSelectionActive}
                <Button on:click={() => (isCustomerSelectModalActive = true)}
                    ><a href="#">Wybierz</a></Button
                >
                {/if}
                </span
            >
        </Label>
        <Label class="space-y-2">
            <span>Shortcode</span>
            <Input class="mr-10" value={editedOffer.shortcode} />
        </Label>
    </form>

    <Table>
        <TableHead>
            <TableHeadCell>Lp.</TableHeadCell>
            <TableHeadCell>Obraz</TableHeadCell>
            <TableHeadCell>Producent</TableHeadCell>
            <TableHeadCell>Model</TableHeadCell>
            <TableHeadCell>Ilość</TableHeadCell>
            <TableHeadCell>Cena jednostkowa</TableHeadCell>
            <TableHeadCell>Suma</TableHeadCell>
            <TableHeadCell></TableHeadCell>
        </TableHead>
        <TableBody>
            {#each editedOffer.products as offerProduct, index (offerProduct.id)}
                <TableBodyRow>
                    <TableBodyCell>{index + 1}</TableBodyCell>
                    <TableBodyCell
                        ><img
                            src={offerProduct.product.image_url}
                            alt={offerProduct.product.name}
                            width="50"
                        /></TableBodyCell
                    >
                    <TableBodyCell
                        >{offerProduct.product.manufacturer}</TableBodyCell
                    >
                    <TableBodyCell>{offerProduct.product.name}</TableBodyCell>
                    <TableBodyCell class="flex mx-3 space-x-1 my-3"
                        ><span class="mr-2">{offerProduct.quantity}</span><a
                            
                            ><Button
                                class="p-1"
                                size="xs"
                                on:click={() => incrementProduct(index)}
                                ><PlusOutline class="w-3 h-3" /></Button
                            ></a
                        >
                        <a href=""
                            ><Button class="p-1" size="xs"
                                ><MinusOutline
                                    class="w-3 h-3"
                                    on:click={() => decrementProduct(index)}
                                /></Button
                            ></a
                        ></TableBodyCell
                    >
                    <TableBodyCell
                        >{offerProduct.product.price} zł</TableBodyCell
                    >
                    <TableBodyCell
                        >{offerProduct.quantity * offerProduct.product.price} zł</TableBodyCell
                    >
                    <TableBodyCell>
                        <a
                            ><Button class="p-1" size="xs"
                                ><TrashBinOutline
                                    class="w-3 h-3"
                                    on:click={() => deleteProduct(index)}
                                /></Button
                            ></a
                        >
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>

<ClientSelectModal
    bind:isActive={isCustomerSelectModalActive} on:selected={handleClientSelected}
/>

<SpeedDial trigger="hover" tooltip="none" pill={false}>
    <SpeedDialButton on:click={() => saveOffer()} class="w-30 h-30" name="Zapisz ofertę">
        <CartPlusOutline class="w-5 h-5" />
    </SpeedDialButton>
    <SpeedDialButton class="w-30 h-30" name="Usuń wszystko">
        <TrashBinOutline class="w-5 h-5" />
    </SpeedDialButton>
</SpeedDial>
