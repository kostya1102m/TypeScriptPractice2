import billioners from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container";

function PersonsGrid() {
    const rows: GridRowsProp = billioners;
    const columns: GridColDef[] = [
        { field: 'Имя', headerName: 'Имя', flex: 0.5 },
        { field: 'Стоимость чистых активов (млрд USD)', headerName: 'Стоимость (млрд USD)', flex: 1 },
        { field: 'Возраст', headerName: 'Возраст', flex: 0.5 },
        { field: 'Страна', headerName: 'Страна', flex: 0.5 },
        { field: 'Источник доходов', headerName: 'Источник доходов', flex: 1 },
        { field: 'Индустрия', headerName: 'Индустрия', flex: 1 },
        { field: 'Позиция в Forbes', headerName: 'Позиция', flex: 0.5 },
    ];
    return (
        <Container
            maxWidth="lg"
            sx={{
                height: '700px',
                mt: '20px'
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                showToolbar={true}
                getRowId={(row) => row['Позиция в Forbes']}
            />
        </Container>
    );
} export default PersonsGrid;