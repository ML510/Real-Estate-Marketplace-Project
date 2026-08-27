"use client"

import Modal from "./Modal";
import { useCreatePropertyModalStore } from './../../store/useCreatePropertyModalStore';
import { useState } from "react";
import Button from "../ui/Button";

import PropertyTypeCard from "../properties/PropertyTypeCard";
import { propertyTypes } from '@/constants/PropertyTypes';
import Input from "../ui/Input";

const STEPS = {
    TYPE: 0,
    LOCATION: 1,
    DETAILS: 2,
    FEATURES: 3,
    IMAGE: 4,
    PRICING: 5
}


function CreatePropertyModal() {
    const [step, setStep] = useState(STEPS.TYPE)
    const { isOpen, close } = useCreatePropertyModalStore();
    const [loading, setLoading] = useState(false);
    const [propertyType, setPropertyType] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");

    const stepTitle = () => {
        switch (step) {
            case STEPS.TYPE:
                return "Select property type";
            case STEPS.LOCATION:
                return "Where is the property located?";
            case STEPS.DETAILS:
                return "Share some basics about your place";
            case STEPS.FEATURES:
                return "Property description";
            case STEPS.IMAGE:
                return "Upload property image";
            case STEPS.PRICING:
                return "set Property price";

            default:
                return
        }
    }

    const createListing = async () => {

    }

    return (
        <Modal onClose={close} isOpen={isOpen} title="Create a new Listing">
            <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
                <span>Step {step + 1} of 6</span>
                <span className="font-medium text-gray-700">{stepTitle()}</span>
            </div>

            <div className="min-h-55 rounded-xl text-gray-400 p-6 border border-dashed border-gray-300">
                {step === STEPS.TYPE && (
                    <div className="grid grid-cols-2 gap-4 w-full max-h-[50vh] overflow-y-scroll no-scrollbar">
                        {propertyTypes.map((item) => (
                            <PropertyTypeCard label={item.label} icon={item.icon} selected={propertyType === item.slug} onClick={() =>
                                setPropertyType(item.slug)} key={item.slug} />
                        ))}
                    </div>
                )}
                {step === STEPS.LOCATION && (
                    <div className="space-y-6 w-full">
                        <Input name="location" label="Location" value={location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} />
                        <Input name="address" label="Address" value={address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} />
                    </div>
                )}
            </div>

            <div className="mt-8 flex gap-3">
                {step > STEPS.TYPE && (
                    <Button variant="outline" fullWidth onClick={() => setStep((prev) => prev - 1)}>
                        Back
                    </Button>
                )}

                <Button fullWidth onClick={() => step < STEPS.PRICING ? setStep((prev) => prev + 1) : createListing()} loading={loading}>
                    {step === STEPS.PRICING ? "Create listing" : "Next"}
                </Button>
            </div>
        </Modal>
    )
}

export default CreatePropertyModal