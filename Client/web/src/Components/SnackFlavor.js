import React from 'react'
import { connect } from 'react-redux'

class SnackFlavor extends React.Component {
    //todo: snack pode virar request depois de escolher o produto
    render() {
        const { snack, flavors, goAhead, goBack } = this.props

        return (
            <>
                <h3>{snack.name}</h3>

                <div style={styles.content}>
                    {flavors && flavors.map(flavor => (
                        <div className="custom-control custom-radio">
                            <input type="radio" name={`measure_for_${snack.id}`} className="custom-control-input" id={flavor.id} />
                            <label className="custom-control-label" for={flavor.id}>
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

const mapStateToProps = ({ snacks, flavors }, { id }) => ({
    snack: snacks[id],
    flavors: flavors[id]

})

export default connect(mapStateToProps)(SnackFlavor)