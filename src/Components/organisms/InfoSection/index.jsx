/* eslint-disable no-unused-vars */
import { useState } from 'react';
import InfoColumn from 'components/organisms/InfoColumn';
import Grid from 'components/atoms/Grid';
import Chart from 'react-apexcharts';
import { options } from 'helpers/chartOptions';
import { Section } from './InfoSection.styles';

function InfoSection() {
  const [series, setSeries] = useState([
    {
      data: [50, 50, 250, 50, 500, 300, 350],
    },
  ]);

  const [chartOptions, setChartOptions] = useState({
    ...options,
    colors: ['#40DDFF'],
  });

  const [chartOptions2, setChartOptions2] = useState({
    ...options,
    colors: ['#FF409A'],
  });

  const [chartOptions3, setChartOptions3] = useState({
    ...options,
    colors: ['#16B4EB'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#23E73C', '#16B4EB'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [5, 119],
      },
    },
  });

  const [chartOptions4, setChartOptions4] = useState({
    ...options,
    colors: ['#3EDEF6'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#E27034', '#3EDEF6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [30, 100],
      },
    },
  });

  const [chartOptions5, setChartOptions5] = useState({
    ...options,
    colors: ['#CB963D'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#50E375', '#CB963D'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [23, 102],
      },
    },
  });

  const [chartOptions6, setChartOptions6] = useState({
    ...options,
    colors: ['#3D84CB'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#B650E3', '#3D84CB'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [19, 102],
      },
    },
  });

  const [chartOptions7, setChartOptions7] = useState({
    ...options,
    colors: ['#3D76CB'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#50E3A0', '#3D76CB'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [35, 102],
      },
    },
  });

  return (
    <Section>
      <Grid md={2} lg={4} xxl={7} gap={25}>
        <InfoColumn
          title={
            <span>
              Total unit
              <br /> sold
            </span>
          }
          price="38k"
          legendColor="#13B1E6">
          <Chart options={chartOptions} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              Total
              <br /> transactions
            </span>
          }
          price="$159K"
          legendColor="#E73DBD">
          <Chart options={chartOptions2} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              Total Reward <br />
              points
            </span>
          }
          price="$685k"
          legendColor="#50E3C2">
          <Chart options={chartOptions3} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              Total Reward <br /> cost
            </span>
          }
          price="$19k"
          legendColor="#DC743B">
          <Chart options={chartOptions4} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              Lift generated <br /> %
            </span>
          }
          price="$98%"
          legendColor="#7EC760">
          <Chart options={chartOptions5} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              Total Campaigns <br /> cost
            </span>
          }
          price="$22k"
          legendColor="#8466D9">
          <Chart options={chartOptions6} series={series} type="line" width={70} height={35} />
        </InfoColumn>
        <InfoColumn
          title={
            <span>
              ROI by <br /> Campaign
            </span>
          }
          price="$36k"
          legendColor="#48D997">
          <Chart options={chartOptions7} series={series} type="line" width={70} height={35} />
        </InfoColumn>
      </Grid>
    </Section>
  );
}

export default InfoSection;
