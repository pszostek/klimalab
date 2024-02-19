<script>
    import OfferEdit from "../../../components/OfferEdit.svelte";
    import {newOffer} from "../../../store";

</script>

<OfferEdit isClientSelectionActive={true} bind:editedOffer={$newOffer}/>
