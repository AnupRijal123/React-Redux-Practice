import { connect } from 'react-redux';
import { fetchUsers } from './redux/user/userActions';
import { useEffect } from 'react';
function UserContainer(props) {
    useEffect(() => {
        console.log(props);
        props.makeFetch();
    }, []);
    return (
        <div>
            {props.userData.loading ? (
                <h2>Loading</h2>
            ) : (props.userData.error ? (
                <h2>{props.userData.error}</h2>
            ) : (
                props.userData.users.map((user) => (
                    <h3>{user.name}</h3>
                ))
            ))}
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        makeFetch: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);