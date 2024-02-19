<script>
    import {
        EditOutline,
        PlusOutline,
        TrashBinOutline,
    } from "flowbite-svelte-icons";
    import { offers, clients } from "../../store";
    import { clientString, getClientById, timestampToDate } from "../../utils";

    import {
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Button,
        TableSearch,
        Tooltip,
        SpeedDial,
        SpeedDialButton,
    } from "flowbite-svelte";
    import ClientEditModal from "../../components/ClientEditModal.svelte";
    let searchTerm = "";

    $: filteredClients = $clients.filter((client) => {
        return (
            client.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1 ||
            client.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1 ||
            client.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1
        );
    });

    let editedClient = {};
    let isClientEditModalActive = false;
    let clientEditModalTitle;

    function addNewClient() {
        clientEditModalTitle = "Dodaj nowego klienta";
        editedClient = {};
        editedClient.id = crypto.randomUUID();
        isClientEditModalActive = true;
    }

    function deleteClient(index) {
        throw new Error("Function not implemented.");
    }

    function editClient(client) {
        clientEditModalTitle = "Edycja istniejącego klienta";
        editedClient = client;
        isClientEditModalActive = true;
    }
</script>

<TableSearch
    placeholder="Wyszukaj klienta"
    hoverable={true}
    bind:inputValue={searchTerm}
>
    <TableHead>
        <TableHeadCell>Nazwisko</TableHeadCell>
        <TableHeadCell>Imię</TableHeadCell>
        <TableHeadCell>Adres</TableHeadCell>
        <TableHeadCell><!--buttons--></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each filteredClients as client (client.id)}
            <TableBodyRow>
                <TableBodyCell>{client.surname}</TableBodyCell>
                <TableBodyCell>{client.name}</TableBodyCell>
                <TableBodyCell>{client.address}</TableBodyCell>
                <TableBodyCell>
                    <a on:click={() => editClient(client)}>
                        <Button size="xs"><EditOutline /></Button>
                    </a>
                    <Tooltip>Edytuj</Tooltip>
                    <a
                        ><Button size="xs"
                            ><TrashBinOutline
                                on:click={() => deleteClient(client)}
                            /></Button
                        ></a
                    >
                    <Tooltip>Usuń</Tooltip>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</TableSearch>

<ClientEditModal
    bind:isActive={isClientEditModalActive}
    bind:title={clientEditModalTitle}
    bind:client={editedClient}
/>

<SpeedDial trigger="hover" tooltip="none" pill={false}>
    <SpeedDialButton
        on:click={() => addNewClient()}
        class="w-30 h-20"
        name="Dodaj nowego klienta"
    >
        <PlusOutline class="w-5 h-5" />
    </SpeedDialButton>
</SpeedDial>
