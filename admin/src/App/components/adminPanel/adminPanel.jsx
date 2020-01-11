// modules
import * as R from 'ramda'
import React from 'react'
import { Typography } from '@material-ui/core'

const AdminPanel = ({
  creatingAverageTime,
  numberOfReservedRoom,
  throughput,
  averageResponseTime,
}) => (
  <div style={{ margin: '20px' }}>
    <Typography>creatingAverageTime {creatingAverageTime} ms </Typography>
    <Typography>numberOfReservedRoom: {numberOfReservedRoom}</Typography>
    <Typography>throughput: {throughput} request in last 24 hours</Typography>
    <Typography>averageResponseTime: {averageResponseTime} ms</Typography>
  </div>
)

export default AdminPanel
