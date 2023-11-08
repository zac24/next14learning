import { notFound } from "next/navigation"

export default function reviewDetails({params}:{params:{productId:String, reviewId:string}}){
    if(parseInt(params.reviewId) > 1000){
        notFound()
    }
    return <h1>Welcome to review{params.reviewId} of product{params.productId}</h1>
}