import {
    Button,
    Dialog,
    DialogBody,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <button
                type="button"
                onClick={handleOpen}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm"
            >
                Buy Now
            </button>
            <Dialog open={open} handler={handleOpen} className="bg-gray-50/90 backdrop-blur-sm border border-white rounded-3xl">
                <DialogBody className="p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-black text-gray-900 mb-1">Delivery Details</h2>
                        <p className="text-sm text-gray-500">Please enter your shipping information below.</p>
                    </div>
                    
                    <div className="space-y-4">
                        {/* Name Input */}
                        <div className="relative">
                            <Input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) => setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })}
                                label="Full Name"
                                color="red"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) => setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })}
                                label="Pincode"
                                color="red"
                            />
                            <Input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) => setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })}
                                label="Mobile Number"
                                color="red"
                            />
                        </div>

                        {/* Address Textarea */}
                        <Textarea
                            rows={4}
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => setAddressInfo({
                                ...addressInfo,
                                address: e.target.value
                            })}
                            label="Complete Address"
                            color="red"
                        />
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={handleOpen}
                            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="flex-1 px-4 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-md active:scale-95 transition-all"
                        >
                            Confirm Order
                        </button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;