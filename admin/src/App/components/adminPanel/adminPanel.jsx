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
    <Typography>creatingAverageTime {creatingAverageTime}</Typography>
    <Typography>numberOfReservedRoom: {numberOfReservedRoom}</Typography>
    <Typography>throughput: {throughput}</Typography>
    <Typography>averageResponseTime: {averageResponseTime}</Typography>
  </div>
)

export default AdminPanel
