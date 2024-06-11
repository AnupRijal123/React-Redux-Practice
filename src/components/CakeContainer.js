import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
function CakeContainer(props) {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <div>
            <h2>Number of cakes= {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);