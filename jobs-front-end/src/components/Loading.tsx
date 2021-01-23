import React from 'react'
import {
  CircularProgress,
  Grid,
  Box
} from '@material-ui/core'


export default function Loading() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Box color='primary'>
        <CircularProgress
          color={'primary'}
          size={70}
        />
      </Box>
    </Grid>
  )
}
