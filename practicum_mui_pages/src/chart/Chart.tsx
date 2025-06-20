import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import * as React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GroupGrid from "./components/GroupGrid";
import GroupChart from "./components/GroupChart";
import { years, countries, industries } from "./groupdata";
import { Group } from '@mui/icons-material';

type tSelect = "Возраст" | "Страна" | "Индустрия";

function Chart() {

    const [group, setGroup] = React.useState<tSelect>("Страна");

    const [groupData, setGroupData] = React.useState(countries);

    const handleChange = (event: SelectChangeEvent<tSelect>) => {
        setGroup(event.target.value as tSelect);

        if (event.target.value === "Страна") {
            setGroupData(countries);
        } else if (event.target.value === "Индустрия") {
            setGroupData(industries);
        } else if (event.target.value === "Возраст") {
            setGroupData(years);
        }
    };

    return (
        <>
            <Navbar active="3" />
            <Box 
                sx={{ 
                    width: "200px", 
                    m: "auto",
                    marginTop: "10px"
                }}
            >
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={ group }
                        label="Группировать по"
                        onChange={ handleChange }
                    >
                        <MenuItem value="Индустрия">Индустрии</MenuItem>
                        <MenuItem value="Возраст">Возрасту</MenuItem>
                        <MenuItem value="Страна">Стране</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <GroupChart data={ groupData }/>
            <GroupGrid data={ groupData }/>
            <Footer />
        </>
    );
}

export default Chart;