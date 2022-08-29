import { render, screen } from "@testing-library/react"
import { UserList } from "./UserList"
import axios from "axios"
jest.mock('axios')

describe('UserList', () => {
  it('render UserList', () => {
    render(<UserList />)
    const headerElement = screen.getByRole('heading', { name: /ユーザー一覧/i })
    expect(headerElement).toBeInTheDocument()
  })

  it('should render user list', async () => {
    axios.get.mockResolvedValue({ data: [{ name: 'John Doe', id: 1 }] });
    render(<UserList />)
    const listElements = await screen.findAllByRole('listitem')
    expect(listElements[0]).toBeInTheDocument()
  })
})