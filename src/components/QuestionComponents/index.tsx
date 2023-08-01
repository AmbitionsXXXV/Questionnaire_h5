import { type FC } from "react"

interface IProps {
  fe_id: string
  props: { title: string; placeholder: string }
}

const QuestionInput: FC<IProps> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props

  return (
    <>
      <p>{title}</p>
      <div>
        <input />
      </div>
    </>
  )
}

export default QuestionInput
