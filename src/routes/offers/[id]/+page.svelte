<script>
  import { offers, products } from "../../../store";
  import { redirect } from "@sveltejs/kit";
  import { timestampToDate } from "../../../utils";

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
  } from "flowbite-svelte";
  import {
    PlusSolid,
    MinusSolid,
    TrashBinOutline,
    TagOutline,
  } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  export let data;
  let offerId = data.id;
  let selectedOffer = $offers.find((offer) => offer.id === offerId);

  console.log("offerId" + offerId);

  // join $products against the offer
  console.dir(selectedOffer, { depth: null }); 
  selectedOffer.products.map((offer_product) => {
    let product = $products.find((p) => p.id === offer_product.id);
    offer_product.product = product;
  });
  console.dir(selectedOffer, { depth: null }); 
  // if (!selectedOffer) {
  //   // Redirect to the offers page if the offer is not found
  //   redirect(302, "/offers");
  // }
</script>

{#if selectedOffer}
  <div class="mx-8 w-5/6">
    <form class="flex flex-col space-y-6 my-4" action="#">
      <h3 class="my-3 text-xl font-medium text-gray-900 dark:text-white">
        Edycja oferty
      </h3>
      <Label class="space-y-2">
        <span>Data utworzenia</span>
        <Input
          disabled
          value={timestampToDate(selectedOffer.creation_timestamp)}
        />
      </Label>
      <Label class="space-y-2">
        <span>Data ostatniej modyfikacji</span>
        <Input
          disabled
          value={timestampToDate(selectedOffer.modification_timestamp)}
        />
      </Label>
      <Label class="space-y-2">
        <span>Shortcode</span>
        <Input value={selectedOffer.shortcode} />
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
        {#each selectedOffer.products as offerProduct, index (offerProduct.id)}
          <TableBodyRow>
            <TableBodyCell>{index + 1}</TableBodyCell>
            <TableBodyCell
              ><img
                src={offerProduct.product.image_url}
                alt={offerProduct.product.name}
                width="50"
              /></TableBodyCell
            >
            <TableBodyCell>{offerProduct.product.manufacturer}</TableBodyCell>
            <TableBodyCell>{offerProduct.product.name}</TableBodyCell>
            <TableBodyCell class="flex my-3"
              >{offerProduct.quantity}<a><PlusSolid /></a><a><MinusSolid /></a
              ></TableBodyCell
            >
            <TableBodyCell>{offerProduct.product.price} zł</TableBodyCell>
            <TableBodyCell
              >{offerProduct.quantity * offerProduct.product.price} zł</TableBodyCell
            >
            <TableBodyCell>
              <a><TrashBinOutline /></a>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
{/if}

<SpeedDial trigger="hover" tooltip="none" pill={false}>
  <SpeedDialButton class="w-30 h-30" name="Dodaj produkt">
    <TagOutline class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
