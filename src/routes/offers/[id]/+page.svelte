<script>
  import { offers, products } from "../../../store";

  import { SpeedDial, SpeedDialButton } from "flowbite-svelte";
  import { TagOutline } from "flowbite-svelte-icons";
  import OfferEdit from "../../../components/OfferEdit.svelte";

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
</script>

{#if selectedOffer}
  <OfferEdit isClientSelectionActive={false} bind:editedOffer={selectedOffer} />
{/if}

<SpeedDial trigger="hover" tooltip="none" pill={false}>
  <SpeedDialButton class="w-30 h-30" name="Dodaj produkt">
    <TagOutline class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
