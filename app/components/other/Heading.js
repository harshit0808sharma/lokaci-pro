
export const Heading = ({ Heading1, Heading2 }) =>{
    return (
        <>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {Heading1} 
                <span className="text-yellow-400"> {Heading2}</span>
            </h1>
        </>
    )
}