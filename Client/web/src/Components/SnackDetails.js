import React from 'react'
import { connect } from 'react-redux'

import logo from '../Assets/loadinngSnackData.gif'

import ProgressButtons from './ProgressButtons'

import { handleCloseOrder, resetRequest } from '../Actions/request'

class SnackDetails extends React.Component {

    state = {
        requestingOrder: false
    }

    render() {

        const { requestingOrder } = this.state
        const { request, goBack } = this.props

        const totalPreparationTime = this.getTotalPreparationTime(request)

        const totalPrice = this.getTotalPrice(request)

        const additionalFormat = (additional) => {

            const valueText = 
                additional.additionalPrice
                ? ` (R$ ${additional.additionalPrice})`
                : ''

            return `${additional.name}${valueText}`
        }

        return (
            <>
                <div style={styles.content}>
                    <p> <b>Sabor:</b> {request.flavor.name}</p>
                    <p> <b>Tamanho:</b> {request.measure.size} ({request.measure.description}) R${request.measure.price}</p>
                    <p><b>Tempo de preparo:</b> {new Date(totalPreparationTime / 10000).getMinutes()}:00 minutos </p>
                    <p><b>Valor total:</b> R${totalPrice}</p>

                    {(request.additional && request.additional.length && <p><b>Adicionais:</b> {request.additional
                        .reduce((acc, current) => `${acc}, ${additionalFormat(current)}`, '')
                        .substring(1)}</p>) || ''}
                </div>
                {
                    requestingOrder
                        ? <img className="mx-auto" src={logo} style={styles.loadingDataGif} />
                        : (<ProgressButtons
                            goAheadText="Pode Fazer!"
                            goAhead={this.onCloseOrder}
                            goBack={goBack}
                        />)
                }
            </>)
    }

    onCloseOrder = () => {
        const { handleCloseOrder, request, goAhead, resetRequest } = this.props

        this.setState({ requestingOrder: true })

        const nextAction = () => {
            this.setState({ requestingOrder: false })
            goAhead()
            resetRequest(request.id)
        }

        var requestDTO = {
            ...request,
            preparationTime: this.getTotalPreparationTime(request),
            totalPrice: this.getTotalPrice(request)
        }

        handleCloseOrder(requestDTO, nextAction)
    }

    getTotalPreparationTime = request =>
        (request.measure.preparationTime)
        + (request.flavor.preparationTime || 0)
        + (request.additional || [])
            .map(additional => additional.preparationTime || 0)
            .reduce((acc, current) => acc + current, 0)

    getTotalPrice = request =>
        request.measure.price
        + (request.additional || [])
            .map(additional => additional.additionalPrice || 0)
            .reduce((acc, current) => acc + current, 0)
}

const styles = {
    content: {
        textAlign: 'left',
        paddingLeft: '8px'
    },
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
    loadingDataGif: {
        height: '35px',
        width: '35px'
    }
}

const mapStateToProps = ({ requests }, { id }) => ({
    request: requests[id]
})

const mapDispatchToProps = dispatch => ({
    handleCloseOrder: (request, nextAction) => dispatch(handleCloseOrder(request, nextAction)),
    resetRequest: snackId => dispatch(resetRequest(snackId))

})

export default connect(mapStateToProps, mapDispatchToProps)(SnackDetails)