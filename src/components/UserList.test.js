import { render, screen } from "@testing-library/react"
import { UserList } from "./UserList"

describe('UserList', () => {
  it('render UserList', () => {
    render(<UserList />)
    const headerElement = screen.getByRole('heading', { name: /ユーザー一覧/i })
    expect(headerElement).toBeInTheDocument()
  })

  it('should render user list', async () => {
    render(<UserList />)
    const listElements = await screen.findAllByRole('listitem')
    expect(listElements[0]).toBeInTheDocument()
  })
})