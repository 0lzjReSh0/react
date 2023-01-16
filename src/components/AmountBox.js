

const AmountBox=({text,type,amount})=> {
    return (
        <div className="col">
            <div className="card">
                <div className={`card-header bg-${type} text-black`}>
                    {text}
                </div>
                <div className='card-body text-black'>
                    {amount}
                </div>
            </div>
        </div>
    );
}
export default AmountBox;