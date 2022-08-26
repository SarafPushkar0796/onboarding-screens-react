import React, { useEffect, useState } from "react"
import logo from './images/bootstrap-logo.svg'

export default function StepperForm() {

    // initial states for every forms
    const [activeStepOne, setActiveStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [stepFour, setStepFour] = useState(false)

    // steps completion progress
    const [stepOneComp, setStepOneComp] = useState(false)
    const [stepTwoComp, setStepTwoComp] = useState(false)
    const [stepThreeComp, setStepThreeComp] = useState(false)    

    const [selfCardSelect, setSelfCardSelect] = useState(false)
    const [teamCardSelect, setTeamCardSelect] = useState(false)    

    useEffect(() => {

        // First step active
        setActiveStepOne(true)        
    }, [])    

    // function called on every button click
    function nextStep(step) {
        switch (step) {
            case 'two': 
                setActiveStepOne(false)
                setStepOneComp(true)
                setStepTwo(true)            
                break;

            case 'three': 
                setStepTwo(false)
                setStepTwoComp(true)
                setStepThree(true)                            
                break;

            case 'four': 
                setStepThree(false)
                setStepThreeComp(true)
                setStepFour(true)                            
                break;

            case 'submit': setStepFour(false); break;
            default: break;
        }
    }

    // function called on every card click
    function selectCard(str){
        switch (str){
            case 'myself': 
                setSelfCardSelect(true)
                setTeamCardSelect(false)
                break;
                
            case 'team': 
                setSelfCardSelect(false)
                setTeamCardSelect(true)
                break;

            default: break;
        }
    }

    function onSubmit(e) { e.preventDefault() }

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    
                    <div className="col-lg-7 form-center">
                        <div className="p-4">
                            <div className="d-flex">

                                {/* Logo */}
                                <img className="mx-auto mb-4" src={logo} alt="" width="72" height="57" />
                            </div>

                            <div id="stepper1" className="bs-stepper">

                                {/* Horizontal stepper */}
                                <div className="bs-stepper-header">
                                    <div className="step" data-target="#test-l-1">
                                        <button className={activeStepOne ? "step-trigger active" : "step-trigger"}>
                                            <span className={activeStepOne ? "bs-stepper-circle text-white" : "bs-stepper-circle border border-secondary"}>
                                                {
                                                    stepOneComp ? <i className="text-primary bi bi-check-circle-fill" style={{fontSize: '2rem', marginTop: '-0.6rem'}}></i> : 1
                                                }
                                            </span>
                                        </button>
                                    </div>
                                    <div className={stepFour ? "line border-primary border-top" : "line"}></div>
                                    <div className="step" data-target="#test-l-2">
                                        <button className={stepTwo ? "step-trigger active" : "step-trigger"}>
                                            <span className={stepTwo ? "bs-stepper-circle text-white" : "bs-stepper-circle border border-secondary"}>
                                                {
                                                    stepTwoComp ? <i className="text-primary bi bi-check-circle-fill" style={{fontSize: '2rem', marginTop: '-0.6rem'}}></i> : 2
                                                }
                                            </span>
                                        </button>
                                    </div>
                                    <div className={stepFour ? "line border-primary border-top" : "line"}></div>
                                    <div className="step" data-target="#test-l-3">
                                        <button className={stepThree ? "step-trigger active" : "step-trigger"}>
                                            <span className={stepThree ? "bs-stepper-circle text-white" : "bs-stepper-circle border border-secondary"}>
                                                {
                                                    stepThreeComp ? <i className="text-primary bi bi-check-circle-fill" style={{fontSize: '2rem', marginTop: '-0.6rem'}}></i> : 3
                                                }
                                            </span>
                                        </button>
                                    </div>
                                    <div className={stepFour ? "line border-primary border-top" : "line"}></div>
                                    <div className="step" data-target="#test-l-4">
                                        <button className="step-trigger">
                                            <span className={stepFour ? "bs-stepper-circle text-white" : "bs-stepper-circle border border-secondary"}>
                                                {
                                                    stepFour ? <i className="text-primary bi bi-check-circle-fill" style={{fontSize: '2rem', marginTop: '-0.6rem'}}></i> : 4
                                                }
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Display when all steps are complete  */}
                                {
                                    (
                                        stepFour ? 
                                            <>
                                                <div className="text-center">
                                                    <h1><i className="text-success fs-1 bi bi-check-circle-fill" style={{fontSize: '4rem'}}></i></h1>
                                                </div>
                                            </> 
                                        : ''
                                    )
                                }

                                {/* Form title(s) */}
                                <div className="text-center mt-5 mb-5">
                                    <h3>
                                        <strong>
                                            {
                                                (activeStepOne ? 'Welcome! First things first...' : (stepTwo ? 'Lets set up a home for all your work' : (stepThree ? 'How are you planning to use Bootstrap?' : 'Congratulations, Pushkar!')))
                                            }
                                        </strong>
                                    </h3>
                                    <p className="mt-3 text-secondary">
                                        {(stepThree ? 'We will streamline your experience accordingly' : 'You have completed onboarding, you can now start using Bootstrap garden Pushkar!')}
                                    </p>
                                </div>

                                <div className="bs-stepper-content">

                                    {/* Form */}
                                    <form onSubmit={onSubmit}>
                                        {
                                            (
                                                activeStepOne ?
                                                    <>
                                                        <div id="test-l-1" className="">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="exampleFullName">Full name</label>
                                                                <input type="text" className="form-control" id="exampleFullName" placeholder="E.g. Pushkar Saraf" />
                                                            </div>
                                                        </div>
                                                        <div id="test-l-2" className="">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="exampleDisplayName">Display name</label>
                                                                <input type="text" className="form-control" id="exampleDisplayName" placeholder="E.g. Pushkar07" />
                                                            </div>
                                                            <button className="btn btn-primary w-100" onClick={() => nextStep('two')}>Next</button>
                                                        </div>
                                                    </>
                                                    : ''
                                            )
                                        }


                                        {
                                            (
                                                stepTwo ?
                                                    <>
                                                        <div id="test-l-3" className="">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="exampleWorkspaceName">Workspace name</label>
                                                                <input type="text" className="form-control" id="exampleWorkspaceName" placeholder="E.g. Bootstrap garden" />
                                                            </div>
                                                        </div>
                                                        <div id="test-l-4" className="">
                                                            <label htmlFor="exampleWorkspaceURL">Workspace URL</label>
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="exampleWorkspaceURL">https://</span>
                                                                <input type="text" className="form-control" id="basic-url" aria-describedby="exampleWorkspaceURL" />
                                                            </div>
                                                            <button className="btn btn-primary w-100" onClick={() => nextStep('three')}>Next</button>
                                                        </div>
                                                    </>
                                                    : ''
                                            )
                                        }

                                        {
                                            (
                                                stepThree ?
                                                    <>
                                                        <div id="test-l-5" className="">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group mb-3">
                                                                        <div className={selfCardSelect ? "card select-card border border-primary shadow-sm" : "card select-card"} onClick={() => selectCard('myself')}>
                                                                            <div className="card-body">
                                                                                <h3 className={selfCardSelect ? "text-primary" : ""}><i className="bi bi-person-fill"></i></h3>
                                                                                <h5 className="mt-4 card-title"><b>For myself</b></h5>
                                                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="form-group mb-3">
                                                                        <div className={teamCardSelect ? "card select-card border border-primary shadow-sm" : "card select-card"} onClick={() => selectCard('team')}>
                                                                            <div className="card-body">
                                                                                <h3 className={teamCardSelect ? "text-primary" : ""}><i className="bi bi-people-fill"></i></h3>
                                                                                <h5 className="mt-4 card-title"><b>For my team</b></h5>
                                                                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary w-100" onClick={() => nextStep('four')}>Next</button>
                                                    </>
                                                    : ''
                                            )
                                        }

                                        {
                                            (
                                                stepFour ? 
                                                    <>                                                        
                                                        <button className="btn btn-primary w-100" onClick={() => nextStep('submit')}>Launch</button>
                                                    </>
                                                : ''
                                            )
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}