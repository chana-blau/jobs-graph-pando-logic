import React, { useEffect } from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../store/actions';
import Loading from './Loading';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'


charts(FusionCharts);

export default function Graph() {

  const dispatch = useDispatch()
  const data:any = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (

    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={7}>
        {data.loading && <Loading />}
        <ReactFusioncharts
          type="scrollcombidy2d"
          width="100%"
          height="70%"
          dataFormat="JSON"
          dataSource={data}
        />
        {data.error&&<Alert severity="error">Something goes wrong. Please try again later.</Alert>}
      </Grid>
    </Grid>)
}
