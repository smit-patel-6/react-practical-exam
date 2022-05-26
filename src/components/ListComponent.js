import { useSelector, useDispatch} from 'react-redux';
import { removeUser} from '../actions/actions'

function ListComponent() {

    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.userReducer)
    
   
    return (
        <>
            <center>
                <h1>List Component</h1>
                <br />
                <br />
                
                {
                    mystate.users ? (
                        mystate.users.map((value) =>
                            <>
                                {value.gender == 'male'?(
                                    <>
                                        <h4> Mr. {value.firstname} {value.lastname}    <a className='text-danger' onClick={() => dispatch(removeUser(value))}>x</a></h4>
                                    </>
                                ):(
                                    <>
                                        {
                                            value.gender == 'female'?(
                                                <>
                                                    <h4> Ms. {value.firstname} {value.lastname}    <a className='text-danger' onClick={() => dispatch(removeUser(value))}>x</a></h4>
                                                </>
                                            ):(<>
                                                    <h4>{value.firstname} {value.lastname}    <a className='text-danger' onClick={() => dispatch(removeUser(value))}>x</a></h4>
                                            </>)
                                        }
                                    </>
                                )}
                            </>
                        )
                    ) : (
                        <>
                        
                        </>
                    )
                }

            </center>
        </>
    )
}

export default ListComponent;