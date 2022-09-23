import { useEffect } from "react";
import { useRouteError  } from "react-router-dom";

export default function ErrorPage() {
  const error : any = useRouteError();
  
useEffect(() => {
  console.log(error)
}, [error])


  let errorContent
  if(error){
    errorContent =  <i>{error.statusText || error.message}</i>
  }else{
    errorContent =  <i>Unknow Error</i>
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       {errorContent}
      </p>
    </div>
  );
}