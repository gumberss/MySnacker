import React from 'react'
import { connect } from 'react-redux'

import { selectAdditional } from '../Actions/request'

class SnackAdditional extends React.Component {

    render() {
        const { request, additional, goAhead, goBack } = this.props

        return (
            <>
                <h3>{request.name} {request.measure.size}</h3>

                <div style={styles.content}>
                    {additional && additional.map(additionalData => (

                        <div
                            className="custom-control custom-switch"
                            key={additionalData.id}
                        >
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id={additionalData.id}
                                onChange={this.handleAdditionalChange}
                                value={additionalData.id}
                                checked={!!(request.additional && request.additional.some(additional => additional.id === additionalData.id))}
                            />
                            <label className="custom-control-label" htmlFor={additionalData.id}>
                                {additionalData.name} {additionalData.preparationTime ? `(Adicional ${new Date(additionalData.preparationTime / 10000).getMinutes()}:00 minutos)` : ''}
                            </label>
                        </div>))}
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

    handleAdditionalChange = changeEvent => {
        const { id, selectAdditional, additional, request } = this.props
        const { value } = changeEvent.target

        const addedAdditional = request.additional || []

        let newAdditional;

        if (addedAdditional.some(additional => additional.id === value)) {
            newAdditional = addedAdditional.filter(additional => additional.id !== value)
        } else {

            const selectedAdditional = additional.find(additional => additional.id === value)
            newAdditional = [...addedAdditional, selectedAdditional]
        }

        selectAdditional(id, newAdditional)
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

const mapStateToProps = ({ requests, additional }, { id }) => ({
    request: requests[id],
    additional: additional[id]
})

const mapDispatchToProps = dispatch => ({
    selectAdditional: (snackId, additional) => dispatch(selectAdditional(snackId, additional))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackAdditional)