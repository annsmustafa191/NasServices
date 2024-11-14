export default function Overview(props : any)
{
    return(
        <>
            <div className="bg-pink-500 p-4 text-white">
                { props.data ? (
                    <div> Company overview Data </div>
                ) : (
                    <div> No Data for Company overview </div>
                ) }
                
            </div>
        </>
    );
}