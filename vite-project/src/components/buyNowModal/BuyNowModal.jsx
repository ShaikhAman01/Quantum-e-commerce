import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-white bg-primary border border-transparent rounded-xl hover:bg-white hover:border-primary hover:text-primary transition-colors"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className="bg-pink-50">
                <DialogBody className="p-6">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value,
                                });
                            }}
                            placeholder="Enter your name"
                            className="bg-pink-50 border border-pink-200 px-4 py-2 w-full rounded-lg outline-none text-pink-600 placeholder-pink-300 transition-colors focus:border-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value,
                                });
                            }}
                            placeholder="Enter your address"
                            className="bg-pink-50 border border-pink-200 px-4 py-2 w-full rounded-lg outline-none text-pink-600 placeholder-pink-300 transition-colors focus:border-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="pincode"
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value,
                                });
                            }}
                            placeholder="Enter your pincode"
                            className="bg-pink-50 border border-pink-200 px-4 py-2 w-full rounded-lg outline-none text-pink-600 placeholder-pink-300 transition-colors focus:border-primary"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="mobileNumber"
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value,
                                });
                            }}
                            placeholder="Enter your mobile number"
                            className="bg-pink-50 border border-pink-200 px-4 py-2 w-full rounded-lg outline-none text-pink-600 placeholder-pink-300 transition-colors focus:border-primary"
                        />
                    </div>
                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-white bg-primary border border-transparent rounded-xl hover:bg-white hover:border-primary hover:text-primary transition-colors"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
