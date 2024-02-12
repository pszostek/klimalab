<!-- src/routes/catalog.svelte -->
<script>
  import { categories, products } from "../../store";

  import ProductEditModal from "../../components/ProductEditModal.svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from "flowbite-svelte";

  import { SpeedDial, SpeedDialButton } from "flowbite-svelte";
  import {
    ListOutline,
    TagOutline,
    FileCopySolid,
    EditSolid,
  } from "flowbite-svelte-icons";
    import NewCategoryModal from "../../components/NewCategoryModal.svelte";

  let selectedCategory = null;

  let isAddFormActive;
  let isNewCategoryModalActive;

  let modalTitle;
  let addedOrEditedProduct = {};

  function editProduct(product) {
    modalTitle = "Edytuj intniejący produkt";
    addedOrEditedProduct = product;
    isAddFormActive = true;
  }

  function addProduct() {
    modalTitle = "Dodaj nowy produkt";
    addedOrEditedProduct = {};
    addedOrEditedProduct.id = crypto.randomUUID();
    addedOrEditedProduct.categoryId = selectedCategory.id;
    isAddFormActive = true;
  }

  function duplicateProduct(product) {
    modalTitle = "Duplikuj istniejący produkt";
    addedOrEditedProduct = product;
    addedOrEditedProduct.id = crypto.randomUUID();
    isAddFormActive = true;
  }

  // $: activeUrl = $page.url.pathname;
  let activeUrl = null;
  let activeClass =
    "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  let nonActiveClass =
    "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
</script>

<ProductEditModal
  bind:product={addedOrEditedProduct}
  bind:isActive={isAddFormActive}
  bind:title={modalTitle}
/>

<NewCategoryModal
  bind:isActive={isNewCategoryModalActive}
/>

<div class="flex">
  <Sidebar {activeUrl} {activeClass} {nonActiveClass}>
    <SidebarWrapper>
      <SidebarGroup>
        {#each $categories as category (category.id)}
          <SidebarItem
            label={category.name}
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
    <Table>
      <TableHead>
        <TableHeadCell />
        <!-- obrazek -->
        <TableHeadCell>Producent</TableHeadCell>
        <TableHeadCell>Nazwa</TableHeadCell>
        <TableHeadCell>Cena netto</TableHeadCell>
        <TableHeadCell>Opis</TableHeadCell>
        <TableHeadCell><!-- icons --></TableHeadCell>
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
            <TableBodyCell>{product.manufacturer}</TableBodyCell>
            <TableBodyCell>{product.name}</TableBodyCell>
            <TableBodyCell>{product.price} zł</TableBodyCell>
            <TableBodyCell>{product.description}</TableBodyCell>
            <TableBodyCell class="flex my-3">
              <a href="#" on:click={() => editProduct(product)}>
                <EditSolid />
              </a>
              <a href="#" on:click={() => duplicateProduct(product)}>
                <FileCopySolid />
              </a>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  {/if}
</div>

<SpeedDial trigger="hover" tooltip="none" pill={false}>
  <SpeedDialButton on:click={() => isNewCategoryModalActive = true} class="w-30 h-20" name="Dodaj nową kategorię">
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
