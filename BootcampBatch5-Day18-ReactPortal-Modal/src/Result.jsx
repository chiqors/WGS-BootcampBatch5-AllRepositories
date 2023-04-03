import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './actions';
import { useEffect } from 'react';

const Result = () => {
    const result = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="result">
            <h2>Result</h2>
            <p>First Name: {result.firstName}</p>
            <p>Last Name: {result.lastName}</p>
            <p>Employed: {result.employed ? 'Yes' : 'No'}</p>
            <p>Education: {result.education}</p>
            <p>Expertise: </p>
            {result.expertise != undefined ? (
            <ul>
                {result.expertise.map((expertise, index) => (
                    <li key={index}>{expertise}</li>
                ))}
            </ul>
            ) : (
                <p>No expertise selected</p>
            )}
            <p>Preferred Technology: {result.preferred_tech}</p>
            <p>Notes: {result.notes}</p>
        </div>
    );
}

export default Result;