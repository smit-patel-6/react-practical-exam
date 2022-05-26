import { useState } from 'react';
import { useDispatch} from 'react-redux'
import { addUser} from '../actions/actions'

function InputComponent() {

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [error,setError] = useState(false);

    const dispatch = useDispatch();

    const submitData = () => {

        const data = {
            firstname:firstname,
            lastname:lastname,
            gender:gender
        }
        if(firstname.length > 0){
            dispatch(addUser(data));
        }else{
            setError(true)
        }
        
    }

    return (
        <>
            <center>
                <h1>Input Component</h1>
                <br/>
                <br />
                <form>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control textfield" 
                        placeholder="First Name" 
                        id="fname"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control textfield" 
                        placeholder="Last Name" 
                        id="lname"
                        onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group textfield">
                        <select className='form-select' onChange={(e) => setGender(e.target.value)}>
                            <option value="" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                    <br />
                    {
                        error?(
                            <>
                                <h6 className='text-danger'> First name is required</h6>
                            </>
                        ):(
                            <>
                            </>
                        )
                    }
                    <a onClick={submitData} className="btn btn-primary">Submit</a>
                    
                </form>
            </center>
        </>
    )
}

export default InputComponent;