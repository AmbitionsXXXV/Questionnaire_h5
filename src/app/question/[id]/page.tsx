import { FC } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Question",
  description: "Generated by create next app"
}

interface IProps {
  params: { id: string }
}

const Question: FC<IProps> = ({ params }) => {
  return (
    <>
      <main className="text-2xl">Question page: {params.id}</main>
    </>
  )
}

export default Question
