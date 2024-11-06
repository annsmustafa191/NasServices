import Link from 'next/link';

export default function Dashnav()
{
    return(
        <div className="w-[77px] flex flex-col justify-center items-center h-[655px]">
            <div className='shadow-2xl h-[272px] rounded-r-3xl flex flex-col justify-center items-center gap-3'>
            <div>
                <Link href="/dashboard">
                Home
                </Link>
                </div>
            <div><Link href="/dashboard/employee">
                Employee
                </Link></div>
            <div>Companies</div>
            <div>Assets</div>
            <div>Settings</div>
            </div>
        </div>
    );
}
