import React from 'react'
import { connect } from 'react-redux'

import SnackView from './SnackView'
import SnackMeasure from './SnackMeasure'
//import SnackFlavor from './SnackFlavor'

class SnackCard extends React.Component {

    state = {
        progress: 0,
        focused: false
    }

    progressView = [

    ]

    render() {

        const viewsFunction = (id, goAhead, goBack) => {
            return [
                <SnackView id={id} goAhead={goAhead} goBack={goBack} ></SnackView >,
                <SnackMeasure id={id} goAhead={goAhead} goBack={goBack} > </SnackMeasure>,
                //<SnackFlavor id={id} goAhead={goAhead} goBack={goBack} > </SnackFlavor>
            ]
        }

        const { id } = this.props

        const { focused, progress } = this.state
        const { card } = styles

        const cardFocusedtyle = focused ? styles.cardFocused : {}

        const cardStyle = { ...card, ...cardFocusedtyle }

        const views = viewsFunction(id, this.goAhead, this.goBack)

        return (
            <div
                className="card"
                style={cardStyle}
                onMouseEnter={this.onFocus}
                onMouseLeave={this.onFocusLost}
            >
                 {views[progress]}
            </div>
        )
    }

    goAhead = () => {
        this.setState(({ progress }) => ({ progress: ++progress }))
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
}

const mapStateToProps = ({ snacks }, { id }) => ({
    snack: snacks[id]
})

export default connect(mapStateToProps)(SnackCard)