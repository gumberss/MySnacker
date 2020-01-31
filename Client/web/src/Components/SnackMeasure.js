import React from 'react'
import { connect } from 'react-redux'

class SnackMeasure extends React.Component {

    render() {
        const { snack, measures, goAhead, goBack } = this.props

        return (
            <>
                <h3>{snack.name}</h3>

                <div style={styles.content}>
                    {measures && measures.map(measure => (
                        <div className="custom-control custom-radio">
                            <input type="radio" name={`measure_for_${snack.id}`} className="custom-control-input" id={measure.id} />
                            <label className="custom-control-label" for={measure.id}>
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