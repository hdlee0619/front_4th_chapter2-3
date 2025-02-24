import { useAtom } from "jotai"
import { sortByAtom } from "@features/searchPost/model"
import { SelectContainer, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select"

export const SortSelect = () => {
  const [sortBy, setSortBy] = useAtom(sortByAtom)

  return (
    <SelectContainer value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        <SelectItem value="id">ID</SelectItem>
        <SelectItem value="title">제목</SelectItem>
        <SelectItem value="reactions">반응</SelectItem>
      </SelectContent>
    </SelectContainer>
  )
}
