export default function reviewDetails({params}:{params:{productId:String, reviewId:string}}){
    return <h1>Welcome to review{params.reviewId} of product{params.productId}</h1>
}