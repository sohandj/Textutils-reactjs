import React,{useState} from 'react'

export default function Accrodion(props) {

  return (
    <>
    <div className={`container my-4 text-${props.textColor}`} >
        <h1>Accordion</h1>
        <div className="accordion" id="accordionExample" >
            {/* Accordion Item 1 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button text-${props.textColor} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.textColor} bg-${props.mode}`}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default. Only one panel opens at a time.
                    </div>
                </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button text-${props.textColor} bg-${props.mode}`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  >
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.textColor} bg-${props.mode}`}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default.
                    </div>
                </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button text-${props.textColor} bg-${props.mode}`}  type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  >
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className={`accordion-body text-${props.textColor} bg-${props.mode}`}>
                        <strong>This is the third item's accordion body.</strong> Works the same way as others.
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    </>
  )
}