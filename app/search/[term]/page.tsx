import { redirect } from "next/navigation"
import { SearchParams } from "@/typings"

type Props = {
  searchParams: SearchParams
  params: {
    term: string
  }
}

function SearchPage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/")
  }
  return <div>Welcome to the search page</div>
}

export default SearchPage
