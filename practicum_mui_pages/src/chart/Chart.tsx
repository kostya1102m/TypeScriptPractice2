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
import { years, countries, types } from "./groupdata";
import { Group } from '@mui/icons-material';

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {

    const [group, setGroup] = React.useState<tSelect>("Страна");

    const [groupData, setGroupData] = React.useState(countries);

    const handleChange = (event: SelectChangeEvent<tSelect>) => {
        setGroup(event.target.value as tSelect);

        if (event.target.value === "Страна") {
            setGroupData(countries);
        } else if (event.target.value === "Год") {
            setGroupData(years);
        } else if (event.target.value === "Тип") {
            setGroupData(types);
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
                        <MenuItem value="Страна">Стране</MenuItem>
                        <MenuItem value="Год"> Году</MenuItem>
                        <MenuItem value="Тип"> Типу</MenuItem>
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