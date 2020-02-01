import React from 'react'
import { connect } from 'react-redux'

import SnackView from './SnackView'
import SnackMeasure from './SnackMeasure'
import SnackFlavor from './SnackFlavor'
import SnackAdditional from './SnackAdditional'
import SnackDetails from './SnackDetails'

class SnackCard extends React.Component {

    state = {
        progress: 0,
        focused: false
    }

    progressView = [

    ]

    render() {

        const viewsFunction = id => {
            return [
                <SnackView id={id} goAhead={this.goAhead} goBack={this.goBack} />,
                <SnackMeasure id={id} goAhead={this.goAhead} goBack={this.goBack} />,
                <SnackFlavor id={id} goAhead={this.goAhead} goBack={this.goBack} />,
                <SnackAdditional id={id} goAhead={this.goAhead} goBack={this.goBack} />,
                <SnackDetails id={id} goAhead={this.reset} goBack={this.goBack} />
            ]
        }

        const { id, snack, request } = this.props

        const { focused, progress } = this.state
        const { card } = styles

        const cardFocusedtyle = focused ? styles.cardFocused : {}

        const cardStyle = { ...card, ...cardFocusedtyle }

        const views = viewsFunction(id)

        return (
            <div
                className="card"
                style={cardStyle}
                onMouseEnter={this.onFocus}
                onMouseLeave={this.onFocusLost}
            >
                {request && <h4>{request.name} {request.flavor && ` de ${request.flavor.name}`} {request.measure && request.measure.size}</h4>}
                {request && <hr style={styles.line} />}

                {views[progress]}
            </div>
        )
    }

    goAhead = () => {
        this.setState(({ progress }) => ({ progress: ++progress }))
    }

    reset = () => {
        this.setState(({ progress: 0 }))
    }

    goBack = () => {
        this.setState(({ progress }) => ({ progress: --progress }))
    }

    onFocus = () => {
        this.setState({ focused: true })
    }

    onFocusLost = () => {
        this.setState({ focused: false })
    }
}

const styles = {
    card: {
        width: '18rem',
        height: '390px',
        textAlign: 'center',
        padding: '5px',
        transition: '0.2s'
    },
    cardFocused: {
        boxShadow: '5px 5px 10px #888888'
    },
    line: {
        margin: '0px',
        marginTop: '1px',
    }
}

const mapStateToProps = ({ snacks, requests }, { id }) => ({
    snack: snacks[id],
    request: requests[id]
})

export default connect(mapStateToProps)(SnackCard)