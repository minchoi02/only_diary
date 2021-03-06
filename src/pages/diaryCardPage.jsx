import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Diary from '../components/diary/diary';
import { getOnePrivateValue } from '../service/firebase/database';

const DiaryCardPage = () => {
    const {id} = useParams();
    const [diary, setDiary] = useState(null);
    const currentUser = useSelector(state => state.user.currentUser);
    const history = useHistory();

    const handlePrivateDiary = useCallback(async () => {
        try{
            const diaryInfo = await getOnePrivateValue(currentUser?.uid,id);
            setDiary(diaryInfo);
        }catch(err){
            console.log('err',err);
        }
    },[currentUser,id]);

    useEffect(()=>{
        handlePrivateDiary();
    },[handlePrivateDiary]);

    useEffect(()=>{
        if(!currentUser){
            history.push('/login');
        }
    },[currentUser,history]);

    return (
        <div>
            <Diary diary={diary}/>
        </div>
    )
}

export default DiaryCardPage
