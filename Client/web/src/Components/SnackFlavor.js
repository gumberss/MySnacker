import React from 'react'
import { connect } from 'react-redux'

import { selectFlavor } from '../Actions/request'

class SnackFlavor extends React.Component {

    render() {
        const { request, flavors, goAhead, goBack } = this.props

        return (
            <>
                <h3>{request.name} {request.measure.size}</h3>

                <div style={styles.content}>
                    {flavors && flavors.map(flavor => (
                        <div className="custom-control custom-radio" key={flavor.id}>
                            <input
                                type="radio"
                                name={`flavor_for_${request.id}`}
                                className="custom-control-input"
                                id={flavor.id}
                                onChange={this.handleFlavorChange}
                                value={flavor.id}
                            />
                            <label className="custom-control-label" htmlFor={flavor.id}>
                                {flavor.name} {flavor.preparationTime ? `(Adicional ${new Date(flavor.preparationTime / 10000).getMinutes()}:00 minutos)` : ''}
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


    handleFlavorChange = changeEvent => {
        const { id, selectFlavor, flavors } = this.props
        const { value } = changeEvent.target

        const selectedFlavor = flavors.find(flavor => flavor.id === value)

        selectFlavor(id, selectedFlavor)
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

const mapStateToProps = ({ requests, flavors }, { id }) => ({
    request: requests[id],
    flavors: flavors[id]

})

const mapDispatchToProps = dispatch => ({
    selectFlavor: (snackId, flavor) => dispatch(selectFlavor(snackId, flavor))
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackFlavor)