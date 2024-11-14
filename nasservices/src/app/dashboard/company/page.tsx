"use client"

import { useState } from "react";

export default function Company()
{
    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Personal Details', 'Address', 'Payment', 'Review'];

    // Function to move to the next step
    const handleStepClick = (index : any) => {
        setActiveStep(index);
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10 p-5 border border-gray-200 rounded-lg shadow-md">
            {/* Stepper Header */}
            <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center cursor-pointer ${
                            activeStep === index ? 'text-blue-500' : 'text-gray-500'
                        }`}
                        onClick={() => handleStepClick(index)}
                    >
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                                activeStep === index ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                            }`}
                        >
                            <span className="font-semibold">{index + 1}</span>
                        </div>
                        <span className="text-xs mt-2">{step}</span>
                    </div>
                ))}
            </div>

            {/* Stepper Content */}
            <div className="mb-5">
                {activeStep === 0 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Personal Details</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </form>
                    </div>
                )}

                {activeStep === 1 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Address</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">City</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your city"
                                />
                            </div>
                        </form>
                    </div>
                )}

                {activeStep === 2 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Payment</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter your card number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Expiration Date</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="MM/YY"
                                />
                            </div>
                        </form>
                    </div>
                )}

                {activeStep === 3 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Review</h2>
                        <p className="text-gray-700 mb-4">Please review your details before submitting.</p>
                        <button
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            onClick={() => alert('Form Submitted!')}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>

            {/* Stepper Navigation */}
            <div className="flex justify-between">
                <button
                    className={`py-2 px-4 rounded ${
                        activeStep === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'
                    }`}
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                    disabled={activeStep === 0}
                >
                    Previous
                </button>
                <button
                    className={`py-2 px-4 rounded ${
                        activeStep === steps.length - 1
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white'
                    }`}
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    disabled={activeStep === steps.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}