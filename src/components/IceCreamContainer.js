import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';
function IceCreamContainer() {
    const value = useSelector((state) => {
        return state.iceCream.numberOfIceCreams;
    });
    const makeDispatch = useDispatch();
    console.log(value)
    return (
        <div>
            <h2>No. of icecreams= {value}</h2>
            <button onClick={() => makeDispatch(buyIceCream())}>Buy icecream</button>
        </div>
    )
}

export default IceCreamContainer;