import { useState } from "react";
import { useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import { Button } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTrainings, fetchCustomers, FetchCustomerByUrl, deleteTraining } from "./api";
import moment from "moment/moment";
import AddTraining from "./AddTraining";
import { addTraining } from "./api";

export default function Traininglist(){

const queryClient = useQueryClient();
const {data: trainings}= useQuery({
    queryKey: ['trainings'],
    queryFn: fetchTrainings
})
const deleteMutation = useMutation({
    mutationFn: deleteTraining,
    onSuccess: () => queryClient.invalidateQueries(['trainings'])
})

const addMutation = useMutation({
    mutationFn: addTraining,
    onSuccess: () => queryClient.invalidateQueries(['trainings'])
})

const [columnDefs, setColumnDefs] = useState([
    {field: 'date',
        filter: true,
        valueFormatter:  (data) => {
            return moment(data.value).format('DD/MM/YYYY')
            //https://stackoverflow.com/questions/51471165/how-to-format-data-before-displaying-it-on-ag-grid
        }
      
    },
    {field: 'duration',
        filter:true
    },
    {field: 'activity',
        filter: true,
    },
    {field: '_links.customer.href',
        headerName: 'Customer',
        cellRenderer: param => <FetchCustomerByUrl url ={param.data._links.customer.href}/>,
        filter: true,

    },
    {field: '_links.self.href',
        headerName: '',
        sortable: false,
        filter: false,
        cellRenderer: params => <Button onClick={() => deleteMutation.mutate(params.data._links.self.href)}>Delete</Button>
    }
    ]);

useEffect(()=> fetchTrainings,[])
 return (
<div className="ag-theme-material" style={{width: 1600, height: 1000}}>
<AddTraining addTraining= {training => addMutation.mutate(training)} />
 <AgGridReact
 rowData={trainings}
 columnDefs={columnDefs}
 accentedSort={true}
 />

</div>
 )
}