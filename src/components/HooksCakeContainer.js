import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
function HooksCakeConatainer() {
    const value = useSelector((state) => {
        return state.cake.numberOfCakes;
    });
    console.log(value);

    const makeDispatch = useDispatch();
    //useDispatch() returns dispatch from redux store

    return (
        <div>
            <h1>With hooks</h1>
            <h2>Number of cakes={value}</h2>
            <button onClick={() => makeDispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
export default HooksCakeConatainer;