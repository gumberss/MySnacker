import React from 'react'
import { connect } from 'react-redux'
import { selectMeasure } from '../Actions/request'

class SnackMeasure extends React.Component {

    render() {
        const { request, measures, goAhead, goBack } = this.props

        return (
            <>
                <h3>{request.name} {request.measure && request.measure.size}</h3>

                <div style={styles.content}>
                    {measures && measures
                    .sort((first, second) => first.price - second.price)
                    .map(measure => (
                        <div className="custom-control custom-radio" key={measure.id}>
                            <input
                                type="radio"
                                name={`measure_for_${request.id}`}
                                className="custom-control-input"
                                id={measure.id}
                                onChange={this.handleMeasureChange}
                                value={measure.id}
                                checked={!!(request.measure && request.measure.id === measure.id)}
                            />
                            <label className="custom-control-label" htmlFor={measure.id}>
                                {measure.size} {measure.description}
                                {measure.price && (<><br /> {`(Adicional R$${measure.price})`}</>)}
                                {measure.preparationTime && (<><br /> {` (Adicional ${new Date(measure.preparationTime / 10000).getMinutes()}:00 minutos)`}</>)}
                            </label>
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
                            disabled={!request.measure}
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </>)
    }

    handleMeasureChange = changeEvent => {
        const { id, selectMeasure, measures } = this.props
        const { value } = changeEvent.target

        const selectedMeasure = measures.find(measure => measure.id === value)

        selectMeasure(id, selectedMeasure)
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

const mapStateToProps = ({ snacks, measures, requests }, { id }) => ({
    snack: snacks[id],
    measures: measures[id],
    request: requests[id]
})

const mapDispatchToProps = dispatch => ({
    selectMeasure: (snackId, measure) => dispatch(selectMeasure(snackId, measure))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackMeasure)