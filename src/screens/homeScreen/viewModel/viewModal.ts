import { useState } from "react"
import { ModalProps } from "../modal/modal"
import { userInfo } from "../../../utils/data"

export const useViewModal = () => {
    const [info, setInfo] = useState<ModalProps>(userInfo);

    const handleInfo = (newInfo: ModalProps) => {
        setInfo(newInfo);
    }

    return {
        info,
        handleInfo
    }
}
