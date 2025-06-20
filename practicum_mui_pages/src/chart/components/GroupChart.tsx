import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";
import SettingChart from './SettingChart';

import * as React from 'react';


type GroupProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupProps) {
    const chartSetting = {
        yAxis: [{ label: 'Высота (м)' }],
        height: 400,
    };

    const [series, setSeries] = React.useState({
        'Максимальная стоимость активов': true,
        'Средняя стоимость активов': false,
        'Минимальная стоимость активов': false
    });

    const [isBar, setIsBar] = React.useState(true);

    //проверка что выбран только один чекбокс
    const isOnlyOneChecked = Object.entries(series).filter(item => item[1] == true).length == 1;

    // если да то ставим значение в лейбл
    const barLabel = isOnlyOneChecked ? 'value' : undefined;


    let seriesY = Object.entries(series)
        .filter(item => item[1] == true)
        .map(item => {
            return { "dataKey": item[0], "label": item[0] }
        })


    return (
        <Container maxWidth="xl">
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    barLabel={barLabel} // передали значение в лейбл
                    slotProps={{
                        legend: {
                            position: {
                                vertical: 'bottom',
                                horizontal: 'center',
                            }
                        }
                    }}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: {
                                vertical: 'bottom',
                                horizontal: 'center'
                            },
                        },
                    }}
                    {...chartSetting}
                />
            )}
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
        </Container>
    )
}
export default GroupChart;