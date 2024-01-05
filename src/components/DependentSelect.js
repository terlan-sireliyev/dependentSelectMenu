import React, { useState } from 'react'
import styleDepend from './dependent.module.css'
import counteries from './data.json'
export default function DependentSelect() {
    const [cities, setCities] = useState([]);
    const CountryChange = (e) => {
        const state = counteries.find(item => item.name === e.target.value);
        const stateExtract = state.states;
        setCities(stateExtract);
    }
    return (
        <div>
            <div className={styleDepend.baseDep}>
                <h3>Dependent Menu</h3>
                <select className='form-control w-25' onChange={CountryChange}>
                    <option value="">Country</option>
                    {
                        counteries.map((ctr, index) => {
                            return <option value={ctr.name} key={index}>{ctr.name}</option>
                        })
                    }
                </select>

                <select className='form-control w-25 mt-3'>
                    <option value="">City</option>
                    {
                        cities.map((ctr) => {
                            return <option value={ctr.name}>{ctr.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}
