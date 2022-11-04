import React from "react";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const AddressList = (props) => {
    const [selected, setSelected] = useState(props.address[0]);

    return (
        <div className="w-full px-4 py-16">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                        Choose Address
                    </RadioGroup.Label>
                    <div className="space-y-2">
                        {props.address.map((item) => (
                            <RadioGroup.Option
                                key={item.name}
                                value={item}
                                className={({ active, checked }) =>
                                    `${active
                                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-zomato-300"
                                        : ""
                                    }
              ${checked
                                        ? "bg-zomato-100 bg-opacity-75 text-zomato-600"
                                        : "bg-white"
                                    }
                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? "text-zomato-600" : "text-gray-900"
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked ? "text-zomato-500" : "text-gray-500"
                                                            }`}
                                                    >
                                                        <span>{item.address}</span>{" "}
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#d13d3d" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default AddressList;