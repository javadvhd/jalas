// modules
import { connect } from 'react-redux'
// components
import AdminPanel from './adminPanel'
import { getState } from '../../../setup/redux'
import { navigate } from '@reach/router/lib/history'
import {
  creatingAverageTimeView,
  numberOfReservedRoomView,
  throughputView,
  averageResponseTimeView,
} from '../../main/app.reducer'

const mapStateToProps = () => ({
  creatingAverageTime: creatingAverageTimeView(),
  numberOfReservedRoom: numberOfReservedRoomView(),
  throughput: throughputView(),
  averageResponseTime: averageResponseTimeView(),
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
