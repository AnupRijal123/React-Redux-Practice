import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
function CakeContainer(props) {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <div>
            <h1>With connect</h1>
            <h2>Number of cakes= {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes,
    }
}
// yo state redux store bata hamle pako because of Provider in app.js

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
//yo dispatch redux store bata pako beacuse of Provider in app.js

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);