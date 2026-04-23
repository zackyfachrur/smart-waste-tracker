import type { ReactNode } from "react"

type ErrorParagraphType = {
    children: ReactNode;
}

const ErrorParagraph = ({ children }: ErrorParagraphType) => {
    return <p className="text-sm text-red-500">{children}</p>
}

export default ErrorParagraph;