<script>
  import { offers, clients } from "../../store";
  import { clientString, getClientById, timestampToDate } from "../../utils";

  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Checkbox,
    Button,
    Modal,
    Label,
    Input,
    TableSearch,
  } from "flowbite-svelte";
  let searchTerm = "";

  $: filteredOffers = $offers.filter(
    (offer) => {
      let client = getClientById($clients, offer.client_id);
      console.log(client);
      return (client.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
       (client.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ||
       (client.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  );

  let formModal;
</script>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Sign in to our platform
    </h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input
        type="email"
        name="email"
        placeholder="name@company.com"
        required
      />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a
        href="/"
        class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
      >
        Lost password?
      </a>
    </div>
    <Button type="submit" class="w-full1">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a
        href="/"
        class="text-primary-700 hover:underline dark:text-primary-500"
      >
        Create account
      </a>
    </div>
  </form>
</Modal>

<TableSearch
  placeholder="Szukaj po nazwisku"
  hoverable={true}
  bind:inputValue={searchTerm}
>
  <TableHead>
    <TableHeadCell>Klient</TableHeadCell>
    <TableHeadCell>Data utworzenia</TableHeadCell>
    <TableHeadCell>Data modyfikacji</TableHeadCell>
    <TableHeadCell>Kod</TableHeadCell>
    <TableHeadCell />
  </TableHead>
  <TableBody>
    {#each filteredOffers as offer (offer.id)}
      <TableBodyRow>
        <TableBodyCell
          >{clientString(getClientById($clients, offer.client_id))}</TableBodyCell
        >
        <TableBodyCell
          >{timestampToDate(offer.creation_timestamp)}</TableBodyCell
        >
        <TableBodyCell
          >{timestampToDate(offer.modification_timestamp)}</TableBodyCell
        >
        <TableBodyCell>{offer.shortcode}</TableBodyCell>
        <TableBodyCell
          ><Button><a href="offers/{offer.id}">Zobacz</a></Button
          ></TableBodyCell
        >
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
