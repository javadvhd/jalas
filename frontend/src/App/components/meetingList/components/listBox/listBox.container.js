// modules
import { connect } from 'react-redux'

import listBox from './listBox'

const mapStateToProps = state => {}

const mapDispatchToProps = (_, { meeting: { _id } }) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(listBox)
