<script>
    import { clients } from "../store";
    import {
        Button,
        Modal,
        TableSearch,
        TableHeadCell,
        TableHead,
        TableBody,
        TableBodyRow,
        TableBodyCell,
    } from "flowbite-svelte";
	import { createEventDispatcher } from 'svelte';

    export let isActive;
    let searchTerm = "";

	const dispatch = createEventDispatcher();

    $: filteredClients = $clients.filter(
        (client) =>
            client?.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1 ||
            client?.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1 ||
            client?.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1,
    );
</script>

<Modal bind:open={isActive} size="md" autoclose={false} class="w-full">
    <TableSearch
        placeholder="Szukajcie a znajdziecie :)"
        hoverable={true}
        bind:inputValue={searchTerm}
    >
        <TableHead>
            <TableHeadCell>Imię</TableHeadCell>
            <TableHeadCell>Nazwisko</TableHeadCell>
            <TableHeadCell>Adres</TableHeadCell>
            <TableHeadCell><!--action--></TableHeadCell>
        </TableHead>
        <TableBody>
            {#each filteredClients as client (client.id)}
                <TableBodyRow>
                    <TableBodyCell>{client.name}</TableBodyCell>
                    <TableBodyCell>{client.surname}</TableBodyCell>
                    <TableBodyCell>{client.address}</TableBodyCell>
                    <TableBodyCell
                        ><a href="#"
                            ><Button
                                on:click={() => {
                                    isActive = false;
                                    dispatch('selected', {
                                        clientId: client.id,
                                    })
                                }}
                                size="xs">Wybierz</Button
                            ></a
                        ></TableBodyCell
                    >
                </TableBodyRow>
            {/each}
        </TableBody>
    </TableSearch>
</Modal>
