import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "This is blog in next.js 14"
    }
}

export default function blog() {
    return <h1>Welcome to Blog page!</h1>
}