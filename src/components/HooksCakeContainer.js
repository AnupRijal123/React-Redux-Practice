import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
function HooksCakeConatainer() {
    const value = useSelector((state) => {
        return state.numberOfCakes;
    });
    console.log(value);

    const makeDispatch = useDispatch();

    return (
        <div>
            <h1>With hooks</h1>
            <h2>Number of cakes={value}</h2>
            <button onClick={() => makeDispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
export default HooksCakeConatainer;