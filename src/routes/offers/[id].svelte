<script>
    import { offers } from '../../store';
    import { params } from '$app/stores';
  
    $: offerId = $params.id;
    $: selectedOffer = $offers.find(offer => offer.id === +offerId);
  
    if (!selectedOffer) {
      // Redirect to the offers page if the offer is not found
      navigate('/offers');
    }
  </script>
  
  <h1>Edit Offer</h1>
  
  {#if selectedOffer}
    <p>Name: {selectedOffer.name}</p>
    <p>Total Amount: {selectedOffer.totalAmount}</p>
  
    <!-- Add more offer details as needed -->
  
    <!-- Add an edit form here if needed -->
  
    <button on:click={() => navigate('/offers')}>Back to Offers</button>
  {/if}
  