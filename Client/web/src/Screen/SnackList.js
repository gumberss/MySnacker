import React from 'react'
import { connect } from 'react-redux'

import { handleGetSnacks } from '../Actions/snacks'
import SnackCard from '../Components/SnackCard'

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

        if (!loadedSnacks) return (<div> Calma </div>)


        return (<div className="container">
            {snackIds.map(snackId => <SnackCard key={snackId} id={snackId} />)}
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