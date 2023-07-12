import { redirect } from "next/navigation"
import { PageResult, SearchParams } from "@/typings"
import { getFetchUrl } from "@/lib/getFetchUrl"
import ResultList from "@/components/ResultList"

type Props = {
  searchParams: SearchParams
  params: {
    term: string
  }
}

async function SearchPage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/")
  }
  console.log("test", { searchTerm: term, ...searchParams })
  const response = await fetch(getFetchUrl("api/search"), {
    method: "POST",
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  })

  const results = (await response.json()) as PageResult[]
  console.log(results)
  return (
    <div>
      <ResultList results={results} term={term}></ResultList>
    </div>
  )
}

export default SearchPage
