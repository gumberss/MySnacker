import React from 'react'
import { connect } from 'react-redux'

import { handleGetSnacks } from '../Actions/snacks'
import SnackCard from '../Components/SnackCard'

import logo from '../Assets/loadinngSnackData.gif'

class SnackList extends React.Component {

    state = {
        loadedSnacks: false
    }

    componentDidMount() {

        const { handleGetSnacks } = this.props

        const setLoadedState = propName => () =>
            this.setState({
                [propName]: true
            })

        const onLoadedSnacks = setLoadedState('loadedSnacks')

        handleGetSnacks(onLoadedSnacks)
    }

    render() {
        const { loadedSnacks } = this.state
        const { snackIds } = this.props

        return (<div className="container">
            {!loadedSnacks && (<img className="mx-auto" src={logo} />)}
            {loadedSnacks && snackIds.map(snackId => <SnackCard key={snackId} id={snackId} />)}
        </div>)
    }
}

const mapStateToProps = ({ snacks }) => ({
    snackIds: Object.keys(snacks)
})

const mapDispatchToProps = dispatch => ({
    handleGetSnacks: onLoadedSnacks => dispatch(handleGetSnacks(onLoadedSnacks))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackList)