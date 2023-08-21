import { useSelector } from "react-redux"
import { selectError } from "redux/selectors"


export const SetError = () => {  
  const error = useSelector(selectError);
  return (
    <div>
      {error && <h2>Ooops, something wrong: {error} :( Try again!</h2>}
    </div>
  )


}