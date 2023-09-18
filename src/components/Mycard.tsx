import React from 'react'

interface IProps {
    heading: string
}

const Mycard: React.FC <IProps> = (props) => {
    return (
        <>
            <div className="col-sm-4">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h3>{props.heading}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste repudiandae placeat quisquam facere, doloribus id quod quas sit! Error id modi expedita, animi eaque accusamus culpa odit quas corrupti.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mycard