import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { formatNumber, formatDateTime } from "../../utils/format";

export default function HoldingsGrid({ rows }) {
  const colDefs = [
    { field: "symbol", headerName: "종목", flex: 1 },
    { field: "buyDate", headerName: "매수일", valueFormatter: (p) => formatDateTime(p.value), flex: 1 },
    { field: "buyPrice", headerName: "매수가", valueFormatter: (p) => formatNumber(p.value), flex: 1 },
    { field: "maxClose", headerName: "최고 종가", valueFormatter: (p) => formatNumber(p.value), flex: 1 },
    { field: "trailStop", headerName: "트레일링(0.9)", valueFormatter: (p) => formatNumber(p.value), flex: 1 },
    { field: "status", headerName: "상태", flex: 1 }
  ];

  const defaultColDef = { sortable: true, filter: true, resizable: true };

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