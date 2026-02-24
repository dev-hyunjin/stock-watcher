import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { formatNumber, formatDateTime } from "../../utils/format";

export default function SignalsGrid({ rows }) {
  const colDefs = [
    { field: "date", headerName: "일자", valueFormatter: (p) => formatDateTime(p.value), flex: 1 },
    { field: "symbol", headerName: "종목", flex: 1 },
    { field: "type", headerName: "유형", flex: 1 },
    { field: "close", headerName: "종가", valueFormatter: (p) => formatNumber(p.value), flex: 1 },
    { field: "triggerPrice", headerName: "트리거", valueFormatter: (p) => formatNumber(p.value), flex: 1 },
    { field: "note", headerName: "메모", flex: 2 }
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  return (
    <div className="ag-theme-quartz" style={{ width: "100%", height: 520 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        pagination={true}
        paginationPageSize={50}
      />
    </div>
  );
}