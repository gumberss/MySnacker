import React from 'react'
import { connect } from 'react-redux'

import { handleGetSnackData } from '../Actions/snacks'
import { startRequest } from '../Actions/request'

import logo from '../Assets/loadinngSnackData.gif'

class SnackView extends React.Component {

    state = {
        focused: false,
        loadingData: false
    }

    render() {
        const { snack } = this.props
        const { loadingData } = this.state

        return (
            <>
                <img
                    style={styles.image}
                    src="https://cdn.awsli.com.br/800x800/163/163535/produto/6024236/de8940b4fa.jpg"
                />
                <h4>{snack.name}</h4>

                {
                    loadingData
                        ? <img className="mx-auto" src={logo} style={styles.loadingDataGif} />
                        : (<button
                            className="btn btn-outline-primary"
                            onClick={this.onSelectSnack}
                        >
                            Quero esse!
                        </button>)
                }
            </>)
    }

    onSelectSnack = () => {
        const { snack, goAhead, startRequest, handleGetSnackData } = this.props

        this.setState({ loadingData: true })

        const nextAction = () => {

            startRequest(snack)

            this.setState({ loadingData: false })

            goAhead()
        }

        handleGetSnackData(snack.id, nextAction)
    }

    onFocus = () => {
        this.setState({ focused: true })
    }
    onFocusLost = () => {
        this.setState({ focused: false })
    }
}

const styles = {
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        margin: '8px',
    },
    loadingDataGif: {
        height: '35px',
        width: '35px'
    }
}

const mapStateToProps = ({ snacks }, { id }) => ({
    snack: snacks[id]
})

const mapDispatchToProps = dispatch => ({
    handleGetSnackData: (snackId, onLoadedSnackData) => dispatch(handleGetSnackData(snackId, onLoadedSnackData)),
    startRequest: snackId => dispatch(startRequest(snackId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackView)