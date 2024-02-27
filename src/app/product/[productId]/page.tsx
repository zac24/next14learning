import { Metadata } from "next";

type Props = {
    params: {
        productId : string
    }
}

export const generateMetadata = async ({ params}: Props): Promise<Metadata> => {
    const title =  await new Promise( resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return (
        {title: `Product ${title}`}
    )
}

export default function prdouctDetail({params,} : Props) {
    return <h1>Welcome to product {params.productId} detail page</h1>
}