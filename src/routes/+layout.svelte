<script>
  import "../app.pcss";
  import { page } from "$app/stores";
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    Navbar, NavLi, NavBrand, NavHamburger, NavUl,
    SidebarWrapper,
  } from "flowbite-svelte";
  import {
    FolderOpenSolid,
    ReceiptSolid,
  } from "flowbite-svelte-icons";


</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&amp;display=swap"
/>
<Navbar let:NavContainer color="primary">
  <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
    <NavBrand href="/">
      <span class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KlimaLAB</span>
      </span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/products" class="flex"><FolderOpenSolid class="w-5 h-5 mx-2" />Produkty</NavLi>
      <NavLi href="/offers" class="flex"><ReceiptSolid  class="w-5 h-5 mx-2" />Oferty</NavLi>
    </NavUl>
  </NavContainer>
</Navbar>
<!--
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span class="flex items-center space-x-3 rtl:space-x-reverse">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
      </svg>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KlimaLAB</span>
    </span>

  </div>
</nav>-->
<main>



  <slot />
</main>

<style>
  /*
  body {
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    padding: 10px;
    text-align: center;
  }

  nav {
    display: flex;
    justify-content: center;
    background-color: #555;
    padding: 10px;
  }

  nav a {
    font-family: "Lato", sans-serif;
    color: white;
    text-decoration: none;
    margin: 0 15px;
  }

  main {
    font-family: "Lato", sans-serif;
    padding: 20px;
  }*/
</style>
