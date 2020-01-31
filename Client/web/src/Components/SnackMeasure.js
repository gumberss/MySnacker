import React from 'react'
import { connect } from 'react-redux'

class SnackMeasure extends React.Component {

    render() {
        const { snack, measures, goAhead, goBack } = this.props

        return (
            <>
                <h3>{snack.name}</h3>

                <div style={styles.content}>
                    {measures && measures.map(mesure => (
                        <div className="custom-control custom-radio">
                            <input type="radio" name={`measure_for_${snack.id}`} className="custom-control-input" id={mesure.id} />
                            <label className="custom-control-label" for={mesure.id}>{mesure.size} {measures.description}</label>
                        </div>
                    ))}
                </div>

                <div style={styles.progressButtonsContainer}>
                    <div style={styles.progressButtonsContainerData}>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={goBack}
                        >
                            Voltar
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={goAhead}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </>)
    }

    onFocus = () => {
        this.setState({ focused: true })
    }
    onFocusLost = () => {
        this.setState({ focused: false })
    }
}

const styles = {
    content: {
        textAlign: 'left',
        paddingLeft: '8px'
    },
    progressButtonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    progressButtonsContainerData: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '6px'
    }
}

const mapStateToProps = ({ snacks, measures }, { id }) => ({
    snack: snacks[id],
    measures: measures[id]

})

export default connect(mapStateToProps)(SnackMeasure)