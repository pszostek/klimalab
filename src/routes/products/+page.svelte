<!-- src/routes/catalog.svelte -->
<script>
  import { categories, products, newOffer } from "../../store";
  import { saveProduct } from "../../utils";
  import ProductEditModal from "../../components/ProductEditModal.svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button,
    Tooltip,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    Toast,
    TableSearch,
  } from "flowbite-svelte";

  import { SpeedDial, SpeedDialButton } from "flowbite-svelte";
  import {
    ListOutline,
    TagOutline,
    FileCopySolid,
    EditSolid,
    ShoppingBagOutline,
    EditOutline,
    FileCopyOutline,
    PapperPlaneOutline,
  } from "flowbite-svelte-icons";
  import NewCategoryModal from "../../components/NewCategoryModal.svelte";
  import { fly } from "svelte/transition";

  let selectedCategory = null;

  let isAddProdutFormActive = false;
  let isNewCategoryModalActive = false;
  let isProductAddedToastActive = false;

  let modalTitle;
  let addedOrEditedProduct = {};

  function handleProductSaved(event) {
    let product = event.detail.product;
    saveProduct($products, product);
    $products = $products;
  }

  function editProduct(product) {
    modalTitle = "Edytuj intniejący produkt";
    addedOrEditedProduct = product;
    isAddProdutFormActive = true;
  }

  function addProduct() {
    modalTitle = "Dodaj nowy produkt";
    addedOrEditedProduct = {};
    addedOrEditedProduct.id = crypto.randomUUID();
    addedOrEditedProduct.categoryId = selectedCategory.id;
    isAddProdutFormActive = true;
  }

  function duplicateProduct(product) {
    modalTitle = "Duplikuj istniejący produkt";
    console.log("dup " + product);
    addedOrEditedProduct = {};
    Object.assign(addedOrEditedProduct, product);
    addedOrEditedProduct.id = crypto.randomUUID();
    isAddProdutFormActive = true;
  }

  function addToNewOffer(product) {
    if ($newOffer.products.find((p) => p.id == product.id)) {
      alert("Produkt juz był wcześniej dodany do nowej oferty");
      return;
    }
    $newOffer.products.push({ id: product.id, quantity: 1 });
    $newOffer.products = $newOffer.products; // to trigger reactivity
    alert("Produkt został dodany do nowej oferty");
  }

  let searchTerm;
  // $: filteredClients = $clients.filter((client) => {
  //     return (
  //         client.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
  //             -1 ||
  //         client.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
  //             -1 ||
  //         client.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
  //             -1
  //     );
  // });
  let cellStyle = "w-1/10 whitespace-nowrap";
</script>

<ProductEditModal
  bind:product={addedOrEditedProduct}
  bind:isActive={isAddProdutFormActive}
  bind:title={modalTitle}
  on:productSaved={handleProductSaved}
/>

<NewCategoryModal bind:isActive={isNewCategoryModalActive} />

<div class="flex">
  <Sidebar class=" w-50">
    <SidebarWrapper>
      <SidebarGroup>
        {#each $categories as category (category.id)}
          <SidebarItem
            label={category.name}
            class="flex-1 ms-3 whitespace-nowrap"
            id={category.id}
            on:click={() => {
              selectedCategory = category;
            }}
          ></SidebarItem>
        {/each}
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>

  {#if selectedCategory}
    <TableSearch
      placeholder="Wyszukaj klienta"
      hoverable={true}
      striped={true}
      bind:inputValue={searchTerm}
      class="space-4"
    >
      <TableHead>
        <TableHeadCell class={cellStyle} />
        <!-- obrazek -->
        <TableHeadCell class={cellStyle}>Producent</TableHeadCell>
        <TableHeadCell class={cellStyle}>Nazwa</TableHeadCell>
        <TableHeadCell class={cellStyle}>Cena netto</TableHeadCell>
        <TableHeadCell class={cellStyle}>Opis</TableHeadCell>
        <TableHeadCell class={cellStyle}><!-- icons --></TableHeadCell>
      </TableHead>
      <TableBody>
        {#each $products.filter((product) => product.categoryId === selectedCategory.id) as product (product.id)}
          <TableBodyRow>
            <TableBodyCell
              ><img
                src={product.image_url}
                alt={product.name}
                width="50"
              /></TableBodyCell
            >
            <TableBodyCell class={cellStyle}
              >{product.manufacturer}</TableBodyCell
            >
            <TableBodyCell class={cellStyle}>{product.name}</TableBodyCell>
            <TableBodyCell class={cellStyle}>{product.price} zł</TableBodyCell>
            <TableBodyCell class={cellStyle}
              >{product.description}</TableBodyCell
            >
            <TableBodyCell class="{cellStyle} flex-column py-3 my-5 px-6">
              <a href="#" on:click={() => editProduct(product)}>
                <Button size="xs"><EditOutline /></Button>
              </a>
              <Tooltip>Edytuj</Tooltip>
              <a href="#" on:click={() => duplicateProduct(product)}>
                <Button size="xs"><FileCopyOutline /></Button>
              </a>
              <Tooltip>Duplikuj</Tooltip>
            </TableBodyCell><TableBodyCell class={cellStyle}>
              <a href="#" on:click={() => addToNewOffer(product)}>
                <Button color="purple" size="xs"><ShoppingBagOutline /></Button>
              </a>
              <Tooltip>Dodaj do nowej oferty</Tooltip>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </TableSearch>
  {/if}
</div>

<SpeedDial trigger="hover" tooltip="none" pill={false}>
  <SpeedDialButton
    on:click={() => (isNewCategoryModalActive = true)}
    class="w-30 h-20"
    name="Dodaj nową kategorię"
  >
    <ListOutline class="w-5 h-5" />
  </SpeedDialButton>
  <SpeedDialButton
    on:click={() => addProduct()}
    class="w-20 h-20"
    name="Dodaj nowy produkt"
  >
    <TagOutline class="w-5 h-5" />
  </SpeedDialButton>
</SpeedDial>
