export default function Overview(props : any)
{
    return(
        <>
            <div className="p-4">
                { props.data ? (
                    <div> Company overview Data </div>
                ) : (
                    <div> No Data for Company overview </div>
                ) }
                
            </div>
        </>
    );
}