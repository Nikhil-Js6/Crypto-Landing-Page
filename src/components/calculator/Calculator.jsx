import './calculator.scss';
import { AddCircle, RemoveCircle, RemoveCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Calculator = () => {

    const [initial, setInitial] = useState(200);
    const [monthly, setMonthly] = useState(200);
    const [years, setYears] = useState(5);
    const [amount, setAmount] = useState(monthly * years * 12 + initial);
    const [projected, setProjected] = useState(7482);
    const [worse, setWorse] = useState(7904);
    const [better, setBetter] = useState(7087);

    useEffect(() => {
        setAmount(monthly * years * 12 + initial);
    }, [monthly]);

  return (
    <div className='calculator'>
        <div className='calcTop'>
            <h1 className='calcHeading'>How your could money <span>grow</span></h1>
        </div>
        <div className='calcBottom'>
            <div className='input'>
                <div className='inputElement'>
                    <span className='inputHeading'>Initial Investment</span>
                    <span className='inputSpan'>
                        <RemoveCircle 
                            className='inputIcon'
                            onClick={() => setInitial(initial > 100 ? initial - 100 : 100)}
                        />
                        <span className='inputData'>${initial}</span>
                        <AddCircle
                            className='inputIcon'
                            onClick={() => setInitial(initial < 100000 ? initial + 100 : 100000)}
                        />
                    </span>
                </div>
                <div className='inputElement'>
                    <span className='inputHeading'>Monthly Investment</span>
                    <span className='inputSpan'>
                        <RemoveCircle 
                            className='inputIcon'
                            onClick={() => setMonthly(monthly > 100 ? monthly - 100 : 100)}
                        />
                        <span className='inputData'>${monthly}</span>
                        <AddCircle 
                            className='inputIcon'
                            onClick={() => setMonthly(monthly < 10000 ? monthly + 100 : 10000)}
                        />
                    </span>
                </div>
                <div className='inputElement'>
                    <span className='inputHeading'>Choose a portfolio type</span>
                    <span className='options'>
                        <span className='option selected'>Low risk</span>
                        <span className='option'>Medium Risk</span>
                        <span className='option'>High Risk</span>
                    </span>
                </div>
            </div>
            <div className='output'>
                <span>Invested Amount: <span className='amount'>${amount}</span></span>
                <div className='outputMid'>
                    <span className='value'>Projected Value</span>
                    <h1 className='totalAmount'>${projected}</h1>
                </div>
                <div className='years'>
                    <RemoveCircle 
                        className='outputIcon'
                        onClick={() => setYears(years > 10 ? years - 5 : 5)}
                    />
                    <span className='year'>In {years} years</span>
                    <AddCircle
                        className='outputIcon'
                        onClick={() => setYears(years < 50 ? years + 5 : 50)}
                    />
                </div>
                <div className='outputBottom'>
                    <p>If market perform better: ${better}</p>
                    <p>If market perform worse: ${worse}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
