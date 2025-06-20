import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
type tSeries = {
    'Максимальная стоимость активов': boolean,
    'Средняя стоимость активов': boolean,
    'Минимальная стоимость активов': boolean,
}
type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<
        React.SetStateAction<tSeries>>;

    isBar: boolean;
    setIsBar: React.Dispatch<
        React.SetStateAction<boolean>>
};
function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === "bar");
    }

    return (
        <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ m: "20px 0" }}
        >
            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={(isBar) ? "bar" : "dot"}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel
                        value="bar"
                        control={
                            <Radio checked={isBar} />
                        }
                        label="Гистограмма"
                        
                    />
                    <FormControlLabel
                        value="dot"
                        control={
                            <Radio checked={!isBar} />
                        }
                        label="Линейная" 
                        
                    />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series["Максимальная стоимость активов"]}
                            onChange={handleChange}
                            name="Максимальная стоимость активов" />
                    }
                    label="максимальную стоимость" />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series["Средняя стоимость активов"]}
                            onChange={handleChange}
                            name="Средняя стоимость активов" />}
                    label="среднюю стоимость" />
                <FormControlLabel

                    control={
                        <Checkbox
                            checked={series["Минимальная стоимость активов"]}
                            onChange={handleChange}
                            name="Минимальная стоимость активов" />}
                    label="минимальную стоимость" />
            </FormControl>
        </Stack>
    )
}
export default SettingChart;