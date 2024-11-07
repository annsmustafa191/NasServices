import Image from 'next/image';

export default function Homepage() {
    return (
        <>
            {/* HomePage Section 1 */}
            <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4">
                <div className="w-[326px] h-[110px]">

                    <h3 className="text-sm font-normal pb-[13px] text-[#515151]">Registered Companies</h3>

                    <div className="flex gap-2">

                        <div className="w-[160px] h-[80px] bg-[#444658] rounded-lg pl-3 py-2 shadow-xl">

                            <div className='w-[25px] h-[25px]'>
                                <Image
                                    src="/header/user-profile 1.png"
                                    alt="My Image"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className='font-normal text-xl text-white'>
                                <p>Heading</p>
                            </div>
                            <div className='font-normal text-[11px] text-white'>
                                See details
                            </div>
                        </div>

                        <div className="w-[160px] h-[80px] rounded-lg pl-3 py-2 shadow-xl">

                            <div className='w-[25px] h-[25px]'>
                                <Image
                                    src="/header/user-profile 1.png"
                                    alt="My Image"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className='font-normal text-xl text-[#444658]'>
                                <p>Heading</p>
                            </div>
                            <div className='font-normal text-[11px] text-[#444658]'>
                                See details
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-[447px] h-[96px] flex gap-7">

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">Total Assets</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">12</h2>
                            <p className="text-[12px] font-normal text-[#878482]">NasTecSol</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">Total Employees</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">402</h2>
                            <p className="text-[12px] font-normal text-[#878482]">NasTecSol</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="text-sm font-normal text-[#515151]">Total Employee Salary</p>
                            <h2 className="text-4xl font-semibold text-[#2F2F2F]">SAR 528,976</h2>
                            <p className="text-[12px] font-normal text-[#878482]">July, 2024</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* HomePage Section 2 */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">

                {/* Employess Notifications Table Start */}
                <div className="p-4 rounded-2xl shadow-xl">

                    <div className='flex flex-col gap-5'>

                        <div className='flex justify-between'>

                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div>
                                    <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <rect id="Frame 40700" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <path id="Vector" d="M28.83 23.83C27.9 23.44 26.81 23.77 26.23 24.62L23.05 29.51C22.94 29.68 22.65 29.68 22.59 29.45L21.26 25.18C21.21 25.01 21.26 24.79 21.38 24.67L22.36 23.72C22.59 23.55 22.42 23.16 22.13 23.16L18.66 23.16C18.38 23.16 18.2 23.49 18.43 23.72L19.42 24.67C19.53 24.79 19.59 25.01 19.53 25.18L18.2 29.45C18.14 29.68 17.86 29.68 17.74 29.51L14.56 24.62C13.99 23.77 12.95 23.44 11.97 23.83C6.07 26.19 4 28.27 4 34.34C4 35.07 4.57 35.63 5.32 35.63L35.47 35.63C36.22 35.63 36.8 35.07 36.8 34.34C36.8 28.27 28.83 23.83 28.83 23.83ZM20.4 21.3C28.14 21.3 32.18 4.16 20.4 4C8.62 4.22 12.66 21.3 20.4 21.3Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                </div>
                                <div>
                                    <p>
                                        Employees’ Notifications
                                    </p>
                                </div>
                                <div>
                                    <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-sm font-semibold text-white bg-red-600 rounded-full">
                                        2
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md">
                                    Filters
                                    <svg width="12.000000" height="8.000000" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M5.33 8L6.66 8C7.03 8 7.33 7.7 7.33 7.33C7.33 6.96 7.03 6.66 6.66 6.66L5.33 6.66C4.96 6.66 4.66 6.96 4.66 7.33C4.66 7.7 4.96 8 5.33 8ZM0.66 0C0.29 0 0 0.29 0 0.66C0 1.03 0.29 1.33 0.66 1.33L11.33 1.33C11.7 1.33 12 1.03 12 0.66C12 0.29 11.7 0 11.33 0L0.66 0ZM2.66 4.66L9.33 4.66C9.7 4.66 10 4.36 10 4C10 3.63 9.7 3.33 9.33 3.33L2.66 3.33C2.29 3.33 2 3.63 2 4C2 4.36 2.29 4.66 2.66 4.66Z" fill="#808080" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button></td>
                                        <td className="px-4 py-2">Arqum Satti</td>
                                        <td className="px-4 py-2">Passport Expiry</td>
                                        <td className="px-4 py-2">15 Days Left</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button></td>
                                        <td className="px-4 py-2">Arqum Satti</td>
                                        <td className="px-4 py-2">Passport Expiry</td>
                                        <td className="px-4 py-2">15 Days Left</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button></td>
                                        <td className="px-4 py-2">Arqum Satti</td>
                                        <td className="px-4 py-2">Passport Expiry</td>
                                        <td className="px-4 py-2">15 Days Left</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button></td>
                                        <td className="px-4 py-2">Arqum Satti</td>
                                        <td className="px-4 py-2">Passport Expiry</td>
                                        <td className="px-4 py-2">15 Days Left</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Company Notifications Table Start */}
                <div className="p-4  rounded-2xl shadow-xl">
                    <div className='flex flex-col gap-5'>

                        <div className='flex justify-between'>

                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div>
                                    <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs>
                                            <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                            </pattern>
                                            <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                        <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                        <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                            <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                        </mask>
                                        <g mask="url(#mask27_1886)">
                                            <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                        </g>
                                    </svg>

                                </div>
                                <div>
                                    <p>
                                        Company’s Notifications
                                    </p>
                                </div>
                                <div>
                                    <span className="inline-flex items-center justify-center w-6 h-6 ms-2 text-sm font-semibold text-white bg-red-600 rounded-full">
                                        2
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md">
                                    Filters
                                    <svg width="12.000000" height="8.000000" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M5.33 8L6.66 8C7.03 8 7.33 7.7 7.33 7.33C7.33 6.96 7.03 6.66 6.66 6.66L5.33 6.66C4.96 6.66 4.66 6.96 4.66 7.33C4.66 7.7 4.96 8 5.33 8ZM0.66 0C0.29 0 0 0.29 0 0.66C0 1.03 0.29 1.33 0.66 1.33L11.33 1.33C11.7 1.33 12 1.03 12 0.66C12 0.29 11.7 0 11.33 0L0.66 0ZM2.66 4.66L9.33 4.66C9.7 4.66 10 4.36 10 4C10 3.63 9.7 3.33 9.33 3.33L2.66 3.33C2.29 3.33 2 3.63 2 4C2 4.36 2.29 4.66 2.66 4.66Z" fill="#808080" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* table start from here */}
                        <div className="overflow-x-auto">
                            <div className="min-w-full space-y-2">
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAC3RJREFUeJzt3T+LdGmdx+Hvo+0y/uFZEwPFQIVnInGQxTcwoRM50b4LwzEy0cBdNtgXsBsbCEYamIiJYCiC0SYTDGgo6IjusPQGnQoyU919W/W5Lqj4/M45fdf59KlT3RsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8fS9OD0DGy21vbXtz2xvbvrTts9s+cXAmOO2DbX/Y9u62X2/7+bafbvvjwZkAHsXr2/572/vb7r28vP7u6/1t/7Xt1QCu0Ce3/ccefsM5/Ybq5XWNr//d9u/bXhs8AR8B8BRebfvxtq+eHgRuwK+2vb3td6cH4bYIAB7b17f9bNvnTg8CN+S9PTxD85vTg3A7BACP6dW2X87FH57Ce9u+se33pwfhNnzs9ADcjNe2/Wgu/vBUvrjtJ3t4vgYu9vHTA3AzfrDtW6eHgBv3hW3/t+0Xh+fgBvgIgMfw+rbfbrs7PQgE/GkPH7f5KICL+AiAx/DOXPzhuXxm23dPD8H1cweAS73cw9eTPnV6EAh5f9vn5y8GcgF3ALjUW3Pxh+f26W3fPD0E100AcKk3Tw8AUdYeFxEAXOqN0wNA1NdOD8B1EwBc6sunB4Cor5wegOvmIUAu9ddt/3R6CAj66/yjIC4gALjU/ekBIMx7OB+ZjwAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAi6Oz0AXLkXh7d/f3j79f2Hq+UOAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQS9OD8DVuz89AIR5D+cjcwcAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICgu9MDPKOX297a9ua2N7Z9adtnt33i4Ez/CF6cHuDKnT5+94e3X9//a1c/fh9s+8O2d7f9etvPt/102x8PzvRsTi/e5/D6tne2/eu2Tx2e5R/RpT8D9TeQ02vo9PGv7/9p1u/j+/O2H277t23/c3iWJ3V68T6lT2773rZvr3Wn48PyBnKZ02vo9PGv7/9p1u/T+WDbf2777ra/HJ7lSZxevE/l1bYfb/vq6UGugDeQy5xeQ6ePf33/T7N+n96vtr297XenB3lspxfvU/j6tp9t+9zpQa6EN5DLnF5Dp49/ff9Ps36fx3t7eIbsN6cHeUynF+9je7Xtl3Px/zC8gVzm9Bo6ffzr+3+a9ft83tv2jW2/Pz3IY7mlrwG+tu1Hc/EH4PF9cdtP9vB82U24pQD4/h6+3gcAT+Fftn3n9BCP5fTtu8fy+rbfztP+H4VbiJc5vYZOH//6/p9m/T6/P+3h4+ar/yjgVu4AvDMXfwCe3mf28NXAq3e63h/Dyz18PcMf+flo/AZxmdNr6PTxr+//adbvGe9v+/yu/C8G3sIdgLfm4g/A8/n0tm+eHuJStxAAb54eAICcq7/23EIAePIfgOf2tdMDXOoWAuDLpwcAIOcrpwe41C0EwMvTAwCQ88+nB7jU6Sd4H4OnWC/jKeLLnF5Dp49/ff9Ps37POv3zf5FbuAMAAHxIAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABA0N3pAeDK1f+fen3/4Wq5AwAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQNDd6QFuwIvD278/vP26+vmv73+d83/F3AEAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACDo7vQAN+D+9AAcVT//9f2vc/6vmDsAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAE3Z0e4Aa8OLz9+8Pbr6uf//r+1zn/V8wdAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAgu5OD3AD7k8PwFH181/f/zrn/4q5AwAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQNDd6QFuwIvD278/vP26+vmv73+d83/F3AEAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACDo7vQAN+D+9AAcVT//9f2vc/6vmDsAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGx7cXqAbfenBwCAA45egz92cuMAwBkCAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwN/0/BFYmcyJOpVEAAAAASUVORK5CYII=" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-full border border-gray-300">
                                    <div className="px-4 py-2 flex items-center space-x-2 flex-1">
                                        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs>
                                                <pattern id="pattern_27_18860" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                                    <use xlinkHref="#image27_1886_0" transform="matrix(0.001953,0,0,0.001953,0,0)" />
                                                </pattern>
                                                <image id="image27_1886_0" width="512.000000" height="512.000000" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                            <rect id="Frame 40701" rx="19.500000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#444658" fillOpacity="1.000000" />
                                            <mask id="mask27_1886" mask-type="alpha" maskUnits="userSpaceOnUse" x="3.200195" y="3.199997" width="33.600098" height="33.600006">
                                                <rect id="office-building 1" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="url(#pattern_27_18860)" fillOpacity="1.000000" />
                                            </mask>
                                            <g mask="url(#mask27_1886)">
                                                <rect id="Rectangle 12" x="3.200195" y="3.199997" width="33.600002" height="33.600002" fill="#FFFFFF" fillOpacity="1.000000" />
                                            </g>
                                        </svg>
                                        <span> Gulberg Branch </span>
                                    </div>
                                    <div className="px-4 py-2 flex-1">License</div>
                                    <div className="px-4 py-2 flex-1">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-purple-500 p-4 text-white">
                    <div className='flex flex-col'>

                        <div className='flex justify-between'>

                            <div className='flex flex-row'>
                                <div>
                                    Image
                                </div>
                                <div>
                                    <p>
                                        Heading
                                    </p>
                                </div>
                                <div>
                                    Icon
                                </div>
                            </div>
                            <div>
                                container 1.1
                            </div>
                        </div>

                        <div className='grid grid-cols-4 grid-rows-1'>

                            <div className='w-[152px] h-[167px] flex flex-col'>
                                <div className='w-[138px] h-[68px]'>
                                    <h1 className='text-sm font-medium'>Toyota Cammry</h1>
                                    <p className='text-[11px] font-normal'>AFT 090</p>
                                    <p className='text-[11px] font-normal'> Registeration: <span className="bg-green-100 w-[46px] text-green-800 text-[6px] font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Green</span></p>
                                    <p className='text-[11px] font-normal'> Token: <span className="bg-yellow-100 w-[41px] text-[6px] text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Yellow</span></p>
                                </div>
                                <div>
                                    <Image
                                        src="/dash-home/Rectangle 571.png"
                                        alt="My Image"
                                        width={152}
                                        height={89}
                                    />
                                </div>
                            </div>

                            <div>
                                Card 2
                            </div>
                            <div>
                                Card 3
                            </div>
                            <div>
                                Card 4
                            </div>
                        </div>



                    </div>
                </div>

                <div className="bg-pink-500 p-4 text-white">Item 6</div>
            </div>
        </>
    );

}