
export const Heading = ({ Heading1, Heading2 }) =>{
    return (
        <>
            <h1 className="text-3xl md:text-6xl font-bold my-6">
                {Heading1} 
                <span className="text-yellow-400"> {Heading2}</span>
            </h1>
        </>
    )
}