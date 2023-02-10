import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from ".";

const Welcome = () => {

    const connectWallet = () => {

    }
    return (
        <div className="flex w-full justify-left item-center">
            <div className="flex lg:flex-row flex-col items-start justify-between lg:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col lg:mr-10">
                    <h1 className="text-white text-5xl left-align-text">
                        "Prokeii"
                        <span className="text-gradient_google text-5xl">   BrainStorm Lab</span>
                        <br />
                    </h1>
                    <p className="text-left mt-5 text-white font-light text-base">
                        Crypto will be the future in the world - Coding in Law
                    </p>
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#686de0] p-3 rounded-full cursor-pointer hover:bg-[#4834d4]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Welcome;