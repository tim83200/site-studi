import React from 'react';
import { useEffect, useState } from 'react';

export const Hello = () => {
    const [initialState, setInititialState] = useState('eminem')

    useEffect(() => {
        fetch('/api/').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setInititialState(jsonResponse))
    },[])

    console.log(initialState)
    return <div>Hey</div>
}