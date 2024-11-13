import { useState } from "react";
import { useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCustomers, deleteCustomer } from "./api";
import AddCustomer from "./AddCustomer";
import { addCustomer } from "./api";
import { Button } from "@mui/material";
import AddTraining from "./AddTraining";

export default function Customerlist(){

const queryClient = useQueryClient();

const {data: customers}= useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers
})

const addMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => queryClient.invalidateQueries(['customers'])
 })

const deleteMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => queryClient.invalidateQueries(['customers'])
})



const [columnDefs, setColumnDefs] = useState([
    {
        field: 'firstname',
        filter:true,
        sort: 'asc'
    },
    {field: 'lastname'},
    {field: 'streetaddress'},
    {field: 'postcode'},
    {field: 'city'},
    {field: 'phone'},
    {field: 'email'},
    {field: '_links.self.href',
        headerName: '',
        sortable: false,
        filter: false,
        cellRenderer: params => <Button onClick={() => deleteMutation.mutate(params.data._links.self.href)}>Delete</Button>
    },

]);

useEffect(()=> fetchCustomers,[])
 return (
<div className="ag-theme-material" style={{width: 1600, height: 1000}}>
    <AddCustomer addCustomer= {customer => addMutation.mutate(customer)} />
 <AgGridReact 
 rowData={customers}
 columnDefs={columnDefs}
 accentedSort={true}
 />

</div>
 )
}