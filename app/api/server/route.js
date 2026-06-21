export async function GET(request) {
    
  const searchParams=await request.nextUrl.searchParams;

  console.log(searchParams.get("page"))
  const result={
    success:true,
    message:"All Users are Retrieved Successfully...",
    data:"Heloo"
  }

  return  Response.json(result)
}