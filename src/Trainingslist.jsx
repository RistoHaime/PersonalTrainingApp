import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchTrainings,
  deleteTraining,
} from "./api";
import moment from "moment/moment";




export default function Traininglist() {
  const queryClient = useQueryClient();
 
  const { data: trainings } = useQuery({
    queryKey: ["trainings"],
    queryFn: fetchTrainings,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTraining,
    onSuccess: () => queryClient.invalidateQueries(["trainings"]),
  });

  const [trainingData, setTrainingData] = useState([]);
  const fetchCustomerNames = async () => {
    const updatedTrainings = await Promise.all(
      trainings.map(async (training) => {
        const customerUrl = training._links.customer.href;
        const response = await fetch(customerUrl);
        const customerData = await response.json();
        return { ...training, customerName: customerData.firstname};
      })
    );

    setTrainingData(updatedTrainings);
  };
  
  useEffect(() => {
    if (trainings) {
      fetchCustomerNames();
    }
  }, [trainings]);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "date",
      filter: true,
      valueFormatter: (data) => {
        return moment(data.value).format("DD/MM/YYYY");
      },
    },
    { field: "duration", filter: true },
    { field: "activity", filter: true },
    {
      field: "customerName",
      headerName: "Customer",
      filter: true,
    },
    {
      field: "_links.self.href",
      headerName: "",
      sortable: false,
      filter: false,
      cellRenderer: (params) => (
<Button
          onClick={() => deleteMutation.mutate(params.data._links.self.href)}
>
          Delete
</Button>
      ),
    },
  ]);
  return (
<div className="ag-theme-material" style={{ width: 1600, height: 1000 }}>

<AgGridReact
        rowData={trainingData}
        columnDefs={columnDefs}
        accentedSort={true}
      />
</div>
  );
}