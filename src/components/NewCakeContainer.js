import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    // const value = useSelector((state) => {
    //     // console.log(state.cake.numberOfCakes)
    //     return state.cake.numberOfCakes
    // });
    console.log(props);
    return (
        <div>
            <h2>For Action Payload</h2>
            <h2>Number of cakes= {props.hello.cake.numberOfCakes}</h2>
            <input
                type="number"
                value={number}
                onChange={(event) => {
                    console.log(event.target.value)
                    setNumber(event.target.value);
                }}
            />
            <button onClick={() => props.buycake(number)}>buy{number}cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hello: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buycake: (number) => dispatch(buyCake(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);