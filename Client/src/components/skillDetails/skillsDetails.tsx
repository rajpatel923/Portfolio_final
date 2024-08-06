
import { useParams } from 'react-router-dom'
const SkillDetail = () => {
  const {skillTitle} = useParams()
  return (
    <div>{skillTitle}</div>
  )
}

export default SkillDetail